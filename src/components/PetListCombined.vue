<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { petService } from "../services/petService";
import {
  STATUS_COLORS,
  TAG_COLORS,
  CARD_CLASSES,
  getTagColorClass,
  getColorBackground,
} from "../constants/colors.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const router = useRouter();
const route = useRoute();

// État local
const pets = ref([]);
const filteredPets = ref([]);
const loading = ref(true);
const error = ref(null);
const filterType = ref("all"); // 'all', 'recent'
const statusFilter = ref("all"); // 'all', 'lost', 'found'
const searchQuery = ref("");
const sortBy = ref("date_desc"); // 'date_desc', 'date_asc', 'age', 'age_desc'

// Initialiser le filtre à partir des paramètres d'URL
onMounted(() => {
  // Vérifier si un filtre est fourni dans l'URL
  if (route.query.filter && ["lost", "found"].includes(route.query.filter)) {
    statusFilter.value = route.query.filter;
  }
  loadAllPets();
});

// Mettre à jour l'URL lorsque le statut change
watch(statusFilter, (newValue) => {
  if (newValue !== "all") {
    router.replace({ query: { ...route.query, filter: newValue } });
  } else {
    // Supprimer le paramètre filter de l'URL
    const { filter, ...restQuery } = route.query;
    router.replace({ query: restQuery });
  }

  // Appliquer le filtre immédiatement
  applyFilters();
});

// Fonction pour charger tous les animaux (perdus et trouvés)
const loadAllPets = async () => {
  try {
    loading.value = true;
    error.value = null;

    console.log(
      "Début du chargement des chats - filterType:",
      filterType.value
    );

    let lostPets = [];
    let foundPets = [];

    if (filterType.value === "all") {
      lostPets = await petService.getPetsByStatus("lost");
      foundPets = await petService.getPetsByStatus("found");
      console.log("Chats perdus chargés:", lostPets.length);
      console.log("Chats trouvés chargés:", foundPets.length);
    } else if (filterType.value === "recent") {
      const recentPets = await petService.getRecentPets(10);
      lostPets = recentPets.filter((pet) => pet.status === "lost");
      foundPets = recentPets.filter((pet) => pet.status === "found");
      console.log("Chats perdus récents:", lostPets.length);
      console.log("Chats trouvés récents:", foundPets.length);
    }

    pets.value = [...lostPets, ...foundPets];
    applyFilters();

    console.log("Nombre total de chats chargés:", pets.value.length);
  } catch (err) {
    error.value = "Une erreur est survenue lors du chargement des données.";
    console.error("Erreur détaillée:", err);
  } finally {
    loading.value = false;
  }
};

// Appliquer les filtres (recherche + status)
const applyFilters = () => {
  let result = [...pets.value];

  // Filtrer par statut
  if (statusFilter.value !== "all") {
    result = result.filter((pet) => pet.status === statusFilter.value);
  }

  // Filtrer par recherche
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    result = result.filter(
      (pet) =>
        (pet.name && pet.name.toLowerCase().includes(query)) ||
        (pet.breed && pet.breed.toLowerCase().includes(query)) ||
        (pet.color && pet.color.toLowerCase().includes(query)) ||
        (pet.description && pet.description.toLowerCase().includes(query)) ||
        (pet.last_seen_location?.address &&
          pet.last_seen_location.address.toLowerCase().includes(query)) ||
        (pet.found_location?.address &&
          pet.found_location.address.toLowerCase().includes(query)) ||
        (pet.tags && pet.tags.some((tag) => tag.toLowerCase().includes(query)))
    );
  }

  // Trier les résultats selon le critère sélectionné
  result = sortPets(result);

  filteredPets.value = result;
};

