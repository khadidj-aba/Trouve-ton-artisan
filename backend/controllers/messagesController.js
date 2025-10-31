import { createMessage, getMessages } from "../models/Message.js";

export async function listMessages(req, res) {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (err) {
    console.error("listMessages error:", err);
    res.status(500).json({ error: "Erreur serveur (messages)" });
  }
}

export async function addMessage(req, res) {
  try {
    const { nom, email, sujet, contenu, artisan_id } = req.body;

    if (!nom || !email || !contenu) {
      return res
        .status(400)
        .json({ error: "Champs obligatoires manquants (nom, email, contenu)" });
    }

    const newMessage = await createMessage({
      nom,
      email,
      sujet,
      contenu,
      artisan_id,
    });

    res.status(201).json(newMessage);
  } catch (err) {
    console.error("addMessage error:", err);
    res.status(500).json({ error: "Erreur serveur (création message)" });
  }
}
