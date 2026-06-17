import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Apropos/hero";
import Chiffres from "../components/Apropos/chiffres";
import Bandeau from "../components/Apropos/bandeau";
import Nature from "../components/Apropos/nature";
import Production from "../components/Apropos/production";
import Installations from "../components/Apropos/installations";
import Qualite from "../components/Apropos/qualite";
import Engagements from "../components/Apropos/engagements";
import Membres from "../components/Apropos/membres";
import { useSeo } from "../seo/useSeo";
import "./Apropos.css";

export default function Apropos() {
  useSeo({
    title: "À propos — SPT2A",
    description:
      "L'histoire de SPT2A, entreprise familiale : les valeurs, les installations et la démarche qualité.",
    path: "/apropos",
  });
  return (
    <>
      <div className="apro-page">
        <div className="apro-nav">
          <Navbar />
        </div>

        <Hero />
        <Chiffres />
        <Bandeau />
        <Nature />
        <Production />
        <Installations />
        <Qualite />
        <Engagements />
        <Membres />
      </div>

      <Footer />
    </>
  );
}