// Fonction pour trier les animaux
const sortPets = (petsToSort) => {
  switch (sortBy.value) {
    case "date_desc":
      // Tri par date (du plus récent au plus ancien)
      return [...petsToSort].sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
        const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
        return dateB - dateA;
      });

    case "date_asc":
      // Tri par date (du plus ancien au plus récent)
      return [...petsToSort].sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
        const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
        return dateA - dateB;
      });

    case "age":
      // Tri par âge estimé (du plus jeune au plus âgé)
      return [...petsToSort].sort((a, b) => {
        const getAgeNumber = (pet) => {
          if (!pet.age && !pet.age_estimate) return 999; // Âge inconnu en dernière position

          const ageStr = (pet.age || pet.age_estimate || "")
            .toString()
            .toLowerCase();

          // Extraire le nombre de l'âge
          const match = ageStr.match(/(\d+)/);
          if (!match) return 998; // Format non reconnu

          const num = parseInt(match[1]);

          // Convertir en mois si l'âge est en années
          if (ageStr.includes("an")) {
            return num * 12;
          }

          return num; // Déjà en mois
        };

        return getAgeNumber(a) - getAgeNumber(b);
      });

    case "age_desc":
      // Tri par âge estimé (du plus âgé au plus jeune)
      return [...petsToSort].sort((a, b) => {
        const getAgeNumber = (pet) => {
          if (!pet.age && !pet.age_estimate) return -1; // Âge inconnu en dernière position

          const ageStr = (pet.age || pet.age_estimate || "")
            .toString()
            .toLowerCase();

          // Extraire le nombre de l'âge
          const match = ageStr.match(/(\d+)/);
          if (!match) return 0; // Format non reconnu

          const num = parseInt(match[1]);

          // Convertir en mois si l'âge est en années
          if (ageStr.includes("an")) {
            return num * 12;
          }

          return num; // Déjà en mois
        };

        return getAgeNumber(b) - getAgeNumber(a);
      });

    default:
      return petsToSort;
  }
};

// Formater la date
const formatDate = (date) => {
  if (!date) return "Date inconnue";

  try {
    const dateObj = date.toDate ? date.toDate() : new Date(date);

    return dateObj.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    console.error("Erreur de formatage de date:", error);
    return "Date invalide";
  }
};

