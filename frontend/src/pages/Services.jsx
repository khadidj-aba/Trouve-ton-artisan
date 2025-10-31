import { useMemo, useState, useEffect } from "react";
import ServiceMiniCard from "../components/ServiceMiniCard";
import SearchBar from "../components/SearchBar";
import LoadingOverlay from "../components/LoadingOverlay";
import "../styles/base.css";
import "../styles/services.css";

const RAW = [
  { id: 1, name: "Mont Blanc Électricité", city: "Lyon", trade: "électricien", rating: 4.5, emoji: "👷‍♂️" },
  { id: 2, name: "Boucherie Dumont", city: "Lyon", trade: "boucher", rating: 4.8, emoji: "🧑‍🍳" },
  { id: 3, name: "Couture Lecuyer", city: "Annecy", trade: "couturière", rating: 4.6, emoji: "🧵" },
  { id: 4, name: "Durand & Fils", city: "Chambéry", trade: "plombier", rating: 4.8, emoji: "🔧" },
  { id: 5, name: "Durand Frères", city: "Villeurbanne", trade: "menuisier", rating: 4.7, emoji: "🪚" },
  { id: 6, name: "Auto Service Rapid", city: "Saint-Étienne", trade: "garagiste", rating: 4.6, emoji: "🚗" },
  { id: 7, name: "Juriet Peinture", city: "Roanne", trade: "peintre", rating: 5.0, emoji: "🎨" },
  { id: 8, name: "Delalande & Fils", city: "Chambéry", trade: "plombier", rating: 4.8, emoji: "🔧" },
];

export default function Services() {
  const [term, setTerm] = useState(""); // ce que tape l’utilisateur
  const [q, setQ] = useState("");       // la requête utilisée pour filtrer
  const [loading, setLoading] = useState(false);

  // Debounce : on met q à jour 200 ms après le dernier caractère
  useEffect(() => {
    const id = setTimeout(() => setQ(term), 200);
    return () => clearTimeout(id);
  }, [term]);

  // Overlay "Recherche en cours..." pendant 450 ms à chaque changement de q
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(id);
  }, [q]);

  const data = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return RAW;
    return RAW.filter(
      (a) =>
        a.name.toLowerCase().includes(t) ||
        a.city.toLowerCase().includes(t) ||
        a.trade.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <div className="srv">
      <LoadingOverlay visible={loading} />

      <h1 className="srv__title">Services</h1>

      <SearchBar
        placeholder="Recherche des artisans"
        value={term}
        onChange={setTerm}
        className="srv__search"
      />

      <h2 className="srv__subtitle">
        Les artisans du <span>services</span>
      </h2>

      <div className="srv__grid">
        {data.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%", marginTop: 24 }}>
            Aucun artisan trouvé.
          </p>
        ) : (
          data.map((a) => <ServiceMiniCard key={a.id} {...a} />)
        )}
      </div>
    </div>
  );
}
