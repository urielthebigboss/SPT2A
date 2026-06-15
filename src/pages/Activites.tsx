import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Activites/hero";
import Excellence from "../components/Activites/excellence";
import Productions from "../components/Activites/productions";
import Aliments from "../components/Activites/aliments";
import OGrace from "../components/Activites/ograce";
import Boulangerie from "../components/Activites/boulangerie";
import Recyclage from "../components/Activites/recyclage";
import Finale from "../components/Activites/finale";
import "./Activites.css";

export default function Activites() {
  return (
    <>
      <div className="acti-page">
        <div className="acti-nav">
          <Navbar />
        </div>

        <Hero />
        <Excellence />
        <Productions />
        <Aliments />
        <OGrace />
        <Boulangerie />
        <Recyclage />
        <Finale />
      </div>

      <Footer />
    </>
  );
}
