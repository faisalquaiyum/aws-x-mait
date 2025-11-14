import express from "express";
import { chatResponse } from "../controllers/chatController.js";

const router = express.Router();

router.post("/chat", chatResponse);

export default router;
