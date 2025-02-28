/**
 * Formate un nombre avec séparateur de milliers
 * @param {Number} number - Nombre à formater
 * @param {String} locale - Locale pour le formatage (défaut: 'fr-FR')
 * @returns {String} - Nombre formaté
 */
export function formatNumber(number, locale = "fr-FR") {
  return new Intl.NumberFormat(locale).format(number);
}

/**
 * Tronque un texte à une longueur maximale
 * @param {String} text - Texte à tronquer
 * @param {Number} maxLength - Longueur maximale (défaut: 100)
 * @returns {String} - Texte tronqué
 */
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

/**
 * Génère un identifiant unique
 * @returns {String} - Identifiant unique
 */
export function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * Vérifie si l'appareil est mobile
 * @returns {Boolean} - True si l'appareil est mobile
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Détermine si l'utilisateur préfère le thème sombre
 * @returns {Boolean} - True si l'utilisateur préfère le thème sombre
 */
export function prefersDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

/**
 * Formate une date en format lisible
 * @param {String|Date} date - Date à formater
 * @returns {String} - Date formatée
 */
export function formatDate(date) {
  if (!date) return "Date non disponible";

  try {
    const dateObj = new Date(date);

    // Vérifier si la date est valide
    if (isNaN(dateObj.getTime())) {
      return "Date non disponible";
    }

    // Options de formatage pour la date
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return dateObj.toLocaleDateString("fr-FR", options);
  } catch (error) {
    console.error("Erreur lors du formatage de la date:", error);
    return "Date non disponible";
  }
}
