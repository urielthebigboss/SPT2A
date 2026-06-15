import { motion, type Variants } from "framer-motion";
import t1 from "../../assets/images/Alatoire/1.jpg";
import t2 from "../../assets/images/Alatoire/2.jpg";
import t3 from "../../assets/images/Alatoire/3.jpg";
import t4 from "../../assets/images/Alatoire/4.jpg";
import t5 from "../../assets/images/Alatoire/5.jpg";
import t6 from "../../assets/images/Alatoire/6.jpg";
import t7 from "../../assets/images/Alatoire/7.jpg";
import t8 from "../../assets/images/Alatoire/8.jpg";
import t9 from "../../assets/images/Alatoire/9.jpg";
import t10 from "../../assets/images/Alatoire/10.jpg";

/* ====== Vos images locales : remplacez ces chemins ======
   La mosaïque du haut : 10 photos de vos activités (champs,
   serres, usine, élevage, boulangerie, eau…). Les classes t1…t10
   contrôlent la taille de chaque tuile dans Activites.css. */
const tiles = [
  { src: t1, className: "t1" },
  { src: t2, className: "t2" },
  { src: t3, className: "t3" },
  { src: t4, className: "t4" },
  { src: t5, className: "t5" },
  { src: t6, className: "t6" },
  { src: t7, className: "t7" },
  { src: t8, className: "t8" },
  { src: t9, className: "t9" },
  { src: t10, className: "t10" },
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

export default function Hero() {
  return (
    <section className="acti-hero">
      <motion.div
        className="acti-hero-mosaic"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.07, delayChildren: 0.3 },
          },
        }}
      >
        {tiles.map(({ src, className }, i) => (
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
            <motion.img
              src={src}
              alt=""
              aria-hidden
              animate={{ y: [0, i % 2 ? -5 : 5, 0] }}
              transition={{
                duration: 5 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="acti-hero-text"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.8 },
          },
        }}
      >
        <motion.h1 variants={fadeUp}>
          Découvrez l'ensemble de nos activités
        </motion.h1>
        <motion.p variants={fadeUp}>
          De la semence au produit fini, la SPT2A fait vivre toute une chaîne :
          cultures, élevage, aliments pour animaux, eau, boulangerie et
          recyclage. Laissez-vous éblouir.
        </motion.p>
      </motion.div>
    </section>
  );
}