// Formater la date de manière plus concise pour l'affichage dans les cartes
const formatDateShort = (date) => {
  if (!date) return "Date inconnue";

  try {
    const dateObj = date.toDate ? date.toDate() : new Date(date);

    return dateObj.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch (error) {
    console.error("Erreur de formatage de date:", error);
    return "Date invalide";
  }
};

// Calculer la durée depuis la création
const getTimeSinceCreation = (createdAt) => {
  if (!createdAt) return "Date inconnue";

  try {
    const createdDate = createdAt.toDate
      ? createdAt.toDate()
      : new Date(createdAt);
    const now = new Date();
    const diffTime = Math.abs(now - createdDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

    if (diffDays > 0) {
      return `Il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
    } else if (diffHours > 0) {
      return `Il y a ${diffHours} heure${diffHours > 1 ? "s" : ""}`;
    } else if (diffMinutes > 0) {
      return `Il y a ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`;
    } else {
      return "À l'instant";
    }
  } catch (error) {
    console.error("Erreur de calcul de durée:", error);
    return "Date inconnue";
  }
};

// Statistiques affichées
const stats = computed(() => {
  const lostCount = pets.value.filter((pet) => pet.status === "lost").length;
  const foundCount = pets.value.filter((pet) => pet.status === "found").length;

  return {
    lost: lostCount,
    found: foundCount,
    total: lostCount + foundCount,
    filtered: filteredPets.value.length,
  };
});

// Observer les changements dans les filtres
watch([filterType, searchQuery, sortBy, statusFilter], () => {
  if (filterType.value === "all" || filterType.value === "recent") {
    loadAllPets();
  } else {
    applyFilters();
  }
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- En-tête avec titre et statistiques -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-serif text-gray-900">
        {{
          statusFilter === "all"
            ? stats.total
            : statusFilter === "lost"
            ? stats.lost
            : stats.found
        }}
        Chats
        {{
          statusFilter === "all"
            ? "Perdus / Trouvés"
            : statusFilter === "lost"
            ? "Perdus"
            : "Trouvés"
        }}
      </h2>

      <!-- Filtres sous forme de tags -->
      <div class="flex gap-4">
        <button
          @click="filterType = 'all'"
          :class="[
            'px-4 py-2 rounded-full text-sm font-sans flex items-center gap-1',
            filterType === 'all'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          Tous
        </button>
        <button
          @click="filterType = 'recent'"
          :class="[
            'px-4 py-2 rounded-full text-sm font-sans flex items-center gap-1',
            filterType === 'recent'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Récents
        </button>

        <button
          @click="statusFilter = 'lost'"
          :class="[
            'px-4 py-2 rounded-full text-sm font-sans flex items-center gap-1',
            statusFilter === 'lost'
              ? 'bg-red-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Perdus
        </button>
        <button
          @click="statusFilter = 'found'"
          :class="[
            'px-4 py-2 rounded-full text-sm font-sans flex items-center gap-1',
            statusFilter === 'found'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Trouvés
        </button>
      </div>
    </div>

    <!-- Barre de recherche et tri -->
    <div class="mb-8 flex gap-4 items-center">
      <div class="relative flex-grow">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          v-model="searchQuery"
          type="text"
          class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="Rechercher par nom, race, couleur, lieu, description..."
          @input="applyFilters"
        />
      </div>

      <div class="relative min-w-[60px]">
        <div
          class="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-3 bg-white relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          <div
            class="pointer-events-none text-sm text-gray-500 font-medium absolute top-1/2 transform -translate-y-1/2 left-10"
          >
            <span v-if="sortBy === 'date_desc'">↓</span>
            <span v-else-if="sortBy === 'date_asc'">↑</span>
            <span v-else-if="sortBy === 'age'">↑</span>
            <span v-else-if="sortBy === 'age_desc'">↓</span>
          </div>
          <select
            id="sort-select"
            v-model="sortBy"
            class="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-sm appearance-none opacity-0 absolute inset-0 cursor-pointer"
            aria-label="Trier par"
            title="Options de tri"
          >
            <option value="date_desc">Date récente</option>
            <option value="date_asc">Date ancienne</option>
            <option value="age">Âge croissant</option>
            <option value="age_desc">Âge décroissant</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Indicateur de chargement -->
    <div v-if="loading" class="text-center py-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
      ></div>
      <p class="mt-4 text-gray-600 font-sans">Chargement en cours...</p>
    </div>

    <!-- Message d'erreur -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600 font-sans">{{ error }}</p>
    </div>

    <!-- Message si aucun résultat -->
    <div v-else-if="filteredPets.length === 0" class="text-center py-12">
      <p class="text-gray-600 font-sans">
        Aucun chat ne correspond à votre recherche.
      </p>
    </div>

    <!-- Liste des animaux -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="(pet, index) in filteredPets" :key="pet.id">
        <router-link
          :to="{ name: 'PetDetailsPage', params: { id: pet.id } }"
          class="block relative group"
        >
          <div :class="CARD_CLASSES.container" class="h-full flex flex-col">
            <!-- En-tête avec statut et date -->
            <div
              class="p-2 bg-gray-50 text-xs flex justify-between items-center border-b"
            >
              <span
                :class="[
                  'px-2 py-1 rounded-full font-medium',
                  pet.status === 'lost'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800',
                ]"
              >
                {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
              </span>
              <span class="text-gray-600 font-medium">
                {{ getTimeSinceCreation(pet.createdAt) }}
              </span>
            </div>

            <!-- Image principale -->
            <div class="relative">
              <img
                :src="
                  pet.images && pet.images.length > 0
                    ? pet.images[0]
                    : '/Logo-graphique-2-big.png'
                "
                :alt="pet.name || 'Chat sans nom'"
                class="w-full text-lg text- h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                @error="$event.target.src = '/Logo-graphique-2-big.png '"
              />
              <!-- Badge avec ID discret -->
              <div
                class="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1 m-2 rounded"
              >
                {{ pet.name }}
              </div>
            </div>

            <div class="px-6 pt-6 flex-grow flex flex-col">
              <!-- Nom et informations principales -->
              <h3 :class="CARD_CLASSES.infoLabel" class="mb-4" v-if="pet.breed">
                <span class="font-thin text-gray-500 text-xs">Race : </span>
                {{ pet.breed || "Race inconnue" }}
              </h3>

              <!-- Informations importantes mises en évidence -->
              <div
                class="mb-4 p-3 rounded-lg"
                :class="
                  pet.status === 'lost'
                    ? STATUS_COLORS.LOST.bgLight
                    : STATUS_COLORS.FOUND.bgLight
                "
              >
                <p
                  class="text-sm font-medium"
                  :class="
                    pet.status === 'lost'
                      ? STATUS_COLORS.LOST.text
                      : STATUS_COLORS.FOUND.text
                  "
                >
                  <span class="font-medium">Lieu:</span>
                  {{
                    pet.status === "lost"
                      ? pet.last_seen_location?.address || "Lieu inconnu"
                      : pet.found_location?.address || "Lieu inconnu"
                  }}
                </p>
              </div>

              <!-- Caractéristiques de l'animal -->
              <div class="space-y-2 mb-4">
                <!-- Caractéristiques sur une ligne -->
                <div class="flex items-center gap-4 mt-2">
                  <!-- Âge -->
                  <div
                    v-if="pet.age || pet.age_estimate"
                    class="flex items-center gap-1"
                  >
                    <svg
                      class="w-5 h-5 text-gray-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="text-sm text-gray-700">
                      {{ pet.age || pet.age_estimate }}
                      {{
                        isNaN(parseInt(pet.age || pet.age_estimate)) ||
                        String(pet.age || pet.age_estimate)
                          .toLowerCase()
                          .includes("an")
                          ? ""
                          : parseInt(pet.age || pet.age_estimate) > 1
                          ? "ans"
                          : parseInt(pet.age || pet.age_estimate) === 1
                          ? "an"
                          : "mois"
                      }}
                    </span>
                  </div>

                  <!-- Sexe avec icône -->
                  <div v-if="pet.gender" class="flex items-center gap-1">
                    <span
                      :class="[
                        'w-5 h-5 flex items-center justify-center rounded-full text-white font-bold flex-shrink-0',
                        pet.gender === 'male'
                          ? 'bg-blue-600'
                          : pet.gender === 'female'
                          ? 'bg-pink-600'
                          : 'bg-gray-500',
                      ]"
                    >
                      <font-awesome-icon
                        :icon="[
                          'fas',
                          pet.gender === 'male'
                            ? 'mars'
                            : pet.gender === 'female'
                            ? 'venus'
                            : 'question',
                        ]"
                        class="text-sm"
                      />
                    </span>
                    <span class="text-sm text-gray-700">
                      {{
                        pet.gender === "male"
                          ? "Mâle"
                          : pet.gender === "female"
                          ? "Femelle"
                          : "Inconnu"
                      }}
                    </span>
                  </div>

                  <!-- Couleur avec indicateur visuel -->
                  <div v-if="pet.color" class="flex items-center gap-1">
                    <div
                      class="w-5 h-5 rounded-full border border-gray-300 flex-shrink-0"
                      :style="{
                        background: getColorBackground(pet.color),
                      }"
                    ></div>
                    <span class="text-sm text-gray-700">{{ pet.color }}</span>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <p :class="CARD_CLASSES.description" v-if="pet.description">
                {{ pet.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in pet.tags || []"
                  :key="tag"
                  :class="[
                    'px-3 py-1.5 rounded-full text-sm font-medium',
                    getTagColorClass(tag),
                  ]"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Date de publication -->
              <p
                :class="CARD_CLASSES.infoItem"
                class="text-xs text-center text-gray-500 mt-auto mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Publié le {{ formatDate(pet.createdAt) }}
              </p>
            </div>
          </div>
          <!-- Overlay d'effet au survol -->
          <div
            class="absolute inset-0 pointer-events-none rounded-lg transition-all duration-300 group-hover:scale-[1.02]"
          ></div>
        </router-link>
      </template>
    </div>
  </div>
</template>
