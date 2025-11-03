// backend/middleware/validateFields.js
export default function validateFields(req, res, next) {
  const { artisan_id, nom, email, contenu } = req.body;

  if (!artisan_id || !nom || !email || !contenu) {
    return res.status(400).json({ error: "Champs manquants" });
  }
  if (!String(email).includes("@")) {
    return res.status(400).json({ error: "Email invalide" });
  }
  next();
}
