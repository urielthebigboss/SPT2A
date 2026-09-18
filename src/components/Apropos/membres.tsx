import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Membres() {
  return (
    <motion.section
      className="apro-membres"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.p className="apro-kicker" variants={fadeUp}>
        Notre structure
      </motion.p>
      <motion.h3 variants={fadeUp}>Notre équipe.</motion.h3>
      <motion.p className="apro-membres-sub" variants={fadeUp}>
        Les femmes et les hommes qui portent le projet SPT2A au quotidien.
      </motion.p>
    </motion.section>
  );
}

