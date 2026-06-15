import { motion } from "framer-motion";
import { MapPin, Navigation, Trees, CalendarCheck } from "lucide-react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

/* ====== Localisation de la ferme ======
   Remplacez ces deux valeurs par les coordonnées GPS exactes :
   la carte se recentrera automatiquement dessus, et le bouton
   « Itinéraire » y guidera les visiteurs. */
const LATITUDE = 5.9333; // ← latitude exacte ici (Agboville par défaut)
const LONGITUDE = -4.2167; // ← longitude exacte ici
const ZOOM = 14;
/* ====================================== */

const itineraire = `https://www.google.com/maps/dir/?api=1&destination=${LATITUDE},${LONGITUDE}`;

// Pin personnalisé SPT2A : étiquette verte + halo pulsant (stylé dans Contact.css)
const pinSPT2A = divIcon({
  className: "spt2a-pin-wrapper",
  html: `
    <div class="spt2a-pin">SPT2A</div>
    <div class="spt2a-pin-dot"></div>
    <div class="spt2a-pin-pulse"></div>
  `,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
});

export default function Carte() {
  return (
    <section className="contact-carte">
      <motion.div
        className="contact-carte-map"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <MapContainer
          center={[LATITUDE, LONGITUDE]}
          zoom={ZOOM}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Tuiles CARTO Positron : style minimaliste gris clair, sans clé API */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <Marker position={[LATITUDE, LONGITUDE]} icon={pinSPT2A} />
          {/* Halo vert : l'étendue approximative du domaine */}
          <Circle
            center={[LATITUDE, LONGITUDE]}
            radius={320}
            pathOptions={{
              color: "#157a38",
              weight: 1.5,
              opacity: 0.6,
              fillColor: "#1ea94c",
              fillOpacity: 0.12,
            }}
          />
        </MapContainer>
      </motion.div>

      {/* Carte d'information flottante */}
      <motion.div
        className="contact-carte-card"
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.3 }}
      >
        <motion.span
          className="contact-carte-pin"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin size={18} strokeWidth={2.4} />
        </motion.span>

        <h3>Notre ferme — SPT2A</h3>
        <p className="contact-carte-lieu">Agboville, Côte d'Ivoire</p>

        <ul>
          <li>
            <Trees size={15} strokeWidth={2.2} />
            +10 hectares de cultures et d'élevage
          </li>
          <li>
            <CalendarCheck size={15} strokeWidth={2.2} />
            Visites sur rendez-vous
          </li>
        </ul>

        <motion.a
          href={itineraire}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-carte-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <Navigation size={14} strokeWidth={2.4} />
          Itinéraire
        </motion.a>
      </motion.div>
    </section>
  );
}
