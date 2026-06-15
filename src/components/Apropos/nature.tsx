import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import mais from "../../assets/images/propos/mais.png";
/* ====== Vos images locales : remplacez ces chemins ====== */
const foretImage = "/images/apropos/foret.jpg";
const maisImage = mais;
/* ========================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Nature() {
  const bannerRef = useRef<HTMLDivElement>(null);

  // Parallax sur la forêt
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section className="apro-nature">
      <div className="apro-nature-banner" ref={bannerRef}>
        <motion.img
          src={foretImage}
          alt="Forêt verdoyante"
          style={{ y: parallaxY }}
        />
        <div className="apro-nature-shade" />
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <span className="apro-nature-line">
            <motion.span
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="is-script"
            >
              Nature
            </motion.span>
          </span>
          <span className="apro-nature-line">
            <motion.span
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              & Abondance
            </motion.span>
          </span>
        </motion.h3>
      </div>

      <div className="apro-nature-body">
        <motion.div
          className="apro-nature-visual"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={maisImage}
            alt="Épis de maïs fraîchement récoltés"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="apro-nature-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p variants={fadeUp}>
            Nos cultures poussent en pleine terre, au rythme des saisons. Maïs,
            légumes maraîchers, fruits tropicaux : chaque parcelle est conduite
            avec soin, sans excès d'intrants.
          </motion.p>
          <motion.p variants={fadeUp}>
            Nous pratiquons la rotation des cultures et compostons nos déchets
            verts pour préserver la fertilité des sols, saison après saison.
          </motion.p>
          <motion.p variants={fadeUp}>
            L'eau d'irrigation est gérée au plus juste, et nos haies abritent la
            biodiversité qui protège naturellement nos plantations.
          </motion.p>
          <motion.p variants={fadeUp}>
            C'est cette alliance avec la nature qui donne à nos produits leur
            fraîcheur et leur goût authentique.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
