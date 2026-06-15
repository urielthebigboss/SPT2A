import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ====== Vos images locales : remplacez ces chemins ======
   La mosaïque de clôture : 8 photos fortes de vos activités. */
const tiles = [
  { src: "/images/activites/finale-1.jpg", className: "f1" },
  { src: "/images/activites/finale-2.jpg", className: "f2" },
  { src: "/images/activites/finale-3.jpg", className: "f3" },
  { src: "/images/activites/finale-4.jpg", className: "f4" },
  { src: "/images/activites/finale-5.jpg", className: "f5" },
  { src: "/images/activites/finale-6.jpg", className: "f6" },
  { src: "/images/activites/finale-7.jpg", className: "f7" },
  { src: "/images/activites/finale-8.jpg", className: "f8" },
];
/* ========================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Finale() {
  return (
    <section className="acti-finale">
      <motion.div
        className="acti-finale-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2 variants={fadeUp}>
          L'excellence à chaque étape,
          <br />
          pour nourrir le monde
          <br />
          et préserver la nature.
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link to="/contact">
            <motion.span
              className="hero-cta"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
            >
              Travailler avec nous
              <motion.span
                className="hero-cta-icon"
                variants={{ hover: { rotate: 45, scale: 1.1 } }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </motion.span>
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="acti-finale-mosaic"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {tiles.map(({ src, className }) => (
          <motion.div
            key={className}
            className={`acti-tile ${className}`}
            variants={{
              hidden: { opacity: 0, scale: 0.7, y: 30 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 150, damping: 16 },
              },
            }}
            whileHover={{ scale: 1.05, zIndex: 2 }}
          >
            <img src={src} alt="" aria-hidden loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
