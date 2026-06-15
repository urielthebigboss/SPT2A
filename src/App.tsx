import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Acceuil";
import SanteNutrition from "./pages/Snate&Nutrition";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Activites from "./pages/Activites";
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
      </Routes>
    </Router>
  );
}
