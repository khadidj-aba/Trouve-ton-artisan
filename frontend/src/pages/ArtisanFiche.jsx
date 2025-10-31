import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArtisanFiche() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // états du formulaire de contact
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [contenu, setContenu] = useState("");
  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | null

  // charger les infos de l'artisan
  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    fetch(`http://localhost:4000/api/artisans/${id}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
          setLoading(false);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setArtisan(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API fiche artisan:", err);
        setLoading(false);
        setNotFound(true);
      });
  }, [id]);

  // gestion de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    fetch("http://localhost:4000/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artisan_id: id,
        nom,
        email,
        contenu,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // selon le backend il peut renvoyer { success: true } ou l'objet message.
        // ca rend tolérant :
        if (data && (data.success === true || data.id)) {
          setStatus("success");
          setNom("");
          setEmail("");
          setContenu("");
        } else {
          setStatus("error");
        }
      })
      .catch((err) => {
        console.error("Erreur d'envoi :", err);
        setStatus("error");
      });
  };

  if (loading) {
    return (
      <main style={{ padding: "2rem" }} role="main">
        <p>Chargement…</p>
      </main>
    );
  }

  if (notFound || !artisan) {
    return (
      <main style={{ padding: "2rem" }} role="main">
        <h1>Artisan introuvable</h1>
        <p>Cette fiche n'existe pas ou a été retirée.</p>
      </main>
    );
  }

  // fallback au cas où "note" n'existe pas encore dans ma table
  const noteAffichee = artisan.note
    ? String(artisan.note).replace(".", ",")
    : "4,5";

  return (
    <main
      role="main"
      className="fiche-wrapper"
      style={{
        maxWidth: "1100px",
        margin: "2rem auto",
        padding: "1rem",
      }}
    >
      {/* En-tête artisan */}
      <section
        className="fiche-header"
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Avatar / icône */}
        <div
          className="fiche-avatar"
          style={{
            fontSize: "64px",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          🧑‍🏭
        </div>

        {/* Infos principales */}
        <header className="fiche-id-block">
          <h1
            style={{
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            {artisan.nom}
          </h1>

          <div
            style={{
              fontSize: "1.1rem",
              color: "#333",
              marginTop: "0.25rem",
            }}
          >
            {artisan.metier} — {artisan.ville}
          </div>

          <div style={{ marginTop: "0.5rem" }}>
            <div
              style={{
                color: "#f5c518",
                fontSize: "1rem",
                lineHeight: 1,
              }}
              aria-label="Note moyenne"
            >
              ★★★★☆
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "#000",
              }}
            >
              {noteAffichee} / 5
            </div>
          </div>

          {artisan.telephone && (
            <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
              📞{" "}
              <a
                href={`tel:${artisan.telephone}`}
                style={{ color: "#0052cc", textDecoration: "none" }}
              >
                {artisan.telephone}
              </a>
            </p>
          )}
        </header>
      </section>

      {/* À propos */}
      <section
        className="fiche-about"
        style={{ marginTop: "1.5rem", maxWidth: "800px" }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: ".5rem",
          }}
        >
          À propos
        </h2>

        <p
          style={{
            lineHeight: "1.4",
            color: "#444",
            fontSize: "0.95rem",
          }}
        >
          {artisan.description || "Pas de description fournie."}
        </p>
      </section>

      {/* Formulaire de contact */}
      <section
        className="fiche-contact"
        style={{
          marginTop: "1.5rem",
          maxWidth: "800px",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
        }}
        aria-labelledby="contact-title"
      >
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "1rem",
            width: "300px",
            minWidth: "260px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            flex: "1 1 300px",
            maxWidth: "360px",
          }}
          aria-describedby="contact-help"
        >
          <p
            id="contact-title"
            style={{
              fontWeight: "500",
              marginBottom: ".75rem",
              fontSize: "0.95rem",
              color: "#000",
            }}
          >
            Contacter {artisan.nom}
          </p>

          <p
            id="contact-help"
            style={{
              fontSize: "0.8rem",
              color: "#666",
              marginTop: "-0.5rem",
              marginBottom: "1rem",
            }}
          >
            Tous les champs sont obligatoires.
          </p>

          <div style={{ marginBottom: "0.75rem" }}>
            <label
              htmlFor="contact-nom"
              style={{ fontSize: "0.8rem", color: "#444", fontWeight: 600 }}
            >
              Nom *
            </label>
            <input
              id="contact-nom"
              type="text"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #aaa",
                borderRadius: "4px",
                padding: "0.5rem",
                marginTop: "0.25rem",
              }}
            />
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <label
              htmlFor="contact-email"
              style={{ fontSize: "0.8rem", color: "#444", fontWeight: 600 }}
            >
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #aaa",
                borderRadius: "4px",
                padding: "0.5rem",
                marginTop: "0.25rem",
              }}
            />
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <label
              htmlFor="contact-message"
              style={{ fontSize: "0.8rem", color: "#444", fontWeight: 600 }}
            >
              Message *
            </label>
            <textarea
              id="contact-message"
              rows="4"
              required
              value={contenu}
              onChange={(e) => setContenu(e.target.value)}
              style={{
                width: "100%",
                border: "1px solid #aaa",
                borderRadius: "4px",
                padding: "0.5rem",
                marginTop: "0.25rem",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              backgroundColor: "#0052cc",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "0.6rem 1rem",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
              textAlign: "center",
              lineHeight: 1.2,
              opacity: status === "loading" ? 0.6 : 1,
            }}
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p
              style={{
                color: "green",
                fontSize: "0.8rem",
                marginTop: "0.5rem",
              }}
              role="alert"
            >
              Message envoyé ✅
            </p>
          )}
          {status === "error" && (
            <p
              style={{ color: "red", fontSize: "0.8rem", marginTop: "0.5rem" }}
              role="alert"
            >
              Erreur lors de l'envoi ❌
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
