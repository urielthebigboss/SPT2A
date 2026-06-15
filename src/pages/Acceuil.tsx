import Navbar from "../components/Acceuil/navbar";
import Contenu from "../components/Acceuil/contenu";
import Partenaire from "../components/Acceuil/partenaire";
import SonVache from "../components/Acceuil/son";
import Footer from "../components/Footer/Footer";
import "./Acceuil.css";

export default function Accueil() {
  return (
    <>
      <div className="accueil">
        {/* Vidéo de fond : public/video/deo.mp4 */}
        <video
          className="accueil-video"
          src="/video/deo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="accueil-content">
          <Navbar />
          <Contenu />
        </div>

        {/* Son d'ambiance de la ferme pendant la vidéo */}
        <SonVache />

        <div className="accueil-partenaires">
          <Partenaire />
        </div>
      </div>

      <Footer />
    </>
  );
}
