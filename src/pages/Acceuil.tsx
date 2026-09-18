import { useEffect, useRef } from "react";
import Navbar from "../components/Acceuil/navbar";
import Contenu from "../components/Acceuil/contenu";
import Partenaire from "../components/Acceuil/partenaire";
import SonVache from "../components/Acceuil/son";
import Footer from "../components/Footer/Footer";
import { useSeo } from "../seo/useSeo";
import "./Acceuil.css";

export default function Accueil() {
  useSeo({
    title: "SPT2A — Société de Production et de Transformation Agricole",
    description:
      "SPT2A, entreprise de production et de transformation agricole. Activités, démarche, partenaires, contact et localisation.",
    path: "/",
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  // Son de la vidéo : démarrage muet garanti, puis activation du son
  // automatiquement — immédiatement si le navigateur l'autorise, sinon dès
  // le premier geste de l'utilisateur (contourne proprement le blocage
  // autoplay-avec-son imposé par les navigateurs modernes).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // 1) lecture muette (toujours autorisée) pour que la vidéo tourne
    v.muted = true;
    v.play().catch(() => {});

    let actif = false;
    const activerSon = () => {
      v.muted = false;
      v.volume = 0.6;
      return v.play();
    };

    const evts = ["pointerdown", "keydown", "touchstart"] as const;
    const surGeste = () => {
      if (actif) return;
      activerSon()
        .then(() => {
          actif = true;
          retirer();
        })
        .catch(() => {});
    };
    const retirer = () =>
      evts.forEach((e) => window.removeEventListener(e, surGeste));

    // 2) tentative immédiate ; si bloquée, on attend le 1er geste
    activerSon()
      .then(() => {
        actif = true;
      })
      .catch(() => {
        v.muted = true;
        v.play().catch(() => {});
        evts.forEach((e) =>
          window.addEventListener(e, surGeste, { passive: true }),
        );
      });

    return retirer;
  }, []);

  return (
    <>
      <div className="accueil">
        {/* Vidéo de fond : public/video/deo.mp4 */}
        <video
          ref={videoRef}
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
