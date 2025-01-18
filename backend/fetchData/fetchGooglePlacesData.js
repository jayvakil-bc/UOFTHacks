import axios from 'axios';

const apiKey = process.env.GOOGLE_PLACES_API_KEY;

async function fetchGooglePlacesData(location) {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(location)}&key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Google Places API:', error);
    throw error;
  }
}

export default fetchGooglePlacesData;
