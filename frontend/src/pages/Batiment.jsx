// src/pages/Batiment.jsx
import { useMemo, useState } from "react";
import ServiceMiniCard from "../components/ServiceMiniCard";
import SearchBar from "../components/SearchBar";
import "../styles/services.css"; 

// Données BÂTIMENT (électricien, maçon, menuisier, peintre, rénovation, plombier…)
const RAW_BTP = [
  { id: 1, name: "Mont Blanc Électricité", city: "Lyon",        trade: "électricien", rating: 4.5, emoji: "👷‍♂️" },
  { id: 2, name: "Durand Bourdon",         city: "Grenoble",    trade: "maçon",       rating: 4.8, emoji: "🧱"   },
  { id: 3, name: "Grandet",                city: "Villeurbanne",trade: "couvreur",    rating: 4.6, emoji: "🏗️"  },
  { id: 4, name: "Duranden & Fils",        city: "Chambéry",    trade: "plombier",    rating: 4.8, emoji: "🔧"   },
  { id: 5, name: "Durand Frères",          city: "Villeurbanne",trade: "menuisier",   rating: 4.7, emoji: "🪚"   },
  { id: 6, name: "Chagny — Rénovation",    city: "Tours",       trade: "rénovation",  rating: 4.6, emoji: "🧱"   },
  { id: 7, name: "Juriet Peinture",        city: "Roanne",      trade: "peintre",     rating: 5.0, emoji: "🎨"   },
  { id: 8, name: "Deanc & Fils",           city: "Grenoble",    trade: "plombier",    rating: 4.8, emoji: "🔧"   },
];

export default function Batiment() {
  const [q, setQ] = useState("");

  const data = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return RAW_BTP;
    return RAW_BTP.filter(
      (a) =>
        a.name.toLowerCase().includes(t) ||
        a.city.toLowerCase().includes(t) ||
        a.trade.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <div className="srv">
      <h1 className="srv__title">Bâtiment</h1>

      <SearchBar
        placeholder="Recherche des artisans"
        value={q}
        onChange={setQ}
        className="srv__search"
      />

      <h2 className="srv__subtitle">
        Les artisans du <span>bâtiment</span>
      </h2>

      <div className="srv__grid">
        {data.map((a) => (
          <ServiceMiniCard key={a.id} {...a} />
        ))}
      </div>
    </div>
  );
}
