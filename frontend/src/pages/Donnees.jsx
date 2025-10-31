import { Helmet } from "react-helmet-async";

export default function Donnees() {
  return (
    <>
      <Helmet>
        <title>Données personnelles — Trouve ton artisan</title>
        <meta name="description" content="Politique de protection des données personnelles." />
      </Helmet>

      <h1>Données personnelles</h1>
      <p>Vos données sont utilisées uniquement pour traiter vos demandes. Vous pouvez exercer vos droits en nous contactant.</p>
    </>
  );
}
