import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden>🧑‍🔧</div>
      <div className="card-body">
        <h3 className="card-title">{item.nom}</h3>
        <p className="card-sub">{item.ville} — {item.categorie}</p>
        <p className="card-stars">⭐ {item.note.toFixed(1)}</p>
        <Link className="btn" to={`/construction`}>Voir la fiche</Link>
      </div>
    </article>
  );
}
