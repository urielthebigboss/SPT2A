import { motion } from "framer-motion";
import Navbar from "../components/Acceuil/navbar";
import Footer from "../components/Footer/Footer";
import { useSeo } from "../seo/useSeo";
import "./Confidentialite.css";

export default function Confidentialite() {
  useSeo({
    title: "Politique de confidentialité | SPT2A",
    description:
      "Politique de confidentialité de SPT2A — Société de Production et de Transformation Agricole et Animale : données collectées, usage et vos droits.",
    path: "/confidentialite",
  });

  return (
    <div className="conf-page">
      <div className="apro-nav">
        <Navbar />
      </div>

      <motion.main
        className="conf-main"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="conf-kicker">Mentions légales</p>
        <h1>Politique de confidentialité</h1>
        <p className="conf-updated">Dernière mise à jour : septembre 2025</p>

        <section className="conf-section">
          <h2>1. Qui sommes-nous ?</h2>
          <p>
            Ce site est édité par{" "}
            <strong>
              SPT2A — Société de Production et de Transformation Agricole et
              Animale
            </strong>
            , basée à Agboville, Côte d'Ivoire. Pour toute question relative à
            vos données, vous pouvez nous écrire à{" "}
            <a href="mailto:contact@spt2a.com">contact@spt2a.com</a>.
          </p>
        </section>

        <section className="conf-section">
          <h2>2. Données que nous collectons</h2>
          <p>
            Nous ne collectons que les informations que vous nous transmettez
            volontairement via notre formulaire de contact :
          </p>
          <ul>
            <li>votre nom ;</li>
            <li>votre adresse e-mail ;</li>
            <li>le contenu de votre message.</li>
          </ul>
          <p>
            Le site ne crée pas de compte utilisateur et ne demande aucune
            donnée bancaire ou de paiement.
          </p>
        </section>

        <section className="conf-section">
          <h2>3. Utilisation de vos données</h2>
          <p>
            Les informations transmises servent uniquement à répondre à votre
            demande (renseignement, partenariat, programme d'investissement,
            visite de la ferme). Elles ne sont ni vendues, ni louées, ni cédées
            à des tiers à des fins commerciales.
          </p>
        </section>

        <section className="conf-section">
          <h2>4. Services tiers</h2>
          <p>
            La page Contact affiche une carte de localisation fournie par un
            service cartographique tiers (OpenStreetMap via Leaflet). Le
            chargement de la carte peut impliquer une requête vers ce service.
            Le formulaire de contact ouvre votre logiciel de messagerie et
            n'enregistre aucune donnée sur un serveur.
          </p>
        </section>

        <section className="conf-section">
          <h2>5. Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de suivi publicitaire. Seules des
            données techniques strictement nécessaires au fonctionnement du site
            peuvent être stockées localement dans votre navigateur.
          </p>
        </section>

        <section className="conf-section">
          <h2>6. Vos droits</h2>
          <p>
            Vous pouvez à tout moment demander l'accès, la rectification ou la
            suppression des données que vous nous avez communiquées, en nous
            contactant à{" "}
            <a href="mailto:contact@spt2a.com">contact@spt2a.com</a>. Nous nous
            engageons à traiter votre demande dans les meilleurs délais.
          </p>
        </section>

        <section className="conf-section">
          <h2>7. Modifications</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour. La date de
            dernière mise à jour figure en haut de cette page.
          </p>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}
