import { motion } from "framer-motion";

export type Produit = {
  name: string;
  src: string; // chemin de votre image locale
};

type BandeauProps = {
  items: Produit[];
  /** true = défile vers la droite (sens inverse) */
  reverse?: boolean;
  /** durée d'un tour complet en secondes (plus petit = plus rapide) */
  speed?: number;
};

/**
 * Banderole infinie de produits : la liste est doublée et translatée de 50%
 * en boucle, ce qui donne un défilement sans couture dans les deux sens.
 */
export default function Bandeau({ items, reverse = false, speed = 30 }: BandeauProps) {
  const doubled = [...items, ...items];

  return (
    <div className="acti-bandeau">
      <motion.div
        className="acti-bandeau-track"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map(({ name, src }, i) => (
          <motion.figure
            key={`${name}-${i}`}
            className="acti-produit"
            whileHover={{ y: -8, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <img src={src} alt={name} loading="lazy" />
            <figcaption>{name}</figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}
