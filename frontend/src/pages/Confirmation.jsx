import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <>
      <Helmet>
        <title>Message envoyé — Trouve ton artisan</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="confirm">
        <div className="confirm-icon" aria-hidden>✅</div>
        <h1>Votre message a bien été envoyé !</h1>
        <p>Merci de nous avoir contactés. Nous reviendrons vers vous très bientôt.</p>
        <Link className="btn" to="/">Retour à l’accueil</Link>
      </section>
    </>
  );
}
