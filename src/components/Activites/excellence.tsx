import { motion, type Variants } from "framer-motion";
import { Sprout, Factory, PackageCheck, ArrowRight } from "lucide-react";

const etapes = [
  {
    icon: Sprout,
    title: "Production",
    text: "Cultures maraîchères et élevages conduits sur nos propres terres.",
  },
  {
    icon: Factory,
    title: "Transformation",
    text: "Nos récoltes sont transformées sur place, dans notre usine.",
  },
  {
    icon: PackageCheck,
    title: "Conditionnement & distribution",
    text: "Emballé à la ferme, livré en circuit court à nos partenaires.",
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

export default function Excellence() {
  return (
    <motion.section
      className="acti-excellence"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.h2 variants={fadeUp}>
        L'excellence à chaque étape,
        <br />
        pour nourrir le monde
      </motion.h2>
      <motion.p className="acti-excellence-sub" variants={fadeUp}>
        Une seule et même maison maîtrise tout le parcours de vos aliments —
        c'est ce qui fait la différence dans votre assiette.
      </motion.p>

      <div className="acti-etapes">
        {etapes.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="acti-etape-wrap">
            <motion.article
              className="acti-etape"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.92 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 150, damping: 17 },
                },
              }}
              whileHover={{ y: -8 }}
            >
              <span className="acti-etape-num">{String(i + 1).padStart(2, "0")}</span>
              <motion.span
                className="acti-etape-icon"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </motion.span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>

            {i < etapes.length - 1 && (
              <motion.span
                className="acti-etape-arrow"
                aria-hidden
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={22} strokeWidth={2.4} />
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
