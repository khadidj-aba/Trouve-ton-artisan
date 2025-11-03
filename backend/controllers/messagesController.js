// backend/controllers/messagesController.js
import db from "../models/db.js";

export const createMessage = (req, res) => {
  const { artisan_id, nom, email, contenu } = req.body;

  const sql = `
    INSERT INTO messages (artisan_id, nom, email, contenu)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [artisan_id, nom, email, contenu], (err, result) => {
    if (err) {
      console.error("Erreur SQL (POST /api/messages):", err);
      return res.status(500).json({ error: "Erreur serveur" });
    }

    res.json({
      success: true,
      message: "Message enregistré avec succès ✅",
      id_message: result.insertId,
    });
  });
};
