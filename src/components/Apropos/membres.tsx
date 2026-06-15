import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Uriel from "../../assets/images/propos/Uriel.png";

/* ====== Vos images locales : remplacez ces chemins ====== */
const membres = [
  {
    src: Uriel,
    name: "Uriel Jean Bedel DAKAUD",
    role: "Ingénieur IT",
    link: "#portfolio",
    instagram: "https://www.instagram.com/urielbedel/",
    tiktok: "https://www.tiktok.com/@urielbedel",
    linkedin: "https://www.linkedin.com/in/uriel-bedel-dakaud-1b0a4b1a6/",
    mail: "mailto:uriel.bedel.dakaud@example.com",
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
      <motion.h3 variants={fadeUp}>Nos membres</motion.h3>
      <motion.p className="apro-membres-sub" variants={fadeUp}>
        Les femmes et les hommes qui portent le projet SPT2A au quotidien.
      </motion.p>

      <div className="apro-membres-cards">
        {membres.map(({ src, name, role, link }, i) => (
          <motion.article
            key={i}
            className="apro-membre"
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <motion.figure whileHover="zoom">
              <motion.img
                src={src}
                alt={`Portrait de ${name}`}
                variants={{ zoom: { scale: 1.06 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.figure>
            <div className="apro-membre-infos">
              <h4>{name}</h4>
              <p>{role}</p>
              <motion.a
                href={link}
                whileHover={{ x: 4 }}
                className="apro-membre-link"
              >
                Portfolio
                <ArrowUpRight size={13} strokeWidth={2.4} />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
