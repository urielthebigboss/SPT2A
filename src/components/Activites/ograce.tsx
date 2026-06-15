import { motion, type Variants } from "framer-motion";
import { Droplets, FlaskConical, MapPin } from "lucide-react";
import eau from "../../assets/images/Activite/eau.jpg";
/* ====== Votre image locale : remplacez ce chemin ====== */
const bouteilleImage = eau; // bouteille détourée
/* ======================================================= */

const qualites = [
  { icon: Droplets, label: "Captée sur nos terres" },
  { icon: FlaskConical, label: "Filtrée et contrôlée" },
  { icon: MapPin, label: "Embouteillée sur place" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Gouttes décoratives qui flottent (pur CSS, aucune image)
const gouttes = [
  { className: "goutte g1" },
  { className: "goutte g2" },
  { className: "goutte g3" },
  { className: "goutte g4" },
  { className: "goutte g5" },
];

export default function OGrace() {
  return (
    <section className="acti-ograce">
      {/* Filigrane géant en fond */}
      <motion.span
        className="acti-ograce-watermark"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4 }}
      >
        O'Grace
      </motion.span>

      {gouttes.map(({ className }, i) => (
        <motion.span
          key={className}
          className={className}
          aria-hidden
          animate={{ y: [0, -16, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="acti-ograce-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
      >
        <motion.p className="acti-kicker is-light" variants={fadeUp}>
          Notre marque d'eau
        </motion.p>
        <motion.h2 variants={fadeUp}>O'Grace</motion.h2>
        <motion.p className="acti-ograce-desc" variants={fadeUp}>
          Née au cœur de notre domaine, O'Grace est captée, filtrée et
          embouteillée sur place. Une eau pure et équilibrée, qui porte la grâce
          de nos terres jusqu'à votre table.
        </motion.p>

        <motion.ul className="acti-ograce-qualites" variants={fadeUp}>
          {qualites.map(({ icon: Icon, label }) => (
            <motion.li key={label} whileHover={{ y: -4 }}>
              <Icon size={16} strokeWidth={2.2} />
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="acti-ograce-visual"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
      >
        <motion.img
          src={bouteilleImage}
          alt="Bouteille d'eau O'Grace"
          animate={{ y: [0, -12, 0], rotate: [0, 1.5, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="acti-ograce-halo" aria-hidden />
      </motion.div>
    </section>
  );
}
