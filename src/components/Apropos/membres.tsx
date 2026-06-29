import { motion, type Variants } from "framer-motion";
//import { ArrowUpRight } from "lucide-react";
//import { SocialIcon } from "react-social-icons";
//import Uriel from "../../assets/images/propos/Uriel.png";

// ⚠️ Doit correspondre au domaine utilisé dans index.html et useSeo.ts
//const SITE = "https://www.spt2a.com";

/* ============================================================= *
 *  SOURCE UNIQUE des membres.                                   *
 *  Ajoute / modifie ici : la galerie ET les données SEO         *
 *  (JSON-LD plus bas) se mettent à jour automatiquement.        *
 *  - id : doit matcher les @id du graphe dans index.html        *
 *  - relation : lien dans l'entreprise familiale                *
 * ============================================================= */
{
  /*const membres = [
  {
    id: "person-uriel-jean-bedel-DAKAUD",
    //src: Uriel,
    name: "Uriel Jean Bedel DAKAUD",
    role: "DRH ",
    seconde_role: "Directeur de la Poduction Agricole et Animale",
    relation: "DRH & Directeur de la Poduction Agricole et Animale",
    link: "#portfolio",
    socials: [
      "https://www.linkedin.com/in//dakaud-uriel-jean-bedel-194788375/",
      "https://www.instagram.com/urielbeydel/",
      "https://www.tiktok.com/@urielbeydel",
    ],
  },
];*/
}
/* ========================================================= */

// Données structurées générées depuis la liste ci-dessus.
// Chaque membre est relié à l'entreprise SPT2A, avec sa photo (image SEO).
{
  /* const membersJsonLd = {
  "@context": "https://schema.org",
  "@graph": membres.map((m) => ({
    "@type": "Person",
    "@id": `${SITE}/#${m.id}`,
    name: m.name,
    image: typeof m.src === "string" ? m.src : `${SITE}${m.src}`,
    jobTitle: m.role,
    jobTitle2: m.seconde_role,
    memberOf: { "@id": `${SITE}/#organization` },
    sameAs: m.socials.filter((s) => !s.includes("À_REMPLIR")),
  })),
};*/
}

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
      {/* Données structurées (lues par Google et les IA)
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membersJsonLd) }}
      />*/}

      <motion.p className="apro-kicker" variants={fadeUp}>
        Notre structure
      </motion.p>
      <motion.h3 variants={fadeUp}>Notre équipe</motion.h3>
      <motion.p className="apro-membres-sub" variants={fadeUp}>
        Les femmes et les hommes qui portent le projet SPT2A au quotidien.
      </motion.p>

      {/* <div className="apro-membres-cards">
        {membres.map(({ src, name, role, seconde_role, link, socials }, i) => (
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
                alt={`${name}, ${role} chez SPT2A — Société de Production et de Transformation Agricole`}
                loading="lazy"
                variants={{ zoom: { scale: 1.06 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.figure>
            <div className="apro-membre-infos">
              <h4>{name}</h4>
              <p>{role}</p>
              <p>{seconde_role}</p>

              <div className="apro-membre-socials">
                {socials
                  .filter((url) => !url.includes("À_REMPLIR"))
                  .map((url) => (
                    <SocialIcon
                      key={url}
                      url={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 32, width: 32 }}
                      aria-label={`${name} sur ${new URL(url).hostname}`}
                    />
                  ))}
              </div>
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
      </div>*/}
    </motion.section>
  );
}
