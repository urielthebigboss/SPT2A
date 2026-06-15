import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import image1 from "../../assets/images/i1.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contenu() {
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
      }}
    >
      <motion.h1 className="hero-title" variants={fadeUp}>
        <span className="hero-highlight">
          <motion.span
            className="hero-highlight-bg"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="hero-highlight-text">De la terre à la table,</span>
        </span>{" "}
        l’excellence à chaque étape pour nourrir le monde et préserver la
        nature.
      </motion.h1>

      <motion.p className="hero-subtitle text-white" variants={fadeUp}>
        La Société de Production et de Transformation agricole est une
        entreprise agro-alimentaire.
      </motion.p>

      <motion.div variants={fadeUp}>
        <motion.a
          href="#suivre"
          className="hero-cta"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
        >
          Nous suivre
          <motion.span
            className="hero-cta-icon"
            variants={{ hover: { rotate: 45, scale: 1.1 } }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </motion.span>
        </motion.a>
      </motion.div>

      <motion.div
        className="hero-badge"
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, delay: 1.4 }}
      >
        <motion.div
          className="hero-badge-images"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {[0, 1, 2].map((i) => (
            <motion.img
              key={i}
              src={image1}
              alt="Nos cultures"
              style={{ objectPosition: `${i * 50}% center` }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 + i * 0.15 }}
              whileHover={{ scale: 1.15, zIndex: 5 }}
            />
          ))}
        </motion.div>
        <p style={{ color: "white" }}>
          + 10 hectares
          <br />
          en vert.
        </p>
      </motion.div>
    </motion.section>
  );
}
