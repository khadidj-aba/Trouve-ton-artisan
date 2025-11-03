// backend/models/db.js (ESM)
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // 👇 ICI : on lit DB_PASSWORD au lieu de DB_PASS
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  multipleStatements: false,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion MySQL :", err);
  } else {
    console.log("✅ Connecté à la base MySQL :", process.env.DB_NAME);
  }
});

export default db;
