import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Heart, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import image1 from "../../assets/images/Sante&Nutrition/image1.png";

/* ====== Votre image locale : remplacez ce chemin ====== */
const bowlImage = image1;
/* ====================================================== */

const chips = [
  { icon: Leaf, label: "100% Local" },
  { icon: Heart, label: "Riche en nutriments" },
  { icon: ShieldCheck, label: "Sans additifs" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Start() {
  return (
    <section className="nutri-start">
      {/* Décor moderne : halos dégradés + grille en pointillés */}
      <span className="nutri-start-blob blob-1" aria-hidden />
      <span className="nutri-start-blob blob-2" aria-hidden />
      <span className="nutri-start-dots" aria-hidden />

      <div className="nutri-start-inner">
        {/* ---- Colonne texte ---- */}
        <motion.div
          className="nutri-start-text"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
        >
          <motion.span className="nutri-start-badge" variants={fadeUp}>
            <Leaf size={15} strokeWidth={2.2} />
            Santé &amp; Nutrition
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Bien manger,{" "}
            <span className="nutri-start-grad">mieux vivre</span>
            <br />
            avec SPT2A
          </motion.h1>

          <motion.p className="nutri-start-desc" variants={fadeUp}>
            De nos champs à votre assiette, la SPT2A cultive, transforme et
            sélectionne des aliments sains, locaux et riches en nutriments —
            parce que bien manger est le premier geste pour bien vivre.
          </motion.p>

          <motion.div className="nutri-start-actions" variants={fadeUp}>
            <a href="#decouvrir" className="nutri-start-cta">
              Découvrir nos produits
              <span className="nutri-start-cta-icon">
                <ArrowRight size={16} strokeWidth={2.4} />
              </span>
            </a>
            <Link to="/activites" className="nutri-start-link">
              Nos activités
            </Link>
          </motion.div>

          <motion.ul className="nutri-start-chips" variants={fadeUp}>
            {chips.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={15} strokeWidth={2.2} />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---- Colonne visuelle ---- */}
        <motion.div
          className="nutri-start-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.3 }}
        >
          <span className="nutri-start-ring" aria-hidden />
          <span className="nutri-start-disc" aria-hidden />

          <motion.img
            className="nutri-start-bowl"
            src={bowlImage}
            alt="Bol healthy de légumes et céréales"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cartes flottantes en verre */}
          <motion.div
            className="nutri-float-card card-top"
            initial={{ opacity: 0, x: 24, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 120, damping: 15 }}
          >
            <span className="nutri-float-icon">
              <Sparkles size={16} strokeWidth={2.2} />
            </span>
            <span className="nutri-float-text">
              <strong>100% Naturel</strong>
              <small>Sans conservateurs</small>
            </span>
          </motion.div>

          <motion.div
            className="nutri-float-card card-bottom"
            initial={{ opacity: 0, x: -24, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 120, damping: 15 }}
          >
            <span className="nutri-float-num">+50</span>
            <span className="nutri-float-text">
              <strong>Nutriments</strong>
              <small>par portion</small>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
