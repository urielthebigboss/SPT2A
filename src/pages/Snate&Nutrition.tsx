import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Start from "../components/Nutrition/start";
import Goodhealth from "../components/Nutrition/goodhealth";
import Environement from "../components/Nutrition/environement";
import Solaire from "../components/Nutrition/solaire";
import TroisCartes from "../components/Nutrition/3cartes";
import "./SanteNutrition.css";

export default function SanteNutrition() {
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
