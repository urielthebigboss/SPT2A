import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { SendHorizontal } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import img from "../../assets/images/contact/contactferme.jpg";
/* ====== Vos coordonnées et image locale : remplacez ====== */
const CONTACT_EMAIL = "contact@spt2a.com";

const fermeImage = img;

const socials = [
  `mailto:${CONTACT_EMAIL}`,
  "https://linkedin.com/company/spt2a-société-de-production-de-transformation-agricole-et-animale",
  "https://instagram.com/spt2a",
  "https://tiktok.com/@spt2a",
  "https://facebook.com/spt2a",
  "https://whatsapp.com/spt2a",
];
/* ========================================================== */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Formulaire() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Sans backend : ouvre le client mail avec le message pré-rempli
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact SPT2A — ${nom}`);
    const body = encodeURIComponent(`${message}\n\n— ${nom} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-form-section">
      <motion.div
        className="contact-form-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.div className="contact-form-title" variants={fadeUp}>
          <h2>
            Nous contacter pour
            <br />
            poursuivre votre voyage
          </h2>
          <motion.img
            src="/logo1.jpeg"
            alt="Logo SPT2A"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p className="contact-form-desc" variants={fadeUp}>
          Écrivez-nous par le canal de votre choix ou laissez-nous un message :
          nous revenons vers vous sous 48 heures. Commandes, partenariats,
          visites de la ferme — toutes vos questions sont les bienvenues.
        </motion.p>

        <motion.div className="contact-socials" variants={fadeUp}>
          {socials.map((url) => (
            <motion.span
              key={url}
              whileHover={{ scale: 1.18, y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <SocialIcon
                url={url}
                style={{ width: 40, height: 40 }}
                target="_blank"
                rel="noopener noreferrer"
              />
            </motion.span>
          ))}
        </motion.div>

        <motion.p className="contact-or" variants={fadeUp}>
          Ou
        </motion.p>

        <form onSubmit={handleSubmit}>
          <motion.input
            type="text"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            variants={fadeUp}
            whileFocus={{ scale: 1.015 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variants={fadeUp}
            whileFocus={{ scale: 1.015 }}
          />
          <motion.textarea
            placeholder="Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            variants={fadeUp}
            whileFocus={{ scale: 1.015 }}
          />
          <motion.div variants={fadeUp}>
            <motion.button
              type="submit"
              className="contact-send"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              Envoyer
              <motion.span
                className="contact-send-icon"
                variants={{ hover: { x: 5, rotate: -10 } }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
              >
                <SendHorizontal size={15} strokeWidth={2.4} />
              </motion.span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>

      <motion.div
        className="contact-form-image"
        initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
        whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={fermeImage}
          alt="Vue aérienne de la ferme SPT2A"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </section>
  );
}
