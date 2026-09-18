import { motion, type Variants } from "framer-motion";
import vache from "../../assets/images/Activite/vache.jpg";
import mouton from "../../assets/images/Activite/Monton.jpg";
import chevre from "../../assets/images/Activite/Chevres.jpg";
import poule from "../../assets/images/Activite/poule.jpg";
import porc from "../../assets/images/Activite/porc.jpg";
import poisson from "../../assets/images/Activite/poisson.jpg";
import lapin from "../../assets/images/Activite/lapin.jpg";
import agouti from "../../assets/images/Activite/Agouti.jpg";

/* ====== Images locales : remplacez librement ces chemins ====== */
const animaux = [
  { src: vache, nom: "Bovins", desc: "Élevage bovin pour la viande et le lait." },
  { src: mouton, nom: "Ovins", desc: "Moutons élevés pour la viande." },
  { src: chevre, nom: "Caprins", desc: "Chèvres robustes et faciles à élever." },
  { src: poule, nom: "Volailles", desc: "Poules, canards, pintades, dindons." },
  { src: porc, nom: "Porcins", desc: "Élevage porcin à cycle court." },
  { src: poisson, nom: "Poissons", desc: "Pisciculture en bassins et étangs." },
  { src: lapin, nom: "Lapins", desc: "Cuniculture à forte reproduction." },
  { src: agouti, nom: "Aulacodes", desc: "Élevage d'aulacodes (agoutis)." },
];
/* ============================================================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Animaux() {
  return (
    <motion.section
      className="inv-animaux"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="inv-section-head">
        <motion.p className="inv-kicker" variants={fadeUp}>
          Un programme, plusieurs espèces
        </motion.p>
        <motion.h2 variants={fadeUp}>
          Investissez dans l'animal de votre choix
        </motion.h2>
        <motion.p variants={fadeUp}>
          Le programme ne se limite pas à une seule espèce : diversifiez votre
          investissement selon vos préférences.
        </motion.p>
      </div>

      <div className="inv-animaux-grid">
        {animaux.map(({ src, nom, desc }) => (
          <motion.article
            key={nom}
            className="inv-animal"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <div className="inv-animal-photo">
              <motion.img
                src={src}
                alt={`Investir dans l'élevage de ${nom.toLowerCase()} avec SPT2A`}
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="inv-animal-body">
              <h3>{nom}</h3>
              <p>{desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
