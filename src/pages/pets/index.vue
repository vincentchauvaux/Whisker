<template>
  <MainLayout>
    <div class="bg-white">
      <main class="container mx-auto px-4 py-12">
        <div class="max-w-7xl mx-auto mt-16">
          <div class="text-center mb-12">
            <h1 class="text-4xl font-bold text-primary mb-4 font-serif">
              Tous nos amis à quatre pattes
            </h1>
            <p class="text-xl text-primary-dark font-sans">
              Retrouvez tous les chats perdus et trouvés sur notre plateforme
            </p>
          </div>

          <!-- Filtres -->
          <div class="mb-8 flex flex-wrap gap-4 justify-center">
            <button
              @click="activeFilter = 'all'"
              :class="[
                'px-6 py-3 rounded-full font-sans transition-colors',
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
            >
              Tous
            </button>
            <button
              @click="activeFilter = 'lost'"
              :class="[
                'px-6 py-3 rounded-full font-sans transition-colors',
                activeFilter === 'lost'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
            >
              Perdus
            </button>
            <button
              @click="activeFilter = 'found'"
              :class="[
                'px-6 py-3 rounded-full font-sans transition-colors',
                activeFilter === 'found'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
            >
              Trouvés
            </button>
          </div>

          <!-- État de chargement -->
          <div v-if="loading" class="flex justify-center items-center py-12">
            <div
              class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
            ></div>
          </div>

          <!-- Message d'erreur -->
          <div v-else-if="error" class="text-center py-12">
            <p class="text-red-500">{{ error }}</p>
            <button
              @click="loadPets"
              class="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
            >
              Réessayer
            </button>
          </div>

          <!-- Aucun résultat -->
          <div v-else-if="filteredPets.length === 0" class="text-center py-12">
            <p class="text-gray-500">
              Aucun animal {{ activeFilterLabel }} pour le moment.
            </p>
          </div>

          <!-- Liste des chats -->
          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              v-for="pet in filteredPets"
              :key="pet.id"
              class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
            >
              <router-link
                :to="{ name: 'PetDetailsPage', params: { id: pet.id } }"
                class="block h-full"
              >
                <div class="relative h-64">
                  <img
                    :src="
                      pet.images && pet.images.length > 0
                        ? pet.images[0]
                        : 'https://via.placeholder.com/400x300?text=Pas+d%27image'
                    "
                    :alt="pet.name || 'Chat sans nom'"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span
                      :class="[
                        'px-4 py-2 rounded-full text-sm font-sans',
                        pet.status === 'lost'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800',
                      ]"
                    >
                      {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                    </span>
                  </div>
                </div>

                <div class="p-6">
                  <div class="flex items-center gap-2 mb-4">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="font-medium text-primary font-serif">
                      {{ getLocationText(pet) }}
                    </span>
                  </div>

                  <h3 class="text-xl font-bold text-gray-900 mb-2 font-serif">
                    {{ pet.name || "Chat sans nom" }}
                  </h3>

                  <div class="flex items-center gap-2 mb-4">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-600 font-sans">
                      {{ formatDate(pet.createdAt) }}
                    </span>
                  </div>

                  <p
                    v-if="pet.description"
                    class="text-gray-600 mb-4 line-clamp-2 font-sans"
                  >
                    {{ pet.description }}
                  </p>

                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in [pet.breed, pet.color].filter(Boolean)"
                      :key="tag"
                      :class="[
                        'px-3 py-1 rounded-full text-sm font-sans',
                        getTagColorClass(tag),
                      ]"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Pagination (à implémenter si nécessaire) -->
          <div class="mt-12 flex justify-center">
            <!-- Composants de pagination ici -->
          </div>
        </div>
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from "vue";
import MainLayout from "../../layouts/MainLayout.vue";

// Accéder au store
const { proxy } = getCurrentInstance();
const petStore = proxy.$petStore;

const loading = ref(false);
const error = ref(null);
const activeFilter = ref("all"); // 'all', 'lost', 'found'

// Fonction pour déterminer la couleur du tag en fonction de son contenu
const getTagColorClass = (tag) => {
  const tagLower = tag.toLowerCase();

  // Races/Types
  if (tagLower.includes("européen")) return "bg-blue-100 text-blue-800";
  if (tagLower.includes("siamois")) return "bg-purple-100 text-purple-800";
  if (tagLower.includes("bengal")) return "bg-amber-100 text-amber-800";
  if (tagLower.includes("persan")) return "bg-pink-100 text-pink-800";

  // Couleurs
  if (tagLower.includes("noir")) return "bg-gray-800 text-white";
  if (tagLower.includes("blanc"))
    return "bg-gray-50 text-gray-800 border border-gray-200";
  if (tagLower.includes("orange") || tagLower.includes("roux"))
    return "bg-orange-100 text-orange-800";
  if (tagLower.includes("gris")) return "bg-slate-200 text-slate-800";
  if (tagLower.includes("tigré") || tagLower.includes("tabby"))
    return "bg-amber-50 text-amber-800";
  if (tagLower.includes("tacheté") || tagLower.includes("spotted"))
    return "bg-lime-100 text-lime-800";
  if (tagLower.includes("chartreux")) return "bg-blue-200 text-blue-800";

  // Âge
  if (tagLower.includes("chaton") || tagLower.includes("bébé"))
    return "bg-pink-100 text-pink-800";
  if (tagLower.includes("adulte")) return "bg-teal-100 text-teal-800";
  if (tagLower.includes("senior") || tagLower.includes("âgé"))
    return "bg-purple-100 text-purple-800";

  // Couleur par défaut
  return "bg-emerald-100 text-emerald-800";
};

// Calculer le libellé du filtre actif
const activeFilterLabel = computed(() => {
  switch (activeFilter.value) {
    case "lost":
      return "perdu";
    case "found":
      return "trouvé";
    default:
      return "";
  }
});

// Filtrer les chats en fonction du filtre actif
const filteredPets = computed(() => {
  const allPets = [...petStore.getLostPets(), ...petStore.getFoundPets()];

  if (activeFilter.value === "all") {
    return allPets;
  } else {
    return allPets.filter((pet) => pet.status === activeFilter.value);
  }
});

// Charger les données des chats
const loadPets = async () => {
  loading.value = true;
  error.value = null;

  try {
    await petStore.fetchLostPets();
    await petStore.fetchFoundPets();
  } catch (err) {
    console.error("Erreur lors du chargement des chats:", err);
    error.value = "Impossible de charger les chats. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};

// Formater la date
const formatDate = (timestamp) => {
  if (!timestamp) return "Date inconnue";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Obtenir le texte de localisation
const getLocationText = (pet) => {
  if (pet.status === "lost" && pet.last_seen_location) {
    return (
      pet.last_seen_location.address ||
      pet.last_seen_location.city ||
      "Lieu inconnu"
    );
  } else if (pet.status === "found" && pet.found_location) {
    return (
      pet.found_location.address || pet.found_location.city || "Lieu inconnu"
    );
  }
  return "Lieu inconnu";
};

// Charger les données au montage du composant
onMounted(() => {
  loadPets();
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
