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
import "./Apropos.css";

export default function Apropos() {
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
