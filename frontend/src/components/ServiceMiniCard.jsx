import { Link } from "react-router-dom";

export default function ServiceMiniCard({ emoji, name, city, trade, rating }) {
  return (
    <article className="mini">
      <div className="mini__icon" aria-hidden>{emoji}</div>
      <div className="mini__title">{name}</div>
      <div className="mini__meta">
        {city} — <span>{trade}</span>
      </div>
      <div className="mini__rating" title={`${rating} / 5`}>
        <span className="mini__star">★</span>
        <span>{rating.toString().replace(".", ",")}</span>
      </div>
      <Link className="mini__btn" to="/artisans/fiche">Voir la fiche</Link>
    </article>
  );
}
