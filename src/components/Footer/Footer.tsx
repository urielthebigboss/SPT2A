import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

import champ from "../../assets/images/champ.jpg";
import farmer from "../../assets/images/farmer.jpg";
import ferme from "../../assets/images/ferme.jpg";
import usine from "../../assets/images/usine.jpg";
import sport from "../../assets/images/sport.jpg";

/* ====== Vos images locales : remplacez ces chemins ====== */
const campus = [
  { label: "Nos Champs", src: champ },
  { label: "Notre Ferme", src: ferme },
  { label: "Usine", src: usine },
  { label: "Salle de Sport", src: sport },
];
const followImage = farmer; // Image pour la section "Follow for more"
/* ========================================================= */

const socials = [
  "https://instagram.com/spt2a",
  "https://wa.me/2250000000000",
  "https://linkedin.com/company/spt2a",
  "https://tiktok.com/@spt2a",
  "mailto:contact@spt2a.com",
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Activités", href: "/activites" },
  { label: "Santé & Nutrition", href: "/sante" },
  { label: "Nous Contacter", href: "/contact" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Footer() {
  const followRef = useRef<HTMLDivElement>(null);

  // Parallax : l'image de fond glisse doucement pendant le scroll
  const { scrollYProgress } = useScroll({
    target: followRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <footer className="footer">
      {/* ====== Haut : logo + réseaux / navigation ====== */}
      <motion.div
        className="footer-top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <div className="footer-brand">
          <motion.a
            href="/"
            className="footer-logo"
            variants={fadeUp}
            whileHover={{ rotate: -8, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.jpeg" alt="Logo SPT2A" />
          </motion.a>

          <motion.div className="footer-socials" variants={stagger}>
            {socials.map((url) => (
              <motion.span
                key={url}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 18 },
                  },
                }}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <SocialIcon
                  url={url}
                  style={{ width: 34, height: 34 }}
                  bgColor="#fff"
                  fgColor="#0b0b0c"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </motion.span>
            ))}
          </motion.div>
        </div>

        <nav className="footer-nav">
          <motion.p className="footer-label" variants={fadeUp}>
            Navigation
          </motion.p>
          <motion.ul variants={stagger}>
            {navLinks.map(({ label, href }) => (
              <motion.li key={label} variants={fadeUp}>
                <motion.a
                  href={href}
                  className="footer-link"
                  whileHover="hover"
                >
                  {label}
                  <motion.span
                    className="footer-link-underline"
                    variants={{ hover: { scaleX: 1 } }}
                    initial={{ scaleX: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </motion.div>

      <motion.hr
        className="footer-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ====== Visiter le campus ====== */}
      <motion.section
        className="footer-campus"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <motion.p className="footer-label" variants={fadeUp}>
          Visiter le campus
        </motion.p>

        <div className="footer-cards">
          {campus.map(({ label, src }) => (
            <motion.figure
              key={label}
              className="footer-card"
              variants={fadeUp}
              whileHover="hover"
            >
              <motion.img
                src={src}
                alt={label}
                variants={{ hover: { scale: 1.1 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <figcaption>{label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      {/* ====== Follow for more + wordmark géant ====== */}
      <div className="footer-follow" ref={followRef} style={{ height: 700 }}>
        <motion.p
          className="footer-follow-title"
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Follow for more
        </motion.p>

        <motion.img
          className="footer-follow-image"
          src={followImage}
          alt="Travail dans les champs SPT2A"
          style={{ y: parallaxY }}
        />
        <div className="footer-follow-shade" />

        <div className="footer-mark">
          <motion.h2
            aria-label="SPT2A"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {"SPT2A".split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: "110%" },
                  visible: {
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            La société de Production
            <br />
            et de Transformation
            <br />
            agricole.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
