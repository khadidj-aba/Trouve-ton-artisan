// src/pages/Fabrication.jsx
import { useMemo, useState } from "react";
import ServiceMiniCard from "../components/ServiceMiniCard";
import SearchBar from "../components/SearchBar";
import "../styles/services.css"; 

const RAW_FAB = [
  { id: 1, name: "Durand Fiércité",      city: "Lyon",      trade: "électricien",  rating: 4.5, emoji: "🔌" },
  { id: 2, name: "Derandes & Fils",      city: "Annecy",    trade: "mécanicien",   rating: 4.7, emoji: "⚙️" },
  { id: 3, name: "Brasin Marals",        city: "Lyon",      trade: "verrier",      rating: 4.6, emoji: "🧪" },
  { id: 4, name: "Bernard Céramique",    city: "Roanne",    trade: "céramiste",    rating: 4.6, emoji: "🏺" },

  { id: 5, name: "Bernard Céramique",    city: "Roanne",    trade: "polisseur",    rating: 4.7, emoji: "🪵" },
  { id: 6, name: "Chagny — Briquetier",  city: "Tours",     trade: "briquetier",   rating: 4.6, emoji: "🧱" },
  { id: 7, name: "Godard Forgex",        city: "Chambéry",  trade: "plaquiste",    rating: 4.7, emoji: "🛠️" },
  { id: 8, name: "Deanc & Fils",         city: "Grenoble",  trade: "métallier",    rating: 4.6, emoji: "🔩" },
];

export default function Fabrication() {
  const [q, setQ] = useState("");

  const data = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return RAW_FAB;
    return RAW_FAB.filter(
      (a) =>
        a.name.toLowerCase().includes(t) ||
        a.city.toLowerCase().includes(t) ||
        a.trade.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <div className="srv">
      <h1 className="srv__title">Fabrication</h1>

      <SearchBar
        placeholder="Recherche des artisans"
        value={q}
        onChange={setQ}
        className="srv__search"
      />

      <h2 className="srv__subtitle">
        Les artisans de <span>la fabrication</span>
      </h2>

      <div className="srv__grid">
        {data.map((a) => (
          <ServiceMiniCard key={a.id} {...a} />
        ))}
      </div>
    </div>
  );
}
