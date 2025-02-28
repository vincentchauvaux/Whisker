import { ref, onMounted, onUnmounted } from "vue";

/**
 * Hook pour gérer l'animation de défilement automatique avec réactivité au scroll
 * @param {Object} options - Options de configuration
 * @param {Number} options.scrollSpeed - Vitesse de défilement automatique (défaut: 0.3)
 * @param {Number} options.maxOffset - Valeur maximale de l'offset avant réinitialisation (défaut: 200)
 * @param {Number} options.scrollFactor - Facteur de multiplication pour l'effet de scroll (défaut: 0.2)
 * @returns {Object} - Valeurs réactives et méthodes pour l'animation
 */
export function useScrollAnimation(options = {}) {
  const { scrollSpeed = 0.3, maxOffset = 200, scrollFactor = 0.2 } = options;

  const scrollY = ref(0);
  const scrollOffset = ref(0);
  let animationId = null;

  const handleScroll = () => {
    scrollY.value = window.scrollY;
  };

  const animateScroll = () => {
    // Animation douce automatique
    scrollOffset.value = (scrollOffset.value + scrollSpeed) % maxOffset;
    animationId = requestAnimationFrame(animateScroll);
  };

  const getTransformStyle = () => {
    return {
      transform: `translateY(${
        Math.max(-scrollY.value, -400) * scrollFactor - scrollOffset.value
      }px)`,
    };
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    animateScroll(); // Démarrer l'animation automatique
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });

  return {
    scrollY,
    scrollOffset,
    getTransformStyle,
  };
}

/**
 * Hook pour créer des animations de type "blob" (formes organiques)
 * @returns {Object} - Classes CSS pour les animations blob
 */
export function useBlobAnimation() {
  return {
    blobClasses: {
      base: "animate-blob",
      delay2s: "animation-delay-2000",
      delay4s: "animation-delay-4000",
    },
  };
}
