import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import image6 from "../../assets/images/Sante&Nutrition/image6.jpg";
import image7 from "../../assets/images/Sante&Nutrition/image7.jpg";
import image8 from "../../assets/images/Sante&Nutrition/image8.jpg";
/* ====== Vos images locales : remplacez ces chemins ====== */
const cartes = [
  { src: image6, tag: "#ToutEnBio" },
  { src: image7, tag: "#BonneSanté" },
  { src: image8, tag: "#ProtégerLEnvironnement" },
];
/* ========================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TroisCartes() {
  return (
    <motion.section
      className="nutri-cartes"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
    >
      {cartes.map(({ src, tag }, i) => (
        <motion.div
          key={tag}
          className={`nutri-carte${i === 1 ? " is-middle" : ""}`}
          variants={fadeUp}
        >
          {/* La carte du milieu porte l'intro + le bouton */}
          {i === 1 && (
            <div className="nutri-carte-intro">
              <p>
                Suivez nos actualités : recettes de saison, conseils nutrition
                et coulisses de la ferme.
              </p>
              <motion.a
                href="#suivre"
                className="hero-cta"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
              >
                Nous suivre
                <motion.span
                  className="hero-cta-icon"
                  variants={{ hover: { rotate: 45, scale: 1.1 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </motion.span>
              </motion.a>
            </div>
          )}

          <motion.figure whileHover="zoom">
            <motion.img
              src={src}
              alt={tag}
              variants={{ zoom: { scale: 1.08 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.figure>

          <motion.p
            className="nutri-carte-tag"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            {tag}
          </motion.p>
        </motion.div>
      ))}
    </motion.section>
  );
}
