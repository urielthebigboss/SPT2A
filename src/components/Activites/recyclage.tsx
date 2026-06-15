import { motion, type Variants } from "framer-motion";
import { Recycle, Leaf, Droplet, Sprout, ArrowRight } from "lucide-react";

const cycle = [
  { icon: Leaf, label: "Déchets verts", text: "Résidus de récoltes et de transformation" },
  { icon: Recycle, label: "Compost & recyclage", text: "Broyés, compostés ou réemployés" },
  { icon: Sprout, label: "Retour aux champs", text: "Sols nourris, cultures plus fortes" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Recyclage() {
  return (
    <motion.section
      className="acti-recyclage"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.span
        className="acti-recyclage-icon"
        variants={fadeUp}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <Recycle size={30} strokeWidth={2} />
      </motion.span>

      <motion.h2 variants={fadeUp}>Rien ne se perd, tout se cultive</motion.h2>
      <motion.p className="acti-recyclage-sub" variants={fadeUp}>
        À la SPT2A, le recyclage est une boucle : ce que la ferme produit en
        trop retourne nourrir la ferme. L'eau est recyclée pour l'irrigation
        <Droplet size={13} strokeWidth={2.4} style={{ display: "inline", margin: "0 3px" }} />
        et nos emballages sont pensés pour être réutilisés.
      </motion.p>

      <div className="acti-cycle">
        {cycle.map(({ icon: Icon, label, text }, i) => (
          <div key={label} className="acti-cycle-wrap">
            <motion.div
              className="acti-cycle-step"
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 150, damping: 15 },
                },
              }}
              whileHover={{ y: -8, scale: 1.04 }}
            >
              <span className="acti-cycle-icon">
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <h4>{label}</h4>
              <p>{text}</p>
            </motion.div>

            {i < cycle.length - 1 && (
              <motion.span
                className="acti-cycle-arrow"
                aria-hidden
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} strokeWidth={2.4} />
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
