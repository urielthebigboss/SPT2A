import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import installation from "../../assets/images/propos/installation.jpg";
/* ====== Votre image locale : remplacez ce chemin ====== */
const installationsImage = installation;
/* ======================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Installations() {
  return (
    <section className="apro-instal">
      <motion.div
        className="apro-instal-card"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          <motion.h3 variants={fadeUp}>Nos installations</motion.h3>
          <motion.p variants={fadeUp}>
            Une ferme moderne de plus de 10 hectares, une unité de
            transformation équipée et des espaces de stockage aux normes : la
            SPT2A investit dans des infrastructures durables, au service de la
            qualité et du bien-être de nos équipes.
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.a
              href="#suivre"
              className="apro-cta-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              Nous suivre
              <ArrowUpRight size={14} strokeWidth={2.4} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="apro-instal-image"
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={installationsImage} alt="Nos installations agricoles" />
      </motion.div>
    </section>
  );
}
