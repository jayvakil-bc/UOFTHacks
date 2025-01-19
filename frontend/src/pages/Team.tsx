import { useState } from 'react';

const AnalyzeRequest = () => {
  const [response, setResponse] = useState(null);

  const sendAnalysisRequest = async () => {
    const payload = {
      "priceRange": "25",
      "theme": "study cafe",
      "description": "study cafe",
      "latitude": 43.7757,
      "longitude": 79.3451
    };

    try {
      const res = await fetch('http://localhost:3000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.analysis);
    } catch (error) {
      console.error('Error making the API request:', error);
      // setResponse('An error occurred while processing the request.');
    }
  };

  return (
    <div>
      <button onClick={sendAnalysisRequest}>Send Analysis Request</button>
      {response && <div><h3>Test:</h3><pre>{response}</pre></div>}
    </div>
  );
};

export default AnalyzeRequest;