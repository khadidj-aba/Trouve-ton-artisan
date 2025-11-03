// backend/routes/messagesRoutes.js
import { Router } from "express";
import validateFields from "../middleware/validateFields.js";
import { createMessage } from "../controllers/messagesController.js";

const router = Router();

router.post("/", validateFields, createMessage);

export default router;
