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
    const now = new Date();
    const diffTime = Math.abs(now - createdDate);
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
          : "https://via.placeholder.com/400x300?text=Pas+d%27image",
      location: pet.last_seen_location?.address || "Lieu inconnu",
      date: formattedDate,
      duration: "Trouvé sur la voie publique",
      tags: [pet.breed, pet.color, "Indemne"].filter(Boolean),
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
