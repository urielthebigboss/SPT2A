import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Contact/intro";
import Carte from "../components/Contact/carte";
import Formulaire from "../components/Contact/formulaire";
import { useSeo } from "../seo/useSeo";
import "./Contact.css";

export default function Contact() {
  useSeo({
    title: "Contact & Localisation — SPT2A | Société de Production et de Transformation Agricole",
    description:
      "Contactez SPT2A : adresse, téléphone, email et plan d'accès. Retrouvez notre localisation sur la carte et envoyez-nous un message.",
    path: "/contact",
  });
  return (
    <>
      <div className="contact-page">
        <div className="contact-nav">
          <Navbar />
        </div>

        <Intro />
        <Carte />
        <Formulaire />
      </div>

      <Footer />
    </>
  );
}
