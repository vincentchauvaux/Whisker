import { ref, computed } from "vue";
import { formatDate } from "./utils";

/**
 * Hook pour gérer les données d'un animal trouvé
 * @param {Object} initialData - Données initiales de l'animal (optionnel)
 * @returns {Object} - Méthodes et états pour les données de l'animal
 */
export function useAnimalData(initialData = {}) {
  const animal = ref(initialData);

  /**
   * Formate la date de découverte de l'animal
   * @param {String|Date} date - Date à formater
   * @returns {String} - Date formatée ou message par défaut
   */
  const formatDiscoveryDate = (date) => {
    return formatDate(date);
  };

  /**
   * Met à jour les données de l'animal
   * @param {Object} newData - Nouvelles données
   */
  const updateAnimalData = (newData) => {
    animal.value = { ...animal.value, ...newData };
  };

  /**
   * Vérifie si l'animal a été trouvé (statut)
   * @returns {Boolean} - True si l'animal a été trouvé
   */
  const isFound = computed(() => {
    return animal.value.status === "found";
  });

  /**
   * Génère une description formatée de l'animal
   * @returns {String} - Description formatée
   */
  const formattedDescription = computed(() => {
    if (!animal.value.description) return "";

    // Assure que la description se termine par un point
    let desc = animal.value.description;
    if (!desc.endsWith(".")) {
      desc += ".";
    }
    return desc;
  });

  /**
   * Récupère les caractéristiques principales de l'animal
   * @returns {Object} - Caractéristiques principales
   */
  const mainCharacteristics = computed(() => {
    return {
      race: animal.value.race || "Non spécifiée",
      color: animal.value.color || "Non spécifiée",
      gender: animal.value.gender || "Non spécifié",
      location: animal.value.location || "Lieu inconnu",
      discoveryDate: formatDiscoveryDate(animal.value.discoveryDate),
    };
  });

  return {
    animal,
    updateAnimalData,
    isFound,
    formattedDescription,
    mainCharacteristics,
    formatDiscoveryDate,
  };
}

/**
 * Hook pour gérer une liste d'animaux trouvés
 * @returns {Object} - Méthodes et états pour la liste d'animaux
 */
export function useAnimalsList() {
  const animals = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  /**
   * Charge la liste des animaux depuis une API
   * @param {Object} filters - Filtres à appliquer (optionnel)
   */
  const fetchAnimals = async (filters = {}) => {
    isLoading.value = true;
    error.value = null;

    try {
      // Simulation d'un appel API
      // À remplacer par un vrai appel API
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Données fictives pour la démonstration
      const mockData = [
        {
          id: "found1",
          name: "Picko",
          race: "Européen",
          color: "noir et blanc",
          gender: "Femelle",
          location: "Parc du Cinquantenaire, Bruxelles",
          discoveryDate: "2023-02-27T14:30:00",
          description:
            "Chat noir et blanc trouvé errant. Très amical et en bonne santé. Porte un collier vert sans médaille",
          status: "found",
          image: "/img/cat-found.jpg",
        },
        {
          id: "lost1",
          name: "Rex",
          race: "Berger Allemand",
          color: "noir et feu",
          gender: "Mâle",
          location: "Avenue Louise, Bruxelles",
          discoveryDate: "2023-03-15T09:45:00",
          description:
            "Chien perdu lors d'une promenade. Porte un collier rouge avec une médaille d'identification.",
          status: "lost",
          image: "/img/dog-lost.jpg",
        },
        {
          id: "found2",
          name: "Minou",
          race: "Siamois",
          color: "beige et marron",
          gender: "Mâle",
          location: "Place Flagey, Bruxelles",
          discoveryDate: "2023-04-10T18:20:00",
          description:
            "Chat siamois trouvé près d'un café. Très affectueux et semble bien nourri. Pas de collier.",
          status: "found",
          image: "/img/cat-siamese.jpg",
        },
      ];

      // Filtrage des données si nécessaire
      let filteredData = [...mockData];
      if (filters.status) {
        filteredData = filteredData.filter(
          (animal) => animal.status === filters.status
        );
      }

      if (filters.species) {
        filteredData = filteredData.filter((animal) => {
          if (filters.species === "cat")
            return (
              animal.race.toLowerCase().includes("chat") ||
              animal.race.toLowerCase().includes("européen") ||
              animal.race.toLowerCase().includes("siamois")
            );
          if (filters.species === "dog")
            return (
              animal.race.toLowerCase().includes("chien") ||
              animal.race.toLowerCase().includes("berger")
            );
          return filters.species === "other";
        });
      }

      if (filters.location) {
        const searchTerm = filters.location.toLowerCase();
        filteredData = filteredData.filter((animal) =>
          animal.location.toLowerCase().includes(searchTerm)
        );
      }

      animals.value = filteredData;
    } catch (e) {
      error.value = "Erreur lors du chargement des données";
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * Récupère un animal par son ID
   * @param {String} id - ID de l'animal
   * @returns {Object|null} - Données de l'animal ou null
   */
  const getAnimalById = (id) => {
    return animals.value.find((animal) => animal.id === id) || null;
  };

  return {
    animals,
    isLoading,
    error,
    fetchAnimals,
    getAnimalById,
  };
}
