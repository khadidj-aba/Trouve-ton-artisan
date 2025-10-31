import { Router } from "express";
import {
  getAllArtisans,
  getArtisanById,
  contactArtisan
} from "../controllers/artisanController.js";

const router = Router();

// Récupère tous les artisans
// GET http://localhost:4000/api/artisans
router.get("/", getAllArtisans);

// Récupère un artisan spécifique
// GET http://localhost:4000/api/artisans/1
router.get("/:id", getArtisanById);

// Envoie un message à un artisan (future fonctionnalité)
// POST http://localhost:4000/api/artisans/contact
router.post("/contact", contactArtisan);

export default router;
