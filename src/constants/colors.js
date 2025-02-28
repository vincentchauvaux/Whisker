/**
 * Constantes de couleurs pour l'application Whisker
 * Ce fichier centralise toutes les couleurs utilisées dans l'application
 * pour assurer une cohérence visuelle et faciliter la maintenance.
 */

// Couleurs pour les statuts des animaux
export const STATUS_COLORS = {
  LOST: {
    bg: "bg-red-100",
    text: "text-red-800",
    bgHex: "#fee2e2", // bg-red-100
    textHex: "#991b1b", // text-red-800
    mapMarker: "#ef4444", // red-500
    bgLight: "bg-red-50",
    textLight: "text-red-600",
  },
  FOUND: {
    bg: "bg-green-100",
    text: "text-green-800",
    bgHex: "#dcfce7", // bg-green-100
    textHex: "#166534", // text-green-800
    mapMarker: "#22c55e", // green-500
    bgLight: "bg-green-50",
    textLight: "text-green-600",
  },
};

// Couleurs pour les tags des animaux
export const TAG_COLORS = {
  // Races
  RACE: {
    europeen: "bg-blue-100 text-blue-800",
    siamois: "bg-purple-100 text-purple-800",
    bengal: "bg-amber-100 text-amber-800",
    persan: "bg-pink-100 text-pink-800",
    chartreux: "bg-blue-200 text-blue-800",
  },
  // Couleurs
  COULEUR: {
    noir: "bg-gray-800 text-white",
    blanc: "bg-gray-100 text-gray-800 border border-gray-300",
    roux: "bg-orange-100 text-orange-800",
    orange: "bg-orange-100 text-orange-800",
    ginger: "bg-orange-100 text-orange-800",
    gris: "bg-slate-200 text-slate-800",
    gray: "bg-slate-200 text-slate-800",
    tigre: "bg-amber-50 text-amber-800",
    tigré: "bg-amber-50 text-amber-800",
    tabby: "bg-amber-50 text-amber-800",
    tachete: "bg-lime-100 text-lime-800",
    spotted: "bg-lime-100 text-lime-800",
    bicolore: "bg-gray-200 text-gray-800",
    tricolore: "bg-orange-50 text-orange-800",
    "écaille de tortue": "bg-orange-50 text-orange-800",
    "noir et blanc": "bg-gray-700 text-white",
    "roux et blanc": "bg-orange-100 text-orange-800",
    "gris et blanc": "bg-slate-200 text-slate-800",
  },
  // Âge
  AGE: {
    chaton: "bg-pink-100 text-pink-800",
    kitten: "bg-pink-100 text-pink-800",
    adulte: "bg-teal-100 text-teal-800",
    adult: "bg-teal-100 text-teal-800",
    senior: "bg-violet-100 text-violet-800",
  },
  // Attributs spécifiques
  ATTRIBUTS: {
    "yeux bleus": "bg-sky-200 text-sky-800",
    "collier rouge": "bg-red-100 text-red-800",
    "collier bleu": "bg-blue-100 text-blue-800",
    "collier avec médaille": "bg-yellow-100 text-yellow-800",
    "puce électronique": "bg-indigo-100 text-indigo-800",
    "tatouage à l'oreille": "bg-purple-100 text-purple-800",
    "queue coupée": "bg-rose-100 text-rose-800",
    "oreille coupée": "bg-rose-100 text-rose-800",
    "oreille entaillée": "bg-rose-100 text-rose-800",
    cicatrice: "bg-rose-100 text-rose-800",
    boiterie: "bg-amber-100 text-amber-800",
    "tache blanche": "bg-gray-100 text-gray-800 border border-gray-300",
    "tache noire": "bg-gray-800 text-white",
    "yeux vairons": "bg-sky-200 text-sky-800",
    "poil long": "bg-amber-50 text-amber-800",
    "poil court": "bg-amber-50 text-amber-800",
    "pelage tacheté": "bg-lime-100 text-lime-800",
    "pelage rayé": "bg-amber-50 text-amber-800",
    "pelage uni": "bg-emerald-100 text-emerald-800",
    // Longueurs de poils
    Court: "bg-amber-50 text-amber-800",
    "Mi-long": "bg-amber-100 text-amber-800",
    Long: "bg-amber-200 text-amber-800",
    "Sans poils": "bg-gray-200 text-gray-800",
  },
  // Valeur par défaut
  DEFAULT: "bg-emerald-100 text-emerald-800",
};

