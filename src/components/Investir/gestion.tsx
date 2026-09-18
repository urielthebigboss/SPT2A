import { motion, type Variants } from "framer-motion";
import { Utensils, Home, Stethoscope, ClipboardList, Cog } from "lucide-react";
import gestionImg from "../../assets/images/ferme.jpg";

const items = [
  {
    icon: Utensils,
    titre: "Alimentation",
    texte: "Rations adaptées et suivies pour chaque espèce.",
  },
  {
    icon: Home,
    titre: "Abri & logement",
    texte: "Installations entretenues et sécurisées.",
  },
  {
    icon: Stethoscope,
    titre: "Soins & entretien",
    texte: "Suivi sanitaire et vétérinaire régulier.",
  },
  {
    icon: ClipboardList,
    titre: "Suivi de l'élevage",
    texte: "Croissance et santé encadrées au quotidien.",
  },
  {
    icon: Cog,
    titre: "Gestion complète",
    texte: "Toute la logistique de l'élevage prise en charge.",
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

export default function Gestion() {
  return (
    <section className="inv-gestion">
      <motion.div
        className="inv-gestion-visual"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={gestionImg} alt="Les équipes SPT2A gèrent l'élevage au quotidien" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p className="inv-kicker" variants={fadeUp}>
          Nous gérons pour vous
        </motion.p>
        <motion.p className="inv-gestion-quote" variants={fadeUp}>
          « Vous investissez, <span>nous nous occupons du reste.</span> »
        </motion.p>

        <div className="inv-gestion-list">
          {items.map(({ icon: Icon, titre, texte }) => (
            <motion.div className="inv-gestion-item" key={titre} variants={fadeUp}>
              <span className="inv-gestion-item-icon">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div>
                <h3>{titre}</h3>
                <p>{texte}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
