import { useParams, Link, useNavigate } from "react-router-dom";

export default function ArtisanDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <section className="container">
      <p><Link to="/artisans">← Retour à la liste</Link></p>
      <h1 style={{ marginTop: 8 }}>Fiche artisan — {slug.replaceAll("-", " ")}</h1>
      <p className="badge" style={{ marginTop: 8 }}>4,6 ★ — Lyon</p>

      <h3 style={{ marginTop: 24 }}>À propos</h3>
      <p>Texte descriptif court pour présenter l’artisan, ses spécialités et sa zone d’intervention.</p>

      <h3 style={{ marginTop: 24 }}>Contacter</h3>
      <button
        onClick={() => navigate("/contact")}
        style={{ padding: "10px 16px", borderRadius: 8, border: "1px solid #ddd" }}
      >
        Envoyer une demande
      </button>
    </section>
  );
}
