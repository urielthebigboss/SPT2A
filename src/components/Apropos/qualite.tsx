import { motion, type Variants } from "framer-motion";

import Bambou from "../../assets/images/propos/bamboo.png";
/* ====== Votre image locale : remplacez ce chemin ====== */
const bambouImage = Bambou;
/* ======================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Qualite() {
  return (
    <section className="apro-qualite">
      <motion.span
        className="circle circle-grey-light"
        aria-hidden
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
        animate={{ y: [0, -14, 0] }}
      />

      <div className="apro-qualite-texts">
        <motion.div
          className="apro-qualite-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h3 variants={fadeUp}>
            Standards
            <br />
            de qualité
          </motion.h3>
          <motion.p variants={fadeUp}>
            Contrôles à chaque étape, chaîne du froid respectée, hygiène stricte
            dans notre usine : nous appliquons les standards les plus exigeants
            pour garantir des produits sûrs et savoureux.
          </motion.p>
        </motion.div>

        <motion.div
          className="apro-qualite-block is-offset"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h3 variants={fadeUp}>
            Politique
            <br />
            environnementale
          </motion.h3>
          <motion.p variants={fadeUp}>
            Énergie solaire, recyclage de l'eau, zéro gaspillage : nous
            réduisons notre empreinte à chaque maillon de la chaîne, parce
            qu'une bonne alimentation commence par une planète en bonne santé.
          </motion.p>
        </motion.div>
      </div>

      <motion.img
        className="apro-qualite-bambou"
        src={bambouImage}
        alt="Bambous de notre domaine"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  );
}