// Couleurs pour les genres des animaux
export const GENDER_COLORS = {
  MALE: {
    bg: "bg-blue-600",
    text: "text-white",
    symbol: "♂",
    label: "Mâle",
  },
  FEMALE: {
    bg: "bg-pink-600",
    text: "text-white",
    symbol: "♀",
    label: "Femelle",
  },
  UNKNOWN: {
    bg: "bg-gray-500",
    text: "text-white",
    symbol: "?",
    label: "Inconnu",
  },
};

// Classes communes pour les cartes
export const CARD_CLASSES = {
  container:
    "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-transparent",
  header: "flex justify-between items-start mb-4",
  title: "text-xl font-serif text-gray-900",
  badge: {
    base: "px-3 py-1 rounded-full text-sm font-sans",
    lost: STATUS_COLORS.LOST.bg + " " + STATUS_COLORS.LOST.text,
    found: STATUS_COLORS.FOUND.bg + " " + STATUS_COLORS.FOUND.text,
  },
  infoItem: "text-sm font-sans text-gray-600",
  infoLabel: "font-medium text-lg",
  description: "text-sm font-sans text-gray-700 mb-4 line-clamp-2",
  tag: "px-2 py-1 rounded-full text-xs font-sans",
  button:
    "mt-4 block w-full bg-secondary/30 text-gray-900 py-2 px-4 rounded-full font-sans hover:bg-secondary/40 transition-colors duration-300 text-center",
};

/**
 * Fonction pour obtenir la couleur de fond en fonction de la couleur du chat
 * @param {string} color - La couleur du chat
 * @returns {string} - La valeur CSS pour le fond
 */
export const getColorBackground = (color) => {
  if (!color) return "#e2e8f0"; // Couleur par défaut (gris clair)

  const colorLower = color.toLowerCase();

  // Couleurs combinées
  if (colorLower.includes("bicolore") || colorLower.includes("bi-colore")) {
    return "linear-gradient(to right, #1f2937 50%, #f9fafb 50%)";
  } else if (
    colorLower.includes("tricolore") ||
    colorLower.includes("tri-colore") ||
    colorLower.includes("écaille")
  ) {
    return "linear-gradient(to right, #1f2937 33%, #f97316 33%, #f97316 66%, #f9fafb 66%)";
  } else if (
    colorLower.includes("roux et blanc") ||
    colorLower.includes("orange et blanc")
  ) {
    return "linear-gradient(to right, #f97316 50%, #f9fafb 50%)";
  } else if (colorLower.includes("noir et blanc")) {
    return "linear-gradient(to right, #1f2937 50%, #f9fafb 50%)";
  } else if (colorLower.includes("gris et blanc")) {
    return "linear-gradient(to right, #94a3b8 50%, #f9fafb 50%)";
  } else if (colorLower.includes("tigré") || colorLower.includes("tabby")) {
    return 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="%23fbbf24" /><path d="M0,0 L10,10 M5,0 L10,5 M0,5 L5,10" stroke="%23b45309" stroke-width="1"/></svg>\')';
  }

  // Couleurs simples
  if (
    colorLower.includes("roux") ||
    colorLower.includes("orange") ||
    colorLower.includes("ginger")
  ) {
    return "#f97316"; // Orange
  } else if (colorLower.includes("noir") || colorLower.includes("black")) {
    return "#1f2937"; // Noir
  } else if (colorLower.includes("blanc") || colorLower.includes("white")) {
    return "#f9fafb"; // Blanc
  } else if (colorLower.includes("gris") || colorLower.includes("gray")) {
    return "#94a3b8"; // Gris
  } else if (colorLower.includes("marron") || colorLower.includes("brown")) {
    return "#92400e"; // Marron
  }

  // Couleur par défaut si aucune correspondance
  return "#e2e8f0"; // Gris clair
};

/**
 * Fonction pour attribuer une couleur à chaque tag
 * @param {string} tag - Le tag à analyser
 * @returns {string} - Les classes CSS pour le tag
 */
export const getTagColorClass = (tag) => {
  if (!tag) return TAG_COLORS.DEFAULT;

  const tagLower = tag.toLowerCase();

  // Vérifier les attributs spécifiques (prioritaires)
  for (const [key, value] of Object.entries(TAG_COLORS.ATTRIBUTS)) {
    if (tagLower === key) return value;
  }

  // Vérifier les races
  for (const [key, value] of Object.entries(TAG_COLORS.RACE)) {
    if (tagLower.includes(key)) return value;
  }

  // Vérifier les couleurs
  for (const [key, value] of Object.entries(TAG_COLORS.COULEUR)) {
    if (tagLower.includes(key)) return value;
  }

  // Vérifier l'âge
  for (const [key, value] of Object.entries(TAG_COLORS.AGE)) {
    if (tagLower.includes(key)) return value;
  }

  // Couleur par défaut
  return TAG_COLORS.DEFAULT;
};
