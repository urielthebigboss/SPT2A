import { motion, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import img1 from "../../assets/images/propos/img1.jpg";
import img2 from "../../assets/images/propos/img2.jpg";
import img3 from "../../assets/images/propos/img3.jpg";

/* ====== Vos images locales : remplacez ces chemins ====== */
const engagements = [
  {
    src: img1,
    title: "Agriculture durable",
    text: "Des pratiques qui régénèrent les sols et préservent les ressources pour les générations futures.",
  },
  {
    src: img2,
    title: "Emploi local",
    text: "Nous formons et employons les talents de la région, pour que la richesse créée profite à tous.",
  },
  {
    src: img3,
    title: "Bien-être animal",
    text: "Un élevage respectueux, des animaux nourris avec nos propres cultures.",
  },
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

export default function Engagements() {
  return (
    <motion.section
      className="apro-engagements"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.p className="apro-kicker" variants={fadeUp}>
        Nos valeurs
      </motion.p>
      <motion.h3 variants={fadeUp}>Nos engagements</motion.h3>
      <motion.p className="apro-engagements-sub" variants={fadeUp}>
        Trois promesses qui guident chacune de nos décisions, du semis à la
        livraison.
      </motion.p>

      <div className="apro-engagements-cards">
        {engagements.map(({ src, title, text }) => (
          <motion.article
            key={title}
            className="apro-engagement"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <motion.figure whileHover="zoom">
              <motion.img
                src={src}
                alt={title}
                variants={{ zoom: { scale: 1.08 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.figure>
            <h4>{title}</h4>
            <p>{text}</p>
            <motion.span
              className="apro-engagement-plus"
              whileHover={{ rotate: 90, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
            >
              <Plus size={16} strokeWidth={2.6} />
            </motion.span>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
