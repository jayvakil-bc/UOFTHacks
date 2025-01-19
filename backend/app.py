import os
from flask import Flask, jsonify
import pandas as pd
import s3fs
from io import StringIO

app = Flask(__name__)

# Load AWS credentials from environment variables
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
S3_BUCKET_NAME = os.environ.get("S3_BUCKET_NAME")
S3_FILE_KEY = os.environ.get("S3_FILE_KEY")

if not AWS_ACCESS_KEY_ID or not AWS_SECRET_ACCESS_KEY or not S3_BUCKET_NAME or not S3_FILE_KEY:
    raise ValueError("AWS credentials and S3 details must be set in environment variables.")

@app.route('/top_ethnic_groups/<area_name>')
def top_ethnic_groups(area_name):
    s3 = s3fs.S3FileSystem(key=AWS_ACCESS_KEY_ID, secret=AWS_SECRET_ACCESS_KEY)
    try:
        with s3.open(f'{S3_BUCKET_NAME}/{S3_FILE_KEY}', 'r') as f:
            csv_content = f.read()
        df = pd.read_csv(StringIO(csv_content))

        if area_name not in df.columns:
            return jsonify({"error": f"Area '{area_name}' not found in CSV columns: {df.columns.tolist()}"}), 400

        # Convert the area column to integer after removing commas
        df[area_name] = df[area_name].astype(str).str.replace(',', '').astype(int)

        # Get the top 5 ethnic groups
        top_5 = df.sort_values(by=area_name, ascending=False).head(5)

        # Prepare the result for JSON serialization
        result = top_5[['Characteristic', area_name]].to_dict('records')

        return jsonify(result)

    except FileNotFoundError:
        return jsonify({"error": f"File '{S3_FILE_KEY}' not found in bucket '{S3_BUCKET_NAME}'"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500