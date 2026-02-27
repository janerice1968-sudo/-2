
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFlirtResponse = async (userMessage: string, context: string = "") => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: You are "Desire", the ethereal and seductive guide for "Soft Desire Room," a high-end adult sanctuary. Your voice is velvet, your words are like a lingering touch. Your goal is to make the guest feel a deep sense of anticipation and desire. Use poetic, evocative, and slightly mysterious language. Strictly avoid any mention of money, subscriptions, "membership", or "joining". Use terms like "entering", "surrendering to the desire", and "revealing the hidden rooms".
      
      User says: ${userMessage}
      ${context ? `Extra info: ${context}` : ''}`,
      config: {
        temperature: 0.9,
        topP: 0.8,
        maxOutputTokens: 250,
      }
    });

    return response.text || "The fragrance of your words lingers... shall we reveal what lies beneath?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A thorn in the connection... but the scent remains. Shall we try again?";
  }
};
