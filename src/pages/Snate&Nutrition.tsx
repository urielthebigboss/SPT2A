import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Start from "../components/Nutrition/start";
import Goodhealth from "../components/Nutrition/goodhealth";
import Environement from "../components/Nutrition/environement";
import Solaire from "../components/Nutrition/solaire";
import TroisCartes from "../components/Nutrition/3cartes";
import { useSeo } from "../seo/useSeo";
import "./SanteNutrition.css";

export default function SanteNutrition() {
  useSeo({
    title: "Santé & Nutrition — SPT2A | Production Agricole",
    description:
      "Santé et nutrition : conseils, bonnes pratiques et démarche responsable de SPT2A pour une alimentation saine et durable.",
    path: "/sante",
  });
  return (
    <>
      <div className="nutri-page">
        <div className="nutri-nav">
          <Navbar />
        </div>

        <Start />
        <Goodhealth />
        <Environement />
        <Solaire />
        <TroisCartes />
      </div>

      <Footer />
    </>
  );
}
