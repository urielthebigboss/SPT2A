import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HandCoins, ArrowUpRight } from "lucide-react";
import ctaImg from "../../assets/images/champ.jpg";

export default function FinalCta() {
  return (
    <motion.section
      className="inv-final"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <img src={ctaImg} alt="Champs agricoles SPT2A" />
      <h2>Faites travailler votre capital dans l'agriculture.</h2>
      <p>
        Rejoignez le programme d'investissement SPT2A : vous choisissez vos
        animaux, nous les élevons pour vous. Parlons de votre projet.
      </p>
      <div className="inv-hero-ctas">
        <Link to="/contact" className="inv-btn inv-btn-primary">
          <HandCoins size={17} strokeWidth={2.2} />
          Commencer à investir
        </Link>
        <Link to="/contact" className="inv-btn inv-btn-ghost">
          Contacter l'équipe
          <span className="inv-btn-icon">
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
