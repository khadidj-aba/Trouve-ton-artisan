// backend/controllers/artisanController.js
import db from "../models/db.js";

export const getAllArtisans = (req, res) => {
  const sql = "SELECT * FROM artisans";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur SQL (GET /api/artisans):", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    res.json(results);
  });
};

export const getArtisanById = (req, res) => {
  const sql = "SELECT * FROM artisans WHERE id = ?";
  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error("Erreur SQL (GET /api/artisans/:id):", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Artisan introuvable" });
    }
    res.json(results[0]);
  });
};
