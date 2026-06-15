import { motion, type Variants } from "framer-motion";

/* ====== Vos images locales : remplacez ces chemins ======
   La mosaïque du haut : 10 photos de vos activités (champs,
   serres, usine, élevage, boulangerie, eau…). Les classes t1…t10
   contrôlent la taille de chaque tuile dans Activites.css. */
const tiles = [
  { src: "/images/activites/hero-1.jpg", className: "t1" },
  { src: "/images/activites/hero-2.jpg", className: "t2" },
  { src: "/images/activites/hero-3.jpg", className: "t3" },
  { src: "/images/activites/hero-4.jpg", className: "t4" },
  { src: "/images/activites/hero-5.jpg", className: "t5" },
  { src: "/images/activites/hero-6.jpg", className: "t6" },
  { src: "/images/activites/hero-7.jpg", className: "t7" },
  { src: "/images/activites/hero-8.jpg", className: "t8" },
  { src: "/images/activites/hero-9.jpg", className: "t9" },
  { src: "/images/activites/hero-10.jpg", className: "t10" },
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
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } } }}
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
              transition={{ duration: 5 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="acti-hero-text"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } } }}
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
