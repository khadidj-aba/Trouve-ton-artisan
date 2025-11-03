// src/pages/Alimentation.jsx
import { useMemo, useState } from "react";
import ServiceMiniCard from "../components/ServiceMiniCard";
import SearchBar from "../components/SearchBar";
import "../styles/services.css"; //  le style commun
import { Helmet } from "react-helmet-async";

const RAW_FOOD = [
  { id: 1, name: "Boulanger Thiery",      city: "Clermont-Ferrand", trade: "boulanger",     rating: 4.8, emoji: "🥖" },
  { id: 2, name: "Fromager Toussaint",    city: "Nantes",           trade: "fromager",      rating: 4.8, emoji: "🧀" },
  { id: 3, name: "Brasseur Chambret",     city: "",                 trade: "brasseur",      rating: 4.8, emoji: "🍺" },
  { id: 4, name: "Buchet Apicole",        city: "",                 trade: "apiculteur",    rating: 4.8, emoji: "🐝" },

  { id: 5, name: "Légumes Martin",        city: "Beauvais",         trade: "primeur",       rating: 4.8, emoji: "🥬" },
  { id: 6, name: "Poissonnerie Sirène",   city: "Quimper",          trade: "poissonnier",   rating: 4.8, emoji: "🐟" },
  { id: 7, name: "Boulanger Pascal",      city: "Chambéry",         trade: "boulanger",     rating: 4.8, emoji: "🥐" },
  { id: 8, name: "Buchet Apicole",        city: "Belfort",          trade: "apiculteur",    rating: 4.8, emoji: "🍯" },
];

export default function Alimentation() {
  const [q, setQ] = useState("");

  const data = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return RAW_FOOD;
    return RAW_FOOD.filter(
      (a) =>
        a.name.toLowerCase().includes(t) ||
        a.city.toLowerCase().includes(t) ||
        a.trade.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <>
    <Helmet>
        <title>Trouve ton artisan — Bâtiment</title>
        <meta
          name="description"
          content="Trouvez des artisans du bâtiment en Auvergne-Rhône-Alpes : maçons, électriciens, peintres, menuisiers et plombiers qualifiés."
        />
      </Helmet>
    <div className="srv">
      <h1 className="srv__title">Alimentation</h1>

      <SearchBar
        placeholder="Recherche des artisans"
        value={q}
        onChange={setQ}
        className="srv__search"
      />

      <h2 className="srv__subtitle">
        Les artisans d’<span>alimentation</span>
      </h2>

      <div className="srv__grid">
        {data.map((a) => (
          <ServiceMiniCard key={a.id} {...a} />
        ))}
      </div>
    </div>
    </>
  );
}
