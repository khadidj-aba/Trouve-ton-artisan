// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./models/db.js"; // initialise la connexion MySQL

// Chargement des variables d'environnement
dotenv.config();

// Import des routes
import artisanRoutes from "./routes/artisans.js";
import messageRoutes from "./routes/messagesRoutes.js";

const app = express();

// ✅ Middleware CORS (autorise les requêtes du front React)
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3002"],
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
  })
);

// ✅ Pour lire les corps JSON des requêtes POST/PUT
app.use(express.json());

// ✅ Routes principales
app.use("/api/artisans", artisanRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Route par défaut si l’API est introuvable
app.use((req, res) => {
  res.status(404).json({ error: "Route API introuvable" });
});

// ✅ Lancement du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend sur http://localhost:${PORT}`);
});
