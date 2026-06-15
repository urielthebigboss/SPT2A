import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Bandeau() {
  return (
    <section className="apro-bandeau">
      {/* Cercles décoratifs */}
      <div className="apro-bandeau-circles" aria-hidden>
        <motion.span
          className="circle circle-big"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
          animate={{ y: [0, -12, 0] }}
        />
        <motion.span
          className="circle circle-small"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.2 }}
          animate={{ y: [0, 10, 0] }}
        />
      </div>

      <motion.div
        className="apro-bandeau-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h3 variants={fadeUp}>
          Une entreprise, une vision :
          <br />
          nourrir durablement
        </motion.h3>
        <motion.p variants={fadeUp}>
          Découvrez notre ferme, notre usine et les femmes et les hommes qui
          font vivre la SPT2A au quotidien.
        </motion.p>
        <motion.div className="apro-bandeau-actions" variants={fadeUp}>
          <motion.a
            href="#suivre"
            className="apro-cta-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Nous suivre
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </motion.a>
          <motion.a
            href="#video"
            className="apro-cta-play"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              className="apro-cta-play-icon"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Play size={13} strokeWidth={2.6} fill="currentColor" />
            </motion.span>
            La société
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
