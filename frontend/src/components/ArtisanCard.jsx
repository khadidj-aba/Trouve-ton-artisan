// src/components/ArtisanCard.jsx
import { Link } from "react-router-dom";

export default function ArtisanCard({ artisan }) {
  if (!artisan) return null; 

  const {
    id,
    name,
    city,
    metier,     // ex: "maçon", "menuiserie"
    rating,     // ex: 4.6
  } = artisan;

  
  const href = id ? `/artisans/${id}` : "#";

  return (
    <article className="card">
      <header className="card-head">
        <span role="img" aria-label="artisan">🧑</span>
        <span role="img" aria-label="outil">🛠️</span>
      </header>

      <h3 className="card-title">{name ?? "—"}</h3>
      <p className="card-sub">
        {city ?? "—"} — {metier ?? "—"}
      </p>

      <div className="card-rate">⭐ {rating ?? "—"}</div>

      <Link
        to={href}
        className="btn btn-primary"
        onClick={(e) => { if (!id) e.preventDefault(); }}
      >
        Voir la fiche
      </Link>
    </article>
  );
}
