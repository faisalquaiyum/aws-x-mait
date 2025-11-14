import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatResponse = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Retry logic for 503 errors
  const maxRetries = 3;
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const result = await model.generateContent(message);
      const reply = result.response.text();

      return res.json({ reply });
    } catch (err) {
      console.error(`AI Error (attempt ${attempt}/${maxRetries}):`, err);
      lastError = err;

      // If it's a 503 error and we have retries left, wait and try again
      if (err.status === 503 && attempt < maxRetries) {
        const waitTime = attempt * 1000; // 1s, 2s, 3s
        console.log(`Retrying in ${waitTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        continue;
      }

      // If not a 503 or no retries left, break the loop
      break;
    }
  }

  // If we get here, all retries failed
  const errorMessage =
    lastError?.status === 503
      ? "The AI service is currently busy. Please try again in a moment."
      : "AI request failed. Please try again.";

  res.status(lastError?.status || 500).json({ error: errorMessage });
};
