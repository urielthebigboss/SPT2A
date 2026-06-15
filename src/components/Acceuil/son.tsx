import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

/* ====== Votre fichier audio : déposez le son de vache ici ====== */
const SON_VACHE = "/sounds/vache.mp3"; // public/sounds/vache.mp3
const VOLUME = 0.35; // volume doux pour rester en fond (0 à 1)
/* ================================================================ */

export default function SonVache() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [actif, setActif] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;

    const demarrer = () => {
      audio
        .play()
        .then(() => setActif(true))
        .catch(() => {});
    };

    // Tentative directe (souvent bloquée par le navigateur)…
    audio
      .play()
      .then(() => setActif(true))
      .catch(() => {
        // …sinon au premier geste de l'utilisateur sur la page
        window.addEventListener("pointerdown", demarrer, { once: true });
      });

    return () => {
      window.removeEventListener("pointerdown", demarrer);
      audio.pause();
    };
  }, []);

  const basculer = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (actif) {
      audio.pause();
      setActif(false);
    } else {
      audio
        .play()
        .then(() => setActif(true))
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={SON_VACHE} loop preload="auto" />

      <motion.button
        type="button"
        className="son-vache"
        onClick={basculer}
        aria-label={actif ? "Couper le son de la ferme" : "Activer le son de la ferme"}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 140, damping: 16 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <motion.span
          className="son-vache-icon"
          animate={actif ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }}
          transition={
            actif
              ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        >
          {actif ? <Volume2 size={15} strokeWidth={2.4} /> : <VolumeX size={15} strokeWidth={2.4} />}
        </motion.span>
        {actif ? "Son de la ferme" : "Activer le son"}

        {/* Petites barres d'égaliseur quand le son joue */}
        {actif && (
          <span className="son-vache-eq" aria-hidden>
            {[0, 1, 2].map((i) => (
              <motion.i
                key={i}
                animate={{ scaleY: [0.4, 1, 0.5, 0.9, 0.4] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.18,
                }}
              />
            ))}
          </span>
        )}
      </motion.button>
    </>
  );
}
