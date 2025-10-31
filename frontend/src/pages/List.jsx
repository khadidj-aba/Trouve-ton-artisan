import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import cats from "../data/categories.json";
import artisans from "../data/artisans.json";
import Card from "../components/Card";

export default function List() {
  const { categorie } = useParams();
  const cat = cats.find(c => c.slug === categorie);

  const rows = artisans.filter(a => a.categorie === categorie);

  return (
    <>
      <Helmet>
        <title>{cat ? `${cat.label} — Liste` : "Liste"} — Trouve ton artisan</title>
        <meta name="description" content={`Artisans de ${cat?.label || categorie}.`} />
      </Helmet>

      <h1>{cat ? cat.label : "Catégorie"}</h1>
      {rows.length === 0 && <p>Aucun artisan pour cette catégorie pour le moment.</p>}
      <div className="grid">
        {rows.map(a => <Card key={a.id} item={a} />)}
      </div>
    </>
  );
}
