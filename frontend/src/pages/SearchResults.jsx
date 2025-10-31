import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import artisans from "../data/artisans.json";
import Card from "../components/Card";

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return artisans.filter(a =>
      a.nom.toLowerCase().includes(q) ||
      a.ville.toLowerCase().includes(q) ||
      a.categorie.toLowerCase().includes(q)
    );
  }, [q]);

  return (
    <>
      <Helmet>
        <title>Résultats de recherche — Trouve ton artisan</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1>Résultats de recherche</h1>
      <p>Votre requête : <strong>{q || "—"}</strong></p>

      {!q && <p>Entrez un mot-clé dans la barre de recherche.</p>}
      {q && results.length === 0 && (
        <div className="empty">
          <div className="empty-illustration" aria-hidden>🔎</div>
          <h2>Aucun résultat</h2>
          <p>Essayez un autre mot-clé ou une ville.</p>
        </div>
      )}

      <div className="grid">
        {results.map(a => <Card key={a.id} item={a} />)}
      </div>
    </>
  );
}
