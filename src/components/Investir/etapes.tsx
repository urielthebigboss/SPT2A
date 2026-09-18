import { motion, type Variants } from "framer-motion";
import {
  MousePointerClick,
  HandCoins,
  Tractor,
  Sprout,
  Wallet,
} from "lucide-react";

const etapes = [
  {
    icon: MousePointerClick,
    titre: "Vous choisissez votre animal",
    texte: "Sélectionnez une ou plusieurs espèces parmi notre cheptel.",
  },
  {
    icon: HandCoins,
    titre: "Vous investissez",
    texte: "Vous financez l'achat de votre animal auprès de SPT2A.",
  },
  {
    icon: Tractor,
    titre: "Nous nous occupons de l'élevage",
    texte: "Alimentation, abri, soins et suivi : tout est géré par nos équipes.",
  },
  {
    icon: Sprout,
    titre: "Votre animal prend de la valeur",
    texte: "L'animal grandit et produit de la valeur au fil de l'élevage.",
  },
  {
    icon: Wallet,
    titre: "Vous recevez vos bénéfices",
    texte: "Vous percevez les retours selon les modalités du programme.",
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

export default function Etapes() {
  return (
    <motion.section
      id="inv-comment"
      className="inv-steps"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="inv-section-head">
        <motion.p className="inv-kicker" variants={fadeUp}>
          Comment ça fonctionne ?
        </motion.p>
        <motion.h2 variants={fadeUp}>Un parcours simple, en 5 étapes</motion.h2>
        <motion.p variants={fadeUp}>
          De votre choix jusqu'aux bénéfices, un investissement agricole clair
          et sans gestion quotidienne de votre part.
        </motion.p>
      </div>

      <div className="inv-steps-track">
        {etapes.map(({ icon: Icon, titre, texte }, i) => (
          <motion.article
            key={titre}
            className="inv-step"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <span className="inv-step-num">{i + 1}</span>
            <span className="inv-step-icon">
              <Icon size={26} strokeWidth={2} />
            </span>
            <h3>{titre}</h3>
            <p>{texte}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
