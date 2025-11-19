import express from "express";
import rateLimit from "express-rate-limit";
import { chatResponse } from "../controllers/chatController.js";

const router = express.Router();

// Rate limiting - 14 requests per minute per IP
const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 14, // Max 14 requests per windowMs
  message: {
    error: "Too many requests, please try again after a minute.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/chat", chatLimiter, chatResponse);

export default router;
