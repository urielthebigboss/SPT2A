import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Acceuil";
import SanteNutrition from "./pages/Snate&Nutrition";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Activites from "./pages/Activites";
import Investir from "./pages/Investir";
import Confidentialite from "./pages/Confidentialite";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sante" element={<SanteNutrition />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/investir" element={<Investir />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
      </Routes>
    </Router>
  );
}
