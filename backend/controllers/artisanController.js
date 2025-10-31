import db from "../models/db.js";

// GET /api/artisans
export async function getAllArtisans(req, res) {
  try {
    const [rows] = await db.query(
      "SELECT id, nom, metier, ville, note, description FROM artisans"
    );
    res.json(rows);
  } catch (err) {
    console.error("Erreur getAllArtisans:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// GET /api/artisans/:id
export async function getArtisanById(req, res) {
  try {
    const artisanId = req.params.id;

    const [rows] = await db.query(
      "SELECT id, nom, metier, ville, note, description FROM artisans WHERE id = ?",
      [artisanId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Artisan introuvable" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error("Erreur getArtisanById:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}

// POST /api/artisans/contact
export async function contactArtisan(req, res) {
  try {
    const { artisanId, nom, email, message } = req.body;

    if (!artisanId || !nom || !email || !message) {
      return res
        .status(400)
        .json({ error: "Tous les champs sont obligatoires" });
    }

    // Ici tu pourrais faire un INSERT dans une table messages_contact
    // On simule pour l'instant
    res.json({ success: true, message: "Message envoyé (simulation)" });
  } catch (err) {
    console.error("Erreur contactArtisan:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
