import { motion, type Variants } from "framer-motion";
import {
  Sprout,
  ShieldCheck,
  Layers,
  LineChart,
  Leaf,
  PawPrint,
} from "lucide-react";

const avantages = [
  {
    icon: Sprout,
    titre: "Accès à l'investissement agricole",
    texte: "Participez à l'agriculture sans posséder de terre ni d'exploitation.",
  },
  {
    icon: ShieldCheck,
    titre: "Gestion professionnelle",
    texte: "Votre élevage est encadré par des équipes expérimentées.",
  },
  {
    icon: Layers,
    titre: "Diversification",
    texte: "Répartissez votre investissement sur plusieurs espèces.",
  },
  {
    icon: LineChart,
    titre: "Suivi de l'investissement",
    texte: "Restez informé de l'évolution de votre élevage.",
  },
  {
    icon: Leaf,
    titre: "Activité agricole réelle",
    texte: "Contribuez à une production locale et concrète en Côte d'Ivoire.",
  },
  {
    icon: PawPrint,
    titre: "Liberté de choix",
    texte: "Choisissez le type d'animal qui vous correspond.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Avantages() {
  return (
    <motion.section
      className="inv-avantages"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="inv-section-head">
        <motion.p className="inv-kicker" variants={fadeUp}>
          Pourquoi investir avec SPT2A
        </motion.p>
        <motion.h2 variants={fadeUp}>Les avantages du programme</motion.h2>
      </div>

      <div className="inv-avantages-grid">
        {avantages.map(({ icon: Icon, titre, texte }) => (
          <motion.article
            key={titre}
            className="inv-avantage"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <span className="inv-avantage-icon">
              <Icon size={24} strokeWidth={2} />
            </span>
            <h3>{titre}</h3>
            <p>{texte}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
