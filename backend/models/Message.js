import { db } from "../db.js";

export async function createMessage({ nom, email, sujet, contenu, artisan_id }) {
  const [result] = await db.query(
    "INSERT INTO messages (nom, email, sujet, contenu, artisan_id, created_at) VALUES (?, ?, ?, ?, ?, NOW())",
    [nom, email, sujet, contenu, artisan_id || null]
  );
  return {
    id: result.insertId,
    nom,
    email,
    sujet,
    contenu,
    artisan_id: artisan_id || null,
  };
}

export async function getMessages() {
  const [rows] = await db.query(
    `SELECT m.id, m.nom, m.email, m.sujet, m.contenu, m.created_at,
            a.nom AS artisan_nom
     FROM messages m
     LEFT JOIN artisans a ON m.artisan_id = a.id
     ORDER BY m.created_at DESC`
  );
  return rows;
}
