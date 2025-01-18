import { fetchCompetition } from "./fetchData/fetchCompetition.js";
import fetchGooglePlacesData from "./fetchData/fetchGooglePlacesData.js";
import { generateRecommendations } from "./fetchData/generateRecommendations.js";

async function analyzeFeasibility(inputs) {
    const { restaurant_type, team_size, budget, price_point, lat, long } = inputs;
    const location = `${lat},${long}`;

    const competitors = await fetchCompetition(lat, long, restaurant_type);
    const googlePlacesData = await fetchGooglePlacesData(location);
    console.log("Google Places API Response:", JSON.stringify(googlePlacesData, null, 2));

    const population = googlePlacesData.results[0]?.plus_code?.global_code; // Example: needs more specific extraction
    const nearbyCompetitors = googlePlacesData.results.length;

    let score = 100;
    if (budget < rentEstimate) score -= 30;
    if (nearbyCompetitors > 10) score -= 20;
    if (population < 10000) score -= 15;

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
