import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

let ai;
if (apiKey) {
    ai = new GoogleGenAI({ apiKey: apiKey });
}

export const getMovieSuggestionFromMood = async (userMood) => {
    if (!ai) {
        throw new Error("Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
    }

    const systemInstruction = `You are an expert movie recommender. The user will provide a string describing their mood or what kind of movie they want to watch. Your task is to recommend exactly ONE movie title that best fits their request. 
  
CRITICAL INSTRUCTIONS:
- Return ONLY the movie title.
- Do NOT include quotes around the title.
- Do NOT include the year of release.
- Do NOT include any explanations, conversational text, or punctuation.
- Example User Input: "I am feeling sad but want an action movie"
- Example Output: Die Hard`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [
                { role: 'user', parts: [{ text: userMood }] }
            ],
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            }
        });

        return response.text.trim();
    } catch (error) {
        console.error("Error fetching AI suggestion:", error);
        throw new Error("Failed to get suggestion from AI.");
    }
};
