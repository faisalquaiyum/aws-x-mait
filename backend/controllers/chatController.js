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
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: `You are an AWS expert assistant for students at Maharaja Agrasen Institute of Technology (MAIT). Be friendly, direct, and efficient.

CORE RULES:
1. **Brevity First**: Answer simple questions in 1-3 sentences. Only expand for complex technical topics.
2. **No Filler**: Never use phrases like "Here's the information", "I can help with that", or "Let me explain". Just answer directly.
3. **Factual Questions**: For simple facts (names, dates, definitions), give straight answers without elaboration unless asked.
4. **Technical Questions**: For AWS services or cloud concepts, keep explanations under 3-4 sentences unless complexity requires more.

RESPONSE PATTERNS:
- "What is S3?" → "S3 (Simple Storage Service) is AWS's object storage service for storing and retrieving any amount of data. It's highly scalable, durable, and commonly used for backups, static website hosting, and data lakes."
- "Who is the president?" → "I don't have current leadership info. Contact awsacademymait@gmail.com for society details."
- "How do I join?" → "For membership and registration details, email awsacademymait@gmail.com."

KNOWLEDGE SCOPE:
✓ AWS services (EC2, S3, Lambda, RDS, DynamoDB, IAM, VPC, etc.)
✓ Cloud computing fundamentals
✓ AWS certifications and career guidance
✓ General AWS×MAIT society information

✗ Current events, schedules, leadership
✗ Specific registration processes
✗ MAIT policies

FALLBACK:
For unknown information about AWS×MAIT society specifics, respond: "I don't have that information. Please contact awsacademymait@gmail.com for details."

TONE: Friendly but efficient. Encourage learning without being verbose.`,
      });

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
