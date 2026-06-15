import { motion, type Variants } from "framer-motion";
import Counter from "./counter";

const engagements = [
  { label: "Zéro pesticide de synthèse", dark: true },
  { label: "Eau d'irrigation recyclée", dark: false },
  { label: "Compost issu de nos déchets verts", dark: true },
  { label: "Circuits courts, moins de transport", dark: false },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Environement() {
  return (
    <section className="nutri-env">
      <motion.div
        className="nutri-env-head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h3 variants={fadeUp}>Impact sur l'environnement</motion.h3>
        <motion.p variants={fadeUp}>
          Produire mieux en consommant moins : notre modèle agricole réduit
          l'empreinte écologique de chaque assiette.
        </motion.p>
      </motion.div>

      <div className="nutri-env-grid">
        <motion.ul
          className="nutri-env-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {engagements.map(({ label, dark }) => (
            <motion.li
              key={label}
              className={`nutri-env-pill${dark ? " is-dark" : ""}`}
              variants={{
                hidden: { opacity: 0, x: -60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 140, damping: 18 },
                },
              }}
              whileHover={{ x: 8, scale: 1.02 }}
            >
              {label}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="nutri-env-card"
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 110, damping: 16, delay: 0.2 }}
        >
          <motion.span
            className="nutri-env-badge"
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.6 }}
          >
            <Counter to={-22} suffix="%" />
          </motion.span>

          <p className="nutri-env-card-title">d'émissions de CO₂ sur nos cultures</p>
          <p className="nutri-env-card-number">
            <Counter to={10} />
          </p>
          <p className="nutri-env-card-unit">hectares cultivés en vert</p>
          <p className="nutri-env-card-source">D'après les études</p>

          <motion.a
            href="/activites"
            className="nutri-env-visit"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            Visiter
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
