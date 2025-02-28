<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Animaux trouvés</h1>

    <!-- Filtres -->
    <div class="mb-8 bg-white p-4 rounded-lg shadow-sm">
      <div class="flex flex-wrap gap-4">
        <div class="w-full md:w-auto">
          <label
            for="status"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Statut</label
          >
          <select
            id="status"
            v-model="filters.status"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            <option value="">Tous</option>
            <option value="found">Trouvés</option>
            <option value="lost">Perdus</option>
          </select>
        </div>

        <div class="w-full md:w-auto">
          <label
            for="species"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Espèce</label
          >
          <select
            id="species"
            v-model="filters.species"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          >
            <option value="">Toutes</option>
            <option value="cat">Chat</option>
            <option value="dog">Chien</option>
            <option value="other">Autre</option>
          </select>
        </div>

        <div class="w-full md:w-auto md:flex-1">
          <label
            for="location"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Lieu</label
          >
          <input
            type="text"
            id="location"
            v-model="filters.location"
            placeholder="Ville, code postal..."
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
        </div>

        <div class="w-full md:w-auto flex items-end">
          <button
            @click="applyFilters"
            class="w-full md:w-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Filtrer
          </button>
        </div>
      </div>
    </div>

    <!-- Liste des animaux -->
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
      ></div>
    </div>

    <div
      v-else-if="error"
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    >
      <strong class="font-bold">Erreur!</strong>
      <span class="block sm:inline"> {{ error }}</span>
    </div>

    <div v-else-if="animals.length === 0" class="text-center py-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 mx-auto text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
      <p class="mt-4 text-lg text-gray-600">Aucun animal trouvé</p>
      <p class="text-gray-500">Essayez de modifier vos filtres</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="animal in animals"
        :key="animal.id"
        class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        @click="viewAnimalDetails(animal.id)"
      >
        <!-- Image de l'animal -->
        <div class="h-48 overflow-hidden">
          <img
            :src="animal.image || '/img/placeholder-animal.jpg'"
            :alt="animal.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Informations de base -->
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h2 class="text-xl font-bold">{{ animal.name }}</h2>
            <span
              class="px-2 py-1 rounded-full text-xs font-medium"
              :class="
                animal.status === 'found'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              "
            >
              {{ animal.status === "found" ? "Trouvé" : "Perdu" }}
            </span>
          </div>

          <div class="mt-2 text-sm text-gray-600">
            <div class="flex items-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ animal.location }}
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              {{ formatDiscoveryDate(animal.discoveryDate) }}
            </div>
          </div>

          <p class="mt-3 text-gray-700 line-clamp-2">
            {{ animal.description }}
          </p>

          <div class="mt-4 flex justify-end">
            <button class="text-primary hover:text-primary-dark font-medium">
              Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAnimalsList, formatDate } from "../functions";

const router = useRouter();
const { animals, isLoading, error, fetchAnimals } = useAnimalsList();

// Filtres
const filters = ref({
  status: "",
  species: "",
  location: "",
});

// Fonction pour appliquer les filtres
const applyFilters = async () => {
  await fetchAnimals(filters.value);
};

// Fonction pour formater la date de découverte
const formatDiscoveryDate = (date) => {
  if (!date || date === "Invalid Date") {
    return "Date non disponible";
  }
  return formatDate(date);
};

// Fonction pour voir les détails d'un animal
const viewAnimalDetails = (id) => {
  router.push(`/animals/${id}`);
};

onMounted(async () => {
  // Charger les données des animaux
  await fetchAnimals();
});
</script>

<style>
/* Classe pour limiter le nombre de lignes de texte */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
