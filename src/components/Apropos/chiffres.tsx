import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Counter from "../Nutrition/counter";

const stats = [
  {
    value: 10000,
    prefix: "+",
    suffix: "",
    label: "plants cultivés chaque saison",
  },
  {
    value: 94,
    prefix: "",
    suffix: "%",
    label: "de nos récoltes transformées sur place",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "production locale et traçable",
  },
  { value: 7, prefix: "+", suffix: "", label: "partenaires distributeurs" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Chiffres() {
  return (
    <section className="apro-chiffres">
      {/* Colonne gauche : titre + chiffres clés */}
      <motion.div
        className="apro-chiffres-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.p className="apro-kicker" variants={fadeUp}>
          Notre domaine
        </motion.p>
        <motion.h3 variants={fadeUp}>
          Un paradis vert
          <br />
          au cœur de la Côte d'Ivoire
        </motion.h3>

        <div className="apro-stats">
          {stats.map(({ value, prefix, suffix, label }) => (
            <motion.div key={label} className="apro-stat" variants={fadeUp}>
              <p className="apro-stat-value">
                <Counter to={value} prefix={prefix} suffix={suffix} />
              </p>
              <p className="apro-stat-label">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp}>
          <motion.a
            href="#suivre"
            className="apro-cta-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Nous suivre
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Composition décorative centrale */}
      <div className="apro-chiffres-shapes" aria-hidden>
        <motion.span
          className="shape shape-blue"
          initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          animate={{ y: [0, -10, 0] }}
        />
        <motion.span />
        <motion.span
          className="shape shape-grey"
          initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: 0.15,
          }}
        />
        <motion.span
          className="apro-chiffres-tag"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Tout
          <br />
          en vert
        </motion.span>
      </div>

      {/* Colonne droite : qui sommes-nous */}
      <motion.div
        className="apro-chiffres-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.h3 variants={fadeUp}>Qui sommes-nous ?</motion.h3>
        <motion.p variants={fadeUp}>
          La Société de Production et de Transformation Agricole et Animale
          (SPT2A) est née d'une conviction simple : la terre ivoirienne peut
          nourrir durablement ses habitants.
        </motion.p>
        <motion.p className="is-strong" variants={fadeUp}>
          De la production à la transformation, une chaîne complète
        </motion.p>
        <motion.p variants={fadeUp}>
          Sur plus de 10 hectares, nous cultivons fruits et légumes, élevons nos
          animaux et transformons nos récoltes dans notre propre usine.
        </motion.p>
        <motion.p variants={fadeUp}>
          Cette maîtrise de bout en bout nous permet de garantir des produits
          frais, traçables et accessibles à tous.
        </motion.p>
      </motion.div>
    </section>
  );
}
