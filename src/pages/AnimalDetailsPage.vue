<template>
  <div class="container mx-auto px-4 py-8">
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

    <template v-else>
      <!-- Bouton de retour -->
      <div class="mb-6">
        <button
          @click="goBack"
          class="flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5 mr-1"
          >
            <path
              fill-rule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clip-rule="evenodd"
            />
          </svg>
          Retour à la liste
        </button>
      </div>

      <!-- Carte de l'animal -->
      <div class="max-w-2xl mx-auto">
        <AnimalFoundCard
          :animal-data="animalData"
          @contact="handleContact"
          @share="handleShare"
        />
      </div>

      <!-- Autres animaux similaires -->
      <div class="mt-12">
        <h2 class="text-xl font-bold mb-4">Animaux similaires</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Placeholder pour les animaux similaires -->
          <div
            v-for="i in 3"
            :key="i"
            class="bg-gray-100 rounded-lg h-64 animate-pulse"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAnimalsList } from "../functions";
import AnimalFoundCard from "../components/AnimalFoundCard.vue";

const route = useRoute();
const router = useRouter();
const animalId = route.params.id;

const { isLoading, error, fetchAnimals, getAnimalById } = useAnimalsList();
const animalData = ref(null);

// Fonction pour revenir à la page précédente
const goBack = () => {
  router.back();
};

// Fonctions pour gérer les actions sur la carte
const handleContact = () => {
  // Logique pour contacter le propriétaire
  alert(`Contacter le propriétaire de ${animalData.value.name}`);
};

const handleShare = () => {
  // Logique pour partager l'annonce
  const shareData = {
    title: `Animal trouvé: ${animalData.value.name}`,
    text: `${animalData.value.description}`,
    url: window.location.href,
  };

  if (navigator.share && navigator.canShare(shareData)) {
    navigator.share(shareData);
  } else {
    // Fallback si l'API Web Share n'est pas disponible
    alert(`Partager: ${window.location.href}`);
  }
};

onMounted(async () => {
  // Charger les données des animaux
  await fetchAnimals();

  // Récupérer les données de l'animal spécifique
  const animal = getAnimalById(animalId);

  if (animal) {
    animalData.value = animal;
  } else {
    error.value = "Animal non trouvé";
  }
});
</script>
