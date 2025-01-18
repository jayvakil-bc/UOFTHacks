import axios from "axios";
import 'dotenv/config';

async function fetchCompetition(lat, long, restaurant_type) {
const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    let response;
    try{
    response = await axios.get(
        "https://places.googleapis.com/v1/places:searchNearby",
        {
            params: {
                location: `${lat},${long}`,
                radius: 1000,
                keyword: restaurant_type,
                key: apiKey,
            },
        }
    );
    } catch(err) {
        console.log(err);
        throw err;
    }
    return response.data.results.length; 
}

export { fetchCompetition };
