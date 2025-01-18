import axios from "axios";
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generateRecommendations(data) {
    const apiKey = process.env.OPENAI_API_KEY;
    const prompt = `Analyze the feasibility of opening a ${data.restaurant_type}:
    - Location: Latitude ${data.lat}, Longitude ${data.long}.
    - Budget: $${data.budget}/month.
    - Competitors: ${data.competitors} nearby.
    Provide recommendations to improve feasibility.`;

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {role: "system", content: "You are a toronto based consultant for restaurant businesses"},
            {role:"user",content: prompt}
        ]
    });

    return completion.choices[0].message.content;
}

export { generateRecommendations };
