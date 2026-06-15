import { motion, type Variants } from "framer-motion";
import { Clock, Wheat, Flame } from "lucide-react";
import B1 from "../../assets/images/Activite/B1.jpg";
import B2 from "../../assets/images/Activite/B2.jpg";
import B3 from "../../assets/images/Activite/b3.jpg";
/* ====== Vos images locales : remplacez ces chemins ====== */
const pains = [
  { src: B1, alt: "Pains traditionnels" },
  { src: B2, alt: "Baguettes croustillantes" },
  { src: B3, alt: "Pains complets" },
];
/* ========================================================= */

const promesses = [
  { icon: Flame, label: "Cuit au feu chaque matin" },
  { icon: Wheat, label: "Farines de nos moulins" },
  { icon: Clock, label: "Frais du jour, tous les jours" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Boulangerie() {
  return (
    <section className="acti-boulangerie">
      <motion.div
        className="acti-boulangerie-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
      >
        <motion.p className="acti-kicker is-warm" variants={fadeUp}>
          Notre boulangerie
        </motion.p>
        <motion.h2 variants={fadeUp}>
          Le pain de la ferme,
          <br />
          sorti du four chaque matin
        </motion.h2>
        <motion.p className="acti-boulangerie-desc" variants={fadeUp}>
          Du blé au fournil, il n'y a qu'un pas — et c'est chez nous qu'il se
          fait. Notre boulangerie pétrit et cuit chaque jour des pains généreux,
          avec les farines issues de nos cultures.
        </motion.p>

        <motion.ul className="acti-boulangerie-promesses" variants={fadeUp}>
          {promesses.map(({ icon: Icon, label }) => (
            <motion.li key={label} whileHover={{ x: 6 }}>
              <span>
                <Icon size={16} strokeWidth={2.2} />
              </span>
              {label}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="acti-boulangerie-photos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {pains.map(({ src, alt }, i) => (
          <motion.figure
            key={src}
            className={`acti-pain p${i + 1}`}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
                rotate: i === 1 ? 0 : i === 0 ? -4 : 4,
              },
              visible: {
                opacity: 1,
                y: 0,
                rotate: i === 1 ? 0 : i === 0 ? -3 : 3,
                transition: { type: "spring", stiffness: 130, damping: 15 },
              },
            }}
            whileHover={{ y: -10, rotate: 0, zIndex: 3 }}
          >
            <img src={src} alt={alt} loading="lazy" />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
