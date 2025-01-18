import { fetchCompetition } from "./fetchData/fetchCompetition.js";
import fetchGooglePlacesData from "./fetchData/fetchGooglePlacesData.js";
import { generateRecommendations } from "./fetchData/generateRecommendations.js";

async function analyzeFeasibility(inputs) {
    const { restaurant_type, team_size, budget, price_point, lat, long } = inputs;
    const location = `${lat},${long}`;

    // Step 1: Fetch external data
    const competitors = await fetchCompetition(lat, long, restaurant_type);
    const googlePlacesData = await fetchGooglePlacesData(location);
    console.log("Google Places API Response:", JSON.stringify(googlePlacesData, null, 2));

    // Extract relevant data from Google Places API response
    const population = googlePlacesData.results[0]?.plus_code?.global_code; // Example: needs more specific extraction
    const nearbyCompetitors = googlePlacesData.results.length;

    // Step 2: Perform analysis
    let score = 100;
    if (budget < rentEstimate) score -= 30;
    if (nearbyCompetitors > 10) score -= 20;
    if (population < 10000) score -= 15;

    // Step 3: Generate recommendations
    const recommendations = await generateRecommendations({
        restaurant_type,
        team_size,
        budget,
        price_point,
        lat, long,
        competitors: nearbyCompetitors
    });

    // Step 4: Return results
    return {
        score,
        analysis: {
            rent: rentEstimate,
            competitors: nearbyCompetitors,
            population,
        },
        recommendations,
    };
}

export { analyzeFeasibility };
