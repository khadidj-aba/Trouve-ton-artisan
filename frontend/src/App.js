// React Router
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Batiment from "./pages/Batiment";
import Fabrication from "./pages/Fabrication";
import Alimentation from "./pages/Alimentation";
import Donnees from "./pages/Donnees";
import Contact from "./pages/Contact";
import Confirmation from "./pages/Confirmation";
import SearchResults from "./pages/SearchResults";
import List from "./pages/List";
import Construction from "./pages/Construction";
import Mentions from "./pages/Mentions";
import NotFound from "./pages/NotFound";
import ArtisanFiche from "./pages/ArtisanFiche";

// Styles du footer
import "./components/Footer.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Accueil */}
        <Route index element={<Home />} />

        {/* Pages principales */}
        <Route path="services" element={<Services />} />
        <Route path="batiment" element={<Batiment />} />
        <Route path="fabrication" element={<Fabrication />} />
        <Route path="alimentation" element={<Alimentation />} />
        <Route path="contact" element={<Contact />} />

        {/* Légal / RGPD */}
        <Route path="donnees-personnelles" element={<Donnees />} />
        <Route path="mentions" element={<Mentions />} />

        {/* Autres pages */}
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="recherche" element={<SearchResults />} />
        <Route path="liste/:categorie" element={<List />} />
        <Route path="construction" element={<Construction />} />

        {/* ✅ Fiche artisan dynamique */}
        <Route path="artisan/:id" element={<ArtisanFiche />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
