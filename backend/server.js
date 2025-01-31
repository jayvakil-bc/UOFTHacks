import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { OpenAI } from 'openai';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY; // Using the provided API key
const openAiApiKey = process.env.OPENAI_API_KEY; // Using the provided API key

const openai = new OpenAI({
  apiKey: openAiApiKey,
});

app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Important: Serve from 'dist' (Vite's build output)

app.get('/', (req, res) => {
  res.send('Restaurant Consultant API');
});

app.post('/analyze', async (req, res) => {
  const { priceRange, theme, description, latitude, longitude } = req.body;
  console.log('Received analysis request:', { priceRange, theme, description, latitude, longitude });
  const location = `${latitude},${longitude}`;
  const googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=restaurant&key=${googlePlacesApiKey}`;

  try {
    const googlePlacesResponse = await axios.get(googlePlacesUrl);
    //console.log('Google Places API Response:', googlePlacesResponse.data);

    const nearbyRestaurants = googlePlacesResponse.data.results.map(restaurant => ({
      name: restaurant.name,
      rating: restaurant.rating,
      price_level: restaurant.price_level,
      types: restaurant.types
    }));

    const demographicData = await fetchDemographicData(latitude, longitude);
    console.log('Demographic Data:', demographicData);

    const prompt = `Analyze the feasibility of a restaurant with the following characteristics in ${location}:\n- Theme: ${theme}\n- Price Range: ${priceRange}\n- Description: ${description}\n\nConsider the following nearby restaurants:\n${JSON.stringify(nearbyRestaurants)}\n\nDemographic data for the location:\n${JSON.stringify(demographicData)}\n\nAnalyze foot traffic and competition within a 4-5 km radius. if you find anything is missing make it up but do not act that you do not know it also on top of it answer very formally.`;

    const openaiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ 
        role:"system", content: "You are an experienced and brutally honest business consultant tasked with preparing a detailed, data-driven business analysis report using the following structure: Provide a concise summary of the business situation, key findings, and performance; conduct a success analysis to identify 3 strengths if the success rate is good, 3 weaknesses if it's bad, or both if balanced; perform a competitor analysis within a 5-10 km range using the provided latitude and longitude, focusing on similar businesses; complete a break-even analysis estimating when the business will break even, incorporating rent prices and financial data; offer location-based insights using a range format for the area, including demographic, accessibility, and business viability details; and conclude with final recommendations that are actionable and specific. Write with confidence and authority, ensuring the tone is unbiased and data-driven, and structure the output consistently using these variable names: summary, success_analysis, competitor_analysis, break_even_analysis, location_insights, and recommendations."},
        {role: "user", content: prompt }],
    });

    const analysis = openaiResponse.choices[0].message.content;
    console.log('OpenAI Response:', analysis);

    // const headings = ["## Summary:\n", "## Success Analysis:\n", "## Competitor Analysis:\n",
    //   "## Break-Even Analysis", "## Location Insights:\n", "## Recommendations:\n"];
    // let remnant = "";
    // let current = "";
    // let whole = analysis.split("\n");

    //split the analysis by blurb
    // for (const heading of headings) {
    //     [current, remnant] = whole.split(heading, 2);
    //     console.log(`whole ${whole}`);
    //     console.log(`remnant ${remnant}`);
    //     console.log(`current ${current}`);
    // }

    // for (const str of whole) {
    //   console.log(`${str}\n`);
    // }
    //
    // const summary = whole[1];
    // const strengths = "";
    // const competitorAnalysis = "";
    // const breakevenAnalysis = "";
    // const locationInsights = "";
    // const recommendations = "";
    // const conclusion = whole[whole.length-1];
    //
    // console.log(`summary ${summary}`);
    // console.log(`conclusion ${conclusion}`);

    res.send({ analysis });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error during analysis.');
  }
});

async function fetchDemographicData(latitude, longitude) {
  const geoapifyApiKey = 'e1243ff22d5a4b2ba51102181aaaae8e';
  const geoapifyUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${geoapifyApiKey}`;

  try {
    const geoapifyResponse = await fetch(geoapifyUrl);
    const geoapifyData = await geoapifyResponse.json();
    console.log('Geoapify API Response:', geoapifyData);

    if (geoapifyData.features && geoapifyData.features.length > 0) {
      const properties = geoapifyData.features[0].properties;
      const neighbourhood = properties.neighbourhood;
      console.log('Neighbourhood:', neighbourhood);

      // Now fetch demographic data using the neighbourhood name
      const demographicData = await fetchTorontoDemographicData(neighbourhood);
      return demographicData;
    } else {
      return { error: 'Could not retrieve neighbourhood information from Geoapify' };
    }
  } catch (error) {
    console.error('Error fetching demographic data:', error);
    return { error: 'Failed to fetch demographic data' };
  }
}

async function fetchTorontoDemographicData(neighbourhood) {
  const openDataPortalUrl = `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=neighbourhood-profiles&q=${neighbourhood}`;

  try {
    const response = await fetch(openDataPortalUrl);
    const data = await response.json();
    console.log('Toronto Open Data Portal Response:', data);

    if (data.result.records && data.result.records.length > 0) {
      const demographicRecord = data.result.records[0];
      const demographicData = {
        population: demographicRecord.Population_2016,
        averageIncome: demographicRecord.Total_income_Average__2015,
        medianAge: demographicRecord.Median_age_2016,
        visibleMinority: demographicRecord.Visible_minority_Total_population_2016,
        lowIncomeHouseholds: demographicRecord.Low_income_households_2015,
      };
      return demographicData;
    } else {
      return { error: `No demographic data found for ${neighbourhood}` };
    }
  } catch (error) {
    console.error('Error fetching demographic data from Toronto Open Data Portal:', error);
    return { error: 'Failed to fetch demographic data from Toronto Open Data Portal' };
  }
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});