import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion MySQL :", err);
  } else {
    console.log("✅ Connecté à la base MySQL :", process.env.DB_NAME);
  }
});

// 1) Tous les artisans
app.get("/api/artisans", (req, res) => {
  const sql = "SELECT * FROM artisans";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      res.json(results);
    }
  });
});

// 2) Un artisan par ID
app.get("/api/artisans/:id", (req, res) => {
  const sql = "SELECT * FROM artisans WHERE id = ?";
  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      res.status(500).json({ error: "Erreur serveur" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Artisan introuvable" });
    } else {
      res.json(results[0]);
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend sur http://localhost:${PORT}`);
});

// 3) Enregistrer un message de contact
app.post("/api/messages", (req, res) => {
  const { artisan_id, nom, email, contenu } = req.body;

  // validation rapide
  if (!artisan_id || !nom || !email || !contenu) {
    return res.status(400).json({ error: "Champs manquants" });
  }

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
});
