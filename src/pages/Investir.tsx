import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Investir/hero";
import Etapes from "../components/Investir/etapes";
import Animaux from "../components/Investir/animaux";
import Gestion from "../components/Investir/gestion";
import Avantages from "../components/Investir/avantages";
import FinalCta from "../components/Investir/final";
import { useSeo } from "../seo/useSeo";
import "./Investir.css";

export default function Investir() {
  useSeo({
    title: "Investir — Programme d'investissement agricole | SPT2A",
    description:
      "Investissez dans l'élevage avec SPT2A : achetez un animal, nous gérons l'alimentation, l'abri, les soins et le suivi. Un programme d'investissement agricole clé en main en Côte d'Ivoire.",
    path: "/investir",
  });

  return (
    <div className="inv-page">
      <div className="inv-nav">
        <Navbar />
      </div>

      <Hero />
      <Etapes />
      <Animaux />
      <Gestion />
      <Avantages />
      <FinalCta />

      <Footer />
    </div>
  );
}
