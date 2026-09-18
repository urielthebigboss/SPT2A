import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, HandCoins } from "lucide-react";
import heroImg from "../../assets/images/farmer.jpg";

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
    <section className="inv-hero">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.14, delayChildren: 0.2 },
          },
        }}
      >
        <motion.p className="inv-kicker" variants={fadeUp}>
          Programme d'investissement
        </motion.p>
        <motion.h1 className="inv-hero-title" variants={fadeUp}>
          Investissez dans{" "}
          <span style={{ color: "#fcfcfc", backgroundColor: "#00a53c" }}>
            l'élevage
          </span>
          ,
          <br />
          nous nous occupons du reste.
        </motion.h1>
        <motion.p className="inv-hero-lead" variants={fadeUp}>
          Avec SPT2A, devenez propriétaire d'un ou plusieurs animaux d'élevage.
          Vous choisissez, vous investissez — et nos équipes assurent
          l'alimentation, l'abri, les soins et le suivi jusqu'à la valorisation
          de votre investissement.
        </motion.p>
        <motion.div className="inv-hero-ctas" variants={fadeUp}>
          <Link to="/contact" className="inv-btn inv-btn-primary">
            <HandCoins size={17} strokeWidth={2.2} />
            Investir maintenant
          </Link>
          <a href="#inv-comment" className="inv-btn inv-btn-ghost">
            Découvrir le programme
            <span className="inv-btn-icon">
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="inv-hero-visual"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={heroImg}
          alt="Élevage et agriculture SPT2A en Côte d'Ivoire"
        />
        <div className="inv-hero-badge">
          <span>
            Gestion déléguée
            <small>Vous investissez, nous élevons</small>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
