import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowUpRight, Sprout, Factory, BadgeCheck } from "lucide-react";
import Counter from "./counter";
import image2 from "../../assets/images/Sante&Nutrition/image2.png";
import image3 from "../../assets/images/Sante&Nutrition/image3.jpg";
import image4 from "../../assets/images/Sante&Nutrition/image4.jpg";

/* ====== Vos images locales : remplacez ces chemins ====== */
const basketImage = image2;
const cuisineImage = image3;
const plateauImage = image4;
/* ========================================================= */

const cards = [
  {
    icon: Sprout,
    title: "Production locale",
    text: "Cultivé sur nos terres, récolté à maturité.",
  },
  {
    icon: Factory,
    title: "Transformation maîtrisée",
    text: "Transformé dans notre usine, sans intermédiaire.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité contrôlée",
    text: "Contrôlé à chaque étape, du champ à l'assiette.",
  },
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
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Goodhealth() {
  const sectionRef = useRef<HTMLElement>(null);

  // Le hashtag vertical glisse doucement pendant le scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const hashtagY = useTransform(scrollYProgress, [0, 1], [-60, 120]);

  return (
    <section className="nutri-health" ref={sectionRef}>
      {/* #GOOD HEALTH vertical sur le bord droit */}
      <motion.p
        className="nutri-health-hashtag"
        style={{ y: hashtagY }}
        aria-hidden
      >
        #GOOD HEALTH
      </motion.p>

      {/* Tout en vert */}
      <motion.div
        className="nutri-vert"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
      >
        <motion.div className="nutri-vert-text" variants={fadeUp}>
          <h3>
            Tout en vert,
            <br />
            tout au naturel
          </h3>
          <p>
            Fruits et légumes cultivés sans excès d'intrants, récoltés à
            maturité et transformés sur place : nous préservons la valeur
            nutritionnelle de chaque produit.
          </p>
        </motion.div>
        <motion.img
          src={basketImage}
          alt="Panier de fruits frais"
          variants={{
            hidden: { opacity: 0, scale: 0.7, rotate: 8 },
            visible: {
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: { type: "spring", stiffness: 100, damping: 14 },
            },
          }}
        />
      </motion.div>

      {/* 3 cartes oranges */}
      <motion.div
        className="nutri-pillars"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={stagger}
      >
        {cards.map(({ icon: Icon, title, text }) => (
          <motion.article
            key={title}
            className="nutri-pillar"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 160, damping: 18 },
              },
            }}
            whileHover={{ y: -6, scale: 1.04 }}
          >
            <span className="nutri-pillar-icon">
              <Icon size={20} strokeWidth={2.2} />
            </span>
            <h4>{title}</h4>
            <p>{text}</p>
          </motion.article>
        ))}
      </motion.div>

      {/* Découvrez nos activités */}
      <motion.div
        className="nutri-discover"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={stagger}
      >
        <motion.div
          className="nutri-discover-image"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          whileHover="zoom"
        >
          <motion.img
            src={cuisineImage}
            alt="Préparation de plats sains avec nos produits"
            variants={{ zoom: { scale: 1.08 } }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <div className="nutri-discover-text">
          <motion.h3 variants={fadeUp}>
            Découvrez l'ensemble de nos activités
          </motion.h3>
          <motion.p variants={fadeUp}>
            De la culture maraîchère à la transformation agro-alimentaire, nos
            équipes veillent sur chaque étape : semis, récolte, conditionnement
            et distribution. Une chaîne courte et transparente qui garantit la
            fraîcheur, la traçabilité et le goût authentique de nos produits.
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.a
              href="#suivre"
              className="hero-cta"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
            >
              Nous suivre
              <motion.span
                className="hero-cta-icon"
                variants={{ hover: { rotate: 45, scale: 1.1 } }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bannière statistique */}
      <motion.div
        className="nutri-stat"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nutri-stat-text">
          <p className="nutri-stat-source">D'après les études</p>
          <p className="nutri-stat-lead">Manger sain tous les jours</p>
          <p className="nutri-stat-number">
            Réduit de <Counter to={70} suffix="%" />
          </p>
          <p className="nutri-stat-detail">
            le risque de maladies cardiovasculaires
            <br />
            et améliore la santé au quotidien
          </p>
        </div>
        <div className="nutri-stat-image">
          <img
            src={plateauImage}
            alt="Plateau d'aliments frais et équilibrés"
          />
        </div>
      </motion.div>
    </section>
  );
}
