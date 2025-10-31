import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/home.css";

// Composant pour les étapes (explication du process)
const Step = ({ n, title }) => (
  <div className="step">
    <div className="step__num" aria-hidden="true">
      {n}
    </div>
    <div className="step__title">{title}</div>
  </div>
);

// Carte artisan individuelle
const ArtisanCard = ({ id, name, city, metier, note }) => {
  // sécurité si note est undefined/null
  const formattedNote =
    typeof note === "number"
      ? note.toFixed(1).replace(".", ",")
      : "4,5";

  return (
    <article className="artisan-card" aria-labelledby={`artisan-${id}-title`}>
      <div className="artisan-card__icons" aria-hidden="true">
        <span role="img" aria-label="artisan">
          🧑
        </span>
        <span role="img" aria-label="outils">
          🧰
        </span>
      </div>

      <header>
        <h3
          className="artisan-card__title"
          id={`artisan-${id}-title`}
        >
          {name}
        </h3>

        <p className="artisan-card__meta">
          <span className="artisan-card__city">{city}</span> —{" "}
          <span className="artisan-card__job">{metier}</span>
        </p>
      </header>

      <p className="artisan-card__rate">
        <span className="stars" aria-hidden="true">
          ★★★★★
        </span>{" "}
        <span className="note" aria-label={`Note ${formattedNote} sur 5`}>
          {formattedNote} / 5
        </span>
      </p>

      <Link className="btn btn-details" to={`/artisan/${id}`}>
        Voir la fiche
      </Link>
    </article>
  );
};

export default function Home() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/artisans")
      .then((res) => {
        if (!res.ok) throw new Error("Réponse serveur non valide");
        return res.json();
      })
      .then((data) => {
        setArtisans(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API artisans:", err);
        setErreur(
          "Impossible de récupérer les artisans pour le moment. Veuillez réessayer plus tard."
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <header className="hero container" role="banner">
        <h1 className="hero__title">
          Trouvez un artisan de confiance en Auvergne-Rhône-Alpes
        </h1>
        <p className="hero__subtitle">
          Plombier, électricien, maçon, peintre… Des pros près de chez vous.
        </p>
      </header>

      {/* ÉTAPES */}
      <section className="etapes container">
        <h2 className="sr-only">
          Comment ça marche pour contacter un artisan
        </h2>

        <div className="etapes__grid">
          <Step n={1} title="Choisir une catégorie" />
          <Step n={2} title="Choisir un artisan" />
          <Step n={3} title="Envoyer votre demande" />
          <Step n={4} title="Conclure vos travaux" />
        </div>
      </section>

      {/* ARTISANS */}
      <section
        className="artisans-section container"
        aria-labelledby="artisans-heading"
      >
        <h2 id="artisans-heading">Les artisans du mois</h2>

        {loading && <p>Chargement…</p>}

        {!loading && erreur && (
          <p role="alert" className="error-message">
            {erreur}
          </p>
        )}

        {!loading && !erreur && (
          <>
            {artisans.length === 0 ? (
              <p>Aucun artisan disponible pour le moment.</p>
            ) : (
              <div className="artisans-grid">
                {artisans.map((a) => (
                  <ArtisanCard
                    key={a.id}
                    id={a.id}
                    name={a.nom}
                    city={a.ville}
                    metier={a.metier}
                    note={a.note}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
