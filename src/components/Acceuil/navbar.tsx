import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Layers, Heart, Plus, ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/activites", label: "Nos activités", icon: Layers },
  { href: "/sante", label: "Santé & Nutrition", icon: Heart },
  { href: "/apropos", label: "A propos", icon: Plus },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
    >
      <motion.span
        className="nav-logo"
        whileHover={{ rotate: -8, scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to="/">
          <img src="/logo.jpeg" alt="Logo SPT2A" />
        </Link>
      </motion.span>

      {/* Bouton hamburger : visible uniquement sur petits écrans */}
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
      </button>

      <motion.nav
        className={`nav-pill${open ? " is-open" : ""}`}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.3 },
          },
        }}
      >
        {links.map(({ href, label, icon: Icon }) => (
          <motion.span
            key={href}
            variants={{
              hidden: { opacity: 0, y: -12 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              to={href}
              className={`nav-link${pathname === href ? " is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {pathname === href && (
                <motion.span
                  className="nav-link-bg"
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon size={17} strokeWidth={2.2} />
              <span>{label}</span>
            </Link>
          </motion.span>
        ))}

        {/* Bouton Contact intégré au menu déroulant (mobile) */}
        <Link
          to="/contact"
          className="nav-contact nav-contact--mobile"
          onClick={() => setOpen(false)}
        >
          Contact
          <span className="nav-contact-icon">
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </span>
        </Link>
      </motion.nav>

      <motion.span
        className="nav-contact--desktop"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 16 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <Link to="/contact" className="nav-contact">
          Contact
          <span className="nav-contact-icon">
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </span>
        </Link>
      </motion.span>
    </motion.header>
  );
}
