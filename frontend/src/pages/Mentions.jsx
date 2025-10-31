import { Helmet } from "react-helmet-async";

export default function Mentions() {
  return (
    <>
      <Helmet>
        <title>Mentions légales — Trouve ton artisan</title>
        <meta name="description" content="Informations légales du site." />
      </Helmet>

      <h1>Mentions légales</h1>
      <p><strong>Éditeur :</strong> Trouve ton artisan — 101 cours Charlemagne, 69269 Lyon CEDEX 02.</p>
      <p><strong>Directeur de la publication :</strong> L’équipe Trouve ton artisan.</p>
      <p><strong>Hébergement :</strong> Exemple d’hébergeur, France.</p>
    </>
  );
}
