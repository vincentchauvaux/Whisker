import { ref } from "vue";
import { useRouter } from "vue-router";

/**
 * Hook pour gérer la navigation vers les sections ou pages
 * @returns {Object} - Méthodes pour la navigation
 */
export function useNavigation() {
  const router = useRouter();

  /**
   * Navigue vers une section spécifique avec défilement doux
   * @param {String} sectionId - ID de la section cible
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Navigue vers une page spécifique
   * @param {String} path - Chemin de la page
   */
  const navigateTo = (path) => {
    router.push(path);
  };

  return {
    scrollToSection,
    navigateTo,
  };
}

/**
 * Hook pour gérer les interactions avec les boutons de téléchargement
 * @returns {Object} - Méthodes et états pour les boutons de téléchargement
 */
export function useAppDownload() {
  const isDownloading = ref(false);

  /**
   * Gère le clic sur un bouton de téléchargement d'application
   * @param {String} platform - Plateforme (ios, android)
   */
  const handleDownload = (platform) => {
    isDownloading.value = true;

    // Simulation d'un délai de téléchargement
    setTimeout(() => {
      isDownloading.value = false;

      // Redirection vers les stores appropriés
      if (platform === "ios") {
        window.open("https://apps.apple.com/app/animal-search", "_blank");
      } else if (platform === "android") {
        window.open(
          "https://play.google.com/store/apps/details?id=com.animalsearch",
          "_blank"
        );
      }
    }, 500);
  };

  return {
    isDownloading,
    handleDownload,
  };
}
