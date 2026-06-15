import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Houpouet from "../../assets/images/propos/H.jpg";
/* ====== Votre image locale : remplacez ce chemin ====== */
const heroImage = Houpouet;
/* ======================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="apro-hero">
      <motion.div
        className="apro-hero-intro"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
          },
        }}
      >
        <motion.h1 variants={fadeUp}>
          Bâtir l'avenir
          <br />
          par l'agriculture
        </motion.h1>
        <motion.p variants={fadeUp}>
          La SPT2A est une société ivoirienne de production et de transformation
          agricole et animale. Nous cultivons, élevons et transformons
          localement, pour une alimentation saine et accessible.
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
      </motion.div>

      <div className="apro-hero-bottom">
        <motion.div
          className="apro-hero-photo"
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroImage} alt="Héritage agricole de la Côte d'Ivoire" />
        </motion.div>

        <motion.blockquote
          className="apro-hero-quote"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <motion.span
            className="apro-hero-quote-icon"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 14,
              delay: 0.6,
            }}
          >
            <Quote size={40} strokeWidth={2.5} />
          </motion.span>
          <p>
            Le succès de ce pays repose sur{" "}
            <span className="apro-hero-quote-mark">l'agriculture.</span>
          </p>
          <cite>— Félix Houphouët-Boigny</cite>
        </motion.blockquote>
      </div>
    </section>
  );
}
