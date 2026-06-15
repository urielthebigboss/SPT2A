import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Contact/intro";
import Carte from "../components/Contact/carte";
import Formulaire from "../components/Contact/formulaire";
import "./Contact.css";

export default function Contact() {
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
