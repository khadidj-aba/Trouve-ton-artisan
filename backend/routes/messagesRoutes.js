import { Router } from "express";
import { listMessages, addMessage } from "../controllers/messagesController.js";

const router = Router();

router.get("/", listMessages);  // GET /api/messages
router.post("/", addMessage);   // POST /api/messages

export default router;
