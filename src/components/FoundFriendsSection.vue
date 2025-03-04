<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
          Nos Amis trouvés
        </h2>
        <p class="text-xl text-primary-dark">Les derniers signalements</p>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
        ></div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error }}</p>
        <button
          @click="loadFoundPets"
          class="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Réessayer
        </button>
      </div>

      <div v-else-if="foundPets.length === 0" class="text-center py-12">
        <p class="text-gray-500">Aucun animal trouvé pour le moment.</p>
      </div>

      <PetSlider v-else :pets="formattedPets" />

      <div class="text-center mt-12">
        <router-link
          to="/found"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
        >
          <span>Voir tous les chats trouvés</span>
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import PetSlider from "./PetSlider.vue";
import { petService } from "../services/petService";

const foundPets = ref([]);
const loading = ref(true);
const error = ref(null);

// Formater les données pour le PetSlider
const formattedPets = computed(() => {
  return foundPets.value.map((pet) => {
    // Calculer la durée depuis la création
    const createdDate = pet.createdAt?.toDate() || new Date();
    const foundDate = pet.found_date?.toDate() || createdDate;
    const now = new Date();
    const diffTime = Math.abs(now - foundDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Formater la date
    const dateOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const formattedDate = createdDate
      .toLocaleDateString("fr-FR", dateOptions)
      .replace(",", " -");

    return {
      id: pet.id,
      status: pet.status,
      image:
        pet.images && pet.images.length > 0
          ? pet.images[0]
          : "/logo-nb-transparent.png",
      location:
        pet.found_location?.address ||
        pet.found_location?.city ||
        "Lieu inconnu",
      date: formattedDate,
      duration: `Trouvé depuis ${diffDays} jour${diffDays > 1 ? "s" : ""}`,
      tags:
        pet.tags || [pet.breed, pet.color, pet.age_estimate].filter(Boolean),
      name: pet.name || "Sans nom",
    };
  });
});

const loadFoundPets = async () => {
  loading.value = true;
  error.value = null;

  try {
    foundPets.value = await petService.getPetsByStatus("found");
  } catch (err) {
    console.error("Erreur lors du chargement des animaux trouvés:", err);
    error.value =
      "Impossible de charger les animaux trouvés. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadFoundPets();
});
</script>

<style scoped>
.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}
.aspect-w-1 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
