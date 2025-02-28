<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { petService } from "../services/petService";
import {
  STATUS_COLORS,
  TAG_COLORS,
  CARD_CLASSES,
  getTagColorClass,
  getColorBackground,
} from "../constants/colors.js";

const router = useRouter();
const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) => ["lost", "found"].includes(value),
  },
});

// État local
const pets = ref([]);
const loading = ref(true);
const error = ref(null);
const filterStatus = ref("all");

// Fonction pour charger les animaux
const loadPets = async () => {
  try {
    loading.value = true;
    error.value = null;

    console.log(
      "Début du chargement des chats - filterStatus:",
      filterStatus.value
    );

    if (filterStatus.value === "all") {
      const result = await petService.getPetsByStatus(props.status);
      console.log(`Chats ${props.status} chargés (total):`, result.length);
      console.log("Premier chat:", result[0]);
      console.log("Dernier chat:", result[result.length - 1]);
      pets.value = result;
    } else {
      const result = await petService.getRecentPets(5);
      console.log("Chats récents chargés (avant filtre):", result.length);
      const filtered = result.filter((pet) => pet.status === props.status);
      console.log(
        `Chats récents filtrés (status=${props.status}):`,
        filtered.length
      );
      pets.value = filtered;
    }

    console.log("Nombre final de chats à afficher:", pets.value.length);
    console.log(
      "Structure du premier chat:",
      JSON.stringify(pets.value[0], null, 2)
    );
  } catch (err) {
    error.value = "Une erreur est survenue lors du chargement des données.";
    console.error("Erreur détaillée:", err);
  } finally {
    loading.value = false;
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

// Obtenir la date pertinente selon le statut
const getRelevantDate = (pet) => {
  if (!pet) return null;

  if (pet.status === "lost") {
    return pet.last_seen_date || pet.createdAt;
  } else {
    return pet.found_date || pet.createdAt;
  }
};

// Obtenir le libellé de la date selon le statut
const getDateLabel = (pet) => {
  if (!pet) return "";

  if (pet.status === "lost") {
    return "Perdu le:";
  } else {
    return "Trouvé le:";
  }
};

watch(filterStatus, () => {
  loadPets();
});

onMounted(() => {
  loadPets();
});
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Debug info -->
    <div class="mb-4 p-4 bg-gray-100 rounded">
      <p>Nombre total de chats: {{ pets.length }}</p>
      <p>Status actuel: {{ status }}</p>
      <p>Filtre actuel: {{ filterStatus }}</p>
    </div>

    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-serif text-gray-900">
        {{ status === "lost" ? "Chats Perdus" : "Chats Trouvés" }}
      </h2>
      <div class="flex gap-4">
        <button
          @click="filterStatus = 'all'"
          :class="[
            'px-4 py-2 rounded-full text-sm font-sans',
            filterStatus === 'all'
              ? 'bg-secondary/30 text-gray-900'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
          ]"
        >
          Tous
        </button>
        <button
          @click="filterStatus = 'recent'"
          :class="[
            'px-4 py-2 rounded-full text-sm font-sans',
            filterStatus === 'recent'
              ? 'bg-secondary/30 text-gray-900'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
          ]"
        >
          Récents
        </button>
      </div>
    </div>

    <div v-if="loading" class="text-center py-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
      ></div>
      <p class="mt-4 text-gray-600 font-sans">Chargement en cours...</p>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600 font-sans">{{ error }}</p>
    </div>

    <div v-else-if="pets.length === 0" class="text-center py-12">
      <p class="text-gray-600 font-sans">
        Aucun chat {{ status === "lost" ? "perdu" : "trouvé" }} pour le moment.
      </p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template v-for="(pet, index) in pets" :key="pet.id">
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
                    : '/default-cat.jpg'
                "
                :alt="pet.name || 'Chat sans nom'"
                class="w-full text-lg text- h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                @error="$event.target.src = '/default-cat.jpg'"
              />
              <!-- Badge avec ID discret -->
              <div
                class="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-2 py-1 m-2 rounded"
              >
                ID: {{ pet.id }}
              </div>
            </div>

            <div class="p-6 flex-grow flex flex-col">
              <!-- Nom et informations principales -->
              <h3 :class="CARD_CLASSES.infoLabel" class="mb-4">
                {{ pet.name || "Chat sans nom" }}
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
                <p :class="CARD_CLASSES.title" v-if="pet.breed">
                  <span :class="CARD_CLASSES.infoLabel">{{ pet.breed }}</span>
                </p>

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
                      {{
                        pet.gender === "male"
                          ? "♂"
                          : pet.gender === "female"
                          ? "♀"
                          : "?"
                      }}
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

              <!-- Date de publication (déplacée juste avant "Voir les détails") -->
              <p
                :class="CARD_CLASSES.infoItem"
                class="text-xs text-gray-500 mt-auto mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                Publié le {{ formatDate(pet.createdAt) }}
              </p>

              <!-- Indicateur visuel de clic -->
              <div
                class="text-center text-secondary font-medium group-hover:underline"
              >
                Voir les détails
              </div>
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
