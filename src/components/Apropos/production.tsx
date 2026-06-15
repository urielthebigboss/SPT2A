import { motion, type Variants } from "framer-motion";
import { Sprout, Factory, Truck } from "lucide-react";

const etapes = [
  {
    icon: Sprout,
    title: "Culture & récolte",
    text: "Semis, entretien et récolte à maturité sur nos 10 hectares.",
  },
  {
    icon: Factory,
    title: "Transformation locale",
    text: "Nos récoltes sont transformées sur place, dans notre propre usine.",
  },
  {
    icon: Truck,
    title: "Distribution en circuit court",
    text: "Nos partenaires sont livrés en direct, sans intermédiaire.",
  },
];

const minicartes = [
  { title: "Fraîcheur", text: "Du champ au magasin en moins de 48 heures." },
  { title: "Traçabilité", text: "Chaque lot est suivi de la parcelle à l'assiette." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Production() {
  return (
    <section className="apro-prod">
      {/* Composition décorative + mini-cartes */}
      <div className="apro-prod-visual">
        <motion.span
          className="shape shape-orange"
          aria-hidden
          initial={{ opacity: 0, scale: 0.4, rotate: -16 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 110, damping: 13 }}
        />
        <motion.span
          className="shape shape-black"
          aria-hidden
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
        <div className="apro-prod-minicartes">
          {minicartes.map(({ title, text }, i) => (
            <motion.div
              key={title}
              className="apro-prod-minicarte"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 140, damping: 16 }}
              whileHover={{ y: -6 }}
            >
              <h4>{title}</h4>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Étapes de production */}
      <motion.div
        className="apro-prod-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p className="apro-kicker" variants={fadeUp}>
          Production
        </motion.p>
        <motion.h3 variants={fadeUp}>
          Une production maîtrisée
          <br />
          de bout en bout
        </motion.h3>

        {etapes.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            className="apro-prod-etape"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: "spring", stiffness: 140, damping: 18 },
              },
            }}
            whileHover={{ x: 8 }}
          >
            <motion.span
              className="apro-prod-etape-icon"
              whileHover={{ rotate: 8, scale: 1.08 }}
            >
              <Icon size={20} strokeWidth={2.2} />
            </motion.span>
            <div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
