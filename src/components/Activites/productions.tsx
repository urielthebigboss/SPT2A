import { motion, type Variants } from "framer-motion";
import Bandeau, { type Produit } from "./bandeau";

import orange from "../../assets/images/Activite/orange.jpg";
import tamates from "../../assets/images/Activite/tomate.jpg";
import avocats from "../../assets/images/Activite/avocat.jpg";
import mais from "../../assets/images/Activite/mais.jpg";
import banane from "../../assets/images/Activite/banane2.jpg";
import ananas from "../../assets/images/Activite/ananas.jpg";
import arachide from "../../assets/images/Activite/arachide.jpg";
import banane2 from "../../assets/images/Activite/banane1.jpg";
import Citron from "../../assets/images/Activite/citron.jpg";
import Goyave from "../../assets/images/Activite/goyave.jpg";
import Papaya from "../../assets/images/Activite/papaya.jpg";
import Raisin from "../../assets/images/Activite/raisin.jpg";
import poire from "../../assets/images/Activite/goyave (2).jpg";
import Carottes from "../../assets/images/Activite/carotte.jpg";
import Gingembre from "../../assets/images/Activite/ginger.jpg";
import igname from "../../assets/images/Activite/igname.jpg";
import manioc from "../../assets/images/Activite/manioc.jpg";
import aubergines from "../../assets/images/Activite/obergine.jpg";
import Oignon from "../../assets/images/Activite/oignon.jpg";
import piments from "../../assets/images/Activite/piment.jpg";
import Pommedeterre from "../../assets/images/Activite/pometerre.jpg";
import vaches from "../../assets/images/Activite/vache.jpg";
import moutons from "../../assets/images/Activite/Monton.jpg";
import chevres from "../../assets/images/Activite/Chèvres.jpg";
import porc from "../../assets/images/Activite/porc.jpg";
import Dindons from "../../assets/images/Activite/dindon.jpg";
import paon from "../../assets/images/Activite/paon.jpg";
import Pintades from "../../assets/images/Activite/Pintade.jpg";
import Canards from "../../assets/images/Activite/canard.jpg";
import Perdrix from "../../assets/images/Activite/pedrix.jpg";
import Pigeons from "../../assets/images/Activite/pigeon.jpg";
import Poulets from "../../assets/images/Activite/poule.jpg";
import Poissons from "../../assets/images/Activite/poisson.jpg";
import Crevettes from "../../assets/images/Activite/crevette.jpg";
import Lapins from "../../assets/images/Activite/lapin.jpg";
import Aulacodes from "../../assets/images/Activite/Agouti.jpg";
import chien from "../../assets/images/Activite/chien.jpg";
import Escagot from "../../assets/images/Activite/escargot.jpg";
import Insectes from "../../assets/images/Activite/insecte.jpg";

// L'Agriculture : deux banderoles qui tournent en sens opposés
const agricultureLigne1: Produit[] = [
  { name: "Oranges", src: orange },
  { name: "Tomates", src: tamates },
  { name: "Avocats", src: avocats },
  { name: "Maïs", src: mais },
  {
    name: "Bananes plantain",
    src: banane,
  },
  { name: "Ananas", src: ananas },
  { name: "Arachide", src: arachide },
  { name: "Bananes douces", src: banane2 },
  { name: "Citron", src: Citron },
  { name: "Goyave", src: Goyave },
  { name: "Papaye", src: Papaya },
  { name: "Raisin", src: Raisin },
  { name: "Poire", src: poire },
];

const agricultureLigne2: Produit[] = [
  { name: "Manioc", src: manioc },
  { name: "Piments", src: piments },
  { name: "Igname", src: igname },
  { name: "Carottes", src: Carottes },
  { name: "Gingembre", src: Gingembre },
  { name: "Aubergine", src: aubergines },
  { name: "Oignon", src: Oignon },
  { name: "Pomme de terre", src: Pommedeterre },
];

// L'Élevage : une banderole par catégorie
const elevages = [
  {
    label: "Pastoral",
    color: "#1ea94c",
    reverse: false,
    items: [
      { name: "Vaches", src: vaches },
      { name: "Moutons", src: moutons },
      { name: "Chèvres", src: chevres },
      { name: "Porc", src: porc },
    ],
  },
  {
    label: "Aviculture",
    color: "#f5a623",
    reverse: true,
    items: [
      { name: "Dindons", src: Dindons },
      {
        name: "Poulets",
        src: Poulets,
      },
      { name: "Pintades", src: Pintades },
      { name: "Canards", src: Canards },
      { name: "Paons", src: paon },
      { name: "Perdrix", src: Perdrix },
      { name: "Pigeons", src: Pigeons },
    ],
  },
  {
    label: "Aquaculture",
    color: "#2563eb",
    reverse: false,
    items: [
      { name: "Poissons", src: Poissons },
      { name: "Crevettes", src: Crevettes },
    ],
  },
  {
    label: "Cuniculture & Aulacodiculture",
    color: "#8b5cf6",
    reverse: true,
    items: [
      { name: "Lapins", src: Lapins },
      {
        name: "Aulacodes",
        src: Aulacodes,
      },
    ],
  },

  {
    label: "Caniculture",
    color: "#000000",
    reverse: true,
    items: [{ name: "Chien de toutes races", src: chien }],
  },
  {
    label: "Héliciculture",
    color: "#00da66",
    reverse: true,
    items: [{ name: "Escagot", src: Escagot }],
  },
  {
    label: " Entomoculture",
    color: "#6449015a",
    reverse: true,
    items: [{ name: "Insectes", src: Insectes }],
  },
];

/* ════════════════ fin du template ════════════════ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Etiquette({ label, color }: { label: string; color: string }) {
  return (
    <motion.span
      className="acti-etiquette"
      style={{ background: color }}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ type: "spring", stiffness: 150, damping: 18 }}
    >
      {label}
    </motion.span>
  );
}

export default function Productions() {
  return (
    <section className="acti-productions">
      <motion.div
        className="acti-productions-head"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2 variants={fadeUp}>
          Ce que nous produisons
          <br />
          chaque jour
        </motion.h2>
        <motion.p variants={fadeUp}>
          Une diversité qui éblouit : fruits, légumes, volailles, poissons…
          Parcourez nos productions, elles défilent comme au marché.
        </motion.p>
      </motion.div>

      {/* ===== L'Agriculture : deux lignes en sens opposés ===== */}
      <div className="acti-categorie">
        <Etiquette label="L'Agriculture" color="var(--green)" />
        <Bandeau items={agricultureLigne1} speed={32} />
        <Bandeau items={agricultureLigne2} speed={36} reverse />
      </div>

      {/* ===== L'Élevage : une banderole par catégorie ===== */}
      <div className="acti-categorie">
        <Etiquette label="L'Élevage" color="#f57c1f" />
        {elevages.map(({ label, color, reverse, items }) => (
          <div key={label} className="acti-souscategorie">
            <motion.span
              className="acti-etiquette is-small"
              style={{ background: color }}
              initial={{ opacity: 0, x: reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              {label}
            </motion.span>
            <Bandeau items={items} speed={30} reverse={reverse} />
          </div>
        ))}
      </div>
    </section>
  );
}
