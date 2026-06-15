import { motion } from "framer-motion";

// Logos en attente des fichiers officiels — remplacez `text` par une balise
// <img> quand les assets seront disponibles dans src/assets/images.
const partenaires = [
  { id: "wave", text: "", className: "logo-wave" },
  { id: "coqivoire", text: "", className: "logo-coqivoire" },
  { id: "greeno", text: "", className: "logo-greeno" },
  { id: "sys", text: "", className: "logo-sys" },
  { id: "carrefour", text: "", className: "logo-carrefour" },
];

export default function Partenaire() {
  const doubled = [...partenaires, ...partenaires];

  return (
    <motion.section
      className="partenaires"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="partenaires-title">Nos partenaires</p>

      <div className="partenaires-marquee">
        <motion.div
          className="partenaires-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map(({ id, text, className }, i) => (
            <motion.span
              key={`${id}-${i}`}
              className={`partenaire-logo ${className}`}
              whileHover={{ scale: 1.12, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
