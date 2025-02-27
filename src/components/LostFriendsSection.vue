<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
          Nos Amis perdus
        </h2>
        <p class="text-xl text-primary-dark">Aidez-nous à les retrouver</p>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
        ></div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error }}</p>
        <button
          @click="loadLostPets"
          class="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Réessayer
        </button>
      </div>

      <div v-else-if="lostPets.length === 0" class="text-center py-12">
        <p class="text-gray-500">Aucun animal perdu pour le moment.</p>
      </div>

      <PetSlider v-else :pets="formattedPets" />

      <div class="text-center mt-12">
        <router-link
          to="/pets"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
        >
          <span>Voir tous les chats</span>
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

const lostPets = ref([]);
const loading = ref(true);
const error = ref(null);

// Formater les données pour le PetSlider
const formattedPets = computed(() => {
  return lostPets.value.map((pet) => {
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
      duration: `Perdu depuis ${diffDays} jour${diffDays > 1 ? "s" : ""}`,
      tags: [pet.breed, pet.color].filter(Boolean),
      name: pet.name || "Sans nom",
    };
  });
});

const loadLostPets = async () => {
  loading.value = true;
  error.value = null;

  try {
    lostPets.value = await petService.getPetsByStatus("lost");
  } catch (err) {
    console.error("Erreur lors du chargement des animaux perdus:", err);
    error.value =
      "Impossible de charger les animaux perdus. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadLostPets();
});
</script>
