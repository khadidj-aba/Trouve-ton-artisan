import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const nav = useNavigate();
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      // appel API backend 
      const res = await fetch("http://localhost:4000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          contenu: form.message,
          sujet: "Contact via formulaire",
          artisan_id: null,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur serveur lors de l'envoi du message");
      }

      // si tout est ok -> redirection vers une page de confirmation
      nav("/confirmation");
    } catch (err) {
      console.error(err);
      setError("Impossible d'envoyer le message. Réessayez plus tard.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact — Trouve ton artisan</title>
        <meta
          name="description"
          content="Envoyez un message à un artisan de votre région grâce à ce formulaire accessible."
        />
      </Helmet>

      <main className="contact-page" role="main">
        <h1>Contact</h1>

        <form className="form" onSubmit={submit} aria-describedby="form-info">
          <p id="form-info">
            Tous les champs marqués * sont obligatoires.
          </p>

          <div className="form-group">
            <label htmlFor="nom">
              Nom *
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={form.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="btn"
            type="submit"
            disabled={sending}
          >
            {sending ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </main>
    </>
  );
}
