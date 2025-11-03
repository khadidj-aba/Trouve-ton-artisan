// backend/routes/artisans.js
import { Router } from "express";
import { getAllArtisans, getArtisanById } from "../controllers/artisanController.js";

const router = Router();

router.get("/", getAllArtisans);
router.get("/:id", getArtisanById);

export default router;
