import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Sun, Leaf, Recycle } from "lucide-react";
import image5 from "../../assets/images/Sante&Nutrition/image5.jpg";

/* ====== Votre image locale : remplacez ce chemin ====== */
const solaireImage = image5;
/* ======================================================= */

const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Solaire() {
  const ref = useRef<HTMLElement>(null);

  // Parallax sur l'image de fond
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section className="nutri-solaire" ref={ref}>
      <motion.img
        className="nutri-solaire-bg"
        src={solaireImage}
        alt="Panneaux solaires au milieu des cultures"
        style={{ y: parallaxY }}
      />
      <div className="nutri-solaire-shade" />

      <div className="nutri-solaire-content">
        <motion.h3
          aria-label="Énergie Solaire"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <span className="nutri-solaire-line">
            <motion.span variants={lineReveal}>
              Energ
              <motion.span
                className="nutri-solaire-bulb"
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              >
                <Sun size={38} strokeWidth={2.4} />
              </motion.span>
              e
            </motion.span>
          </span>
          <span className="nutri-solaire-line">
            <motion.span variants={lineReveal}>Solaire</motion.span>
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nos installations photovoltaïques alimentent la ferme et l'usine de
          transformation. L'énergie du soleil fait pousser nos cultures… et fait
          aussi tourner nos machines : une production plus propre, plus autonome
          et durable.
        </motion.p>

        <motion.div
          className="nutri-solaire-icons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.6 },
            },
          }}
        >
          {[Sun, Leaf, Recycle].map((Icon, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 240, damping: 16 },
                },
              }}
              whileHover={{ scale: 1.2, rotate: 12 }}
            >
              <Icon size={20} strokeWidth={2.2} />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
