import { motion, type Variants } from "framer-motion";
import { Leaf, Wheat, HeartPulse } from "lucide-react";
import Aliment1 from "../../assets/images/Activite/aliment1.jpg";
import Aliment2 from "../../assets/images/Activite/aliment2.jpg";

/* ====== Vos images locales : remplacez ces chemins ====== */
const sacImage = Aliment1; // sac d'aliments (détouré de préférence)
const vacheImage = Aliment2; // animal (détouré de préférence)
/* ========================================================= */

const atouts = [
  {
    icon: Leaf,
    title: "100% naturel",
    text: "Sans additifs chimiques ni facteurs de croissance.",
  },
  {
    icon: Wheat,
    title: "Issu de nos cultures",
    text: "Maïs, soja et son produits et broyés sur place.",
  },
  {
    icon: HeartPulse,
    title: "Adapté à chaque espèce",
    text: "Des formules dédiées : volailles, bovins, lapins, poissons.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Aliments() {
  return (
    <section className="acti-aliments">
      {/* Visuel : sac + animal qui se chevauchent */}
      <motion.div
        className="acti-aliments-visual"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.img
          className="acti-aliments-sac"
          src={sacImage}
          alt="Sac d'aliments pour animaux fabriqué par la SPT2A"
          variants={{
            hidden: { opacity: 0, x: -60, rotate: -8 },
            visible: {
              opacity: 1,
              x: 0,
              rotate: 0,
              transition: { type: "spring", stiffness: 110, damping: 15 },
            },
          }}
        />
        <motion.img
          className="acti-aliments-vache"
          src={vacheImage}
          alt="Vache nourrie avec nos aliments"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { type: "spring", stiffness: 110, damping: 15 },
            },
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="acti-aliments-badge"
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 13,
            delay: 0.5,
          }}
        >
          BIO
        </motion.span>
      </motion.div>

      <motion.div
        className="acti-aliments-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{ visible: { transition: { staggerChildren: 0.13 } } }}
      >
        <motion.p className="acti-kicker" variants={fadeUp}>
          Fabriqué à la ferme
        </motion.p>
        <motion.h2 variants={fadeUp}>
          Production d'aliments
          <br />
          <span>locale & bio</span>
        </motion.h2>
        <motion.p className="acti-aliments-desc" variants={fadeUp}>
          Nous fabriquons sur place la nourriture de nos animaux, à partir de
          nos propres récoltes. Des animaux mieux nourris, c'est une viande, des
          œufs et du lait plus sains dans votre assiette.
        </motion.p>

        <div className="acti-aliments-atouts">
          {atouts.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              className="acti-atout"
              variants={fadeUp}
              whileHover={{ x: 8 }}
            >
              <span className="acti-atout-icon">
                <Icon size={18} strokeWidth={2.2} />
              </span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
