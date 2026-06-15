import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Intro() {
  return (
    <motion.section
      className="contact-intro"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } } }}
    >
      <motion.h1 variants={fadeUp}>
        Une question, un partenariat,
        <br />
        une visite ? Parlons-en.
      </motion.h1>
      <motion.p variants={fadeUp}>
        Notre équipe vous répond rapidement — que vous soyez client,
        distributeur ou simplement curieux de découvrir la ferme.
      </motion.p>
    </motion.section>
  );
}
