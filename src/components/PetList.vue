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
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Debug info -->
          <div class="p-2 bg-gray-100 text-xs">
            Index: {{ index }} | ID: {{ pet.id }}
          </div>

          <img
            :src="
              pet.images && pet.images.length > 0
                ? pet.images[0]
                : '/default-cat.jpg'
            "
            :alt="pet.name || 'Chat sans nom'"
            class="w-full h-48 object-cover"
            @error="$event.target.src = '/default-cat.jpg'"
          />
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-serif text-gray-900">
                {{ pet.name || "Chat sans nom" }}
              </h3>
              <span
                :class="[
                  'px-3 py-1 rounded-full text-sm font-sans',
                  pet.status === 'lost'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800',
                ]"
              >
                {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
              </span>
            </div>

            <div class="space-y-2 mb-4">
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Race:</span> {{ pet.breed }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Couleur:</span> {{ pet.color }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Localisation:</span>
                {{
                  pet.status === "lost"
                    ? pet.last_seen_location.address
                    : pet.found_location.address
                }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Date:</span>
                {{
                  formatDate(
                    pet.status === "lost" ? pet.last_seen_date : pet.found_date
                  )
                }}
              </p>
            </div>

            <p class="text-sm font-sans text-gray-700 mb-4 line-clamp-2">
              {{ pet.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in pet.tags"
                :key="tag"
                :class="[
                  'px-2 py-1 rounded-full text-xs font-sans',
                  getTagColorClass(tag),
                ]"
              >
                {{ tag }}
              </span>
            </div>

            <router-link
              :to="{ name: 'PetDetailsPage', params: { id: pet.id } }"
              class="mt-4 block w-full bg-secondary/30 text-gray-900 py-2 px-4 rounded-full font-sans hover:bg-secondary/40 transition-colors duration-300 text-center"
            >
              Voir les détails
            </router-link>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { petService } from "../services/petService";

const router = useRouter();
const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) => ["lost", "found"].includes(value),
  },
});

const pets = ref([]);
const loading = ref(true);
const error = ref(null);
const filterStatus = ref("all");

// Fonction pour attribuer une couleur à chaque tag
const getTagColorClass = (tag) => {
  const tagLower = tag.toLowerCase();

  // Couleurs pour les races ou types
  if (tagLower.includes("européen") || tagLower.includes("europeen")) {
    return "bg-blue-100 text-blue-800";
  }
  if (tagLower.includes("siamois") || tagLower.includes("siamese")) {
    return "bg-purple-100 text-purple-800";
  }
  if (tagLower.includes("bengal")) {
    return "bg-amber-100 text-amber-800";
  }
  if (tagLower.includes("persan") || tagLower.includes("persian")) {
    return "bg-pink-100 text-pink-800";
  }

  // Couleurs pour les caractéristiques physiques
  if (tagLower.includes("noir") || tagLower.includes("black")) {
    return "bg-gray-800 text-white";
  }
  if (tagLower.includes("blanc") || tagLower.includes("white")) {
    return "bg-gray-100 text-gray-800 border border-gray-300";
  }
  if (
    tagLower.includes("roux") ||
    tagLower.includes("orange") ||
    tagLower.includes("ginger")
  ) {
    return "bg-orange-100 text-orange-800";
  }
  if (tagLower.includes("gris") || tagLower.includes("gray")) {
    return "bg-slate-200 text-slate-800";
  }
  if (tagLower.includes("tigré") || tagLower.includes("tabby")) {
    return "bg-amber-50 text-amber-800";
  }
  if (tagLower.includes("tacheté") || tagLower.includes("spotted")) {
    return "bg-lime-100 text-lime-800";
  }
  if (tagLower.includes("chartreux")) {
    return "bg-blue-200 text-blue-800";
  }

  // Couleurs pour l'âge
  if (tagLower.includes("chaton") || tagLower.includes("kitten")) {
    return "bg-pink-100 text-pink-800";
  }
  if (tagLower.includes("adulte") || tagLower.includes("adult")) {
    return "bg-teal-100 text-teal-800";
  }
  if (tagLower.includes("senior")) {
    return "bg-violet-100 text-violet-800";
  }

  // Couleur par défaut pour les autres tags
  return "bg-emerald-100 text-emerald-800";
};

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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

watch(filterStatus, () => {
  loadPets();
});

onMounted(() => {
  loadPets();
});
</script>
