import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page introuvable</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="empty">
        <div className="empty-illustration" aria-hidden>📄 404</div>
        <h1>Page introuvable</h1>
        <p>La page demandée n’existe pas.</p>
        <Link className="btn" to="/">Retour à l’accueil</Link>
      </section>
    </>
  );
}
