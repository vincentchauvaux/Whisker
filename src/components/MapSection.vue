<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold tracking-tight text-primary font-serif mb-6"
        >
          Carte des signalements
        </h2>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-sans">
          Une carte interactive pour visualiser les signalements d'animaux
          perdus et trouvés dans votre région.
        </p>
      </div>

      <div class="grid lg:grid-cols-[1fr_400px] gap-8">
        <div class="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <div
            v-if="!isMapLoaded"
            class="absolute inset-0 bg-gray-100 flex items-center justify-center"
          >
            <div class="text-primary">Chargement de la carte...</div>
          </div>
          <Map
            v-model="mapConfig"
            :activeFilter="activeFilter"
            class="absolute inset-0"
            @map-loaded="onMapLoaded"
          />
        </div>

        <!-- Liste des signalements -->
        <div
          class="bg-white rounded-2xl shadow-xl p-4 overflow-hidden flex flex-col h-[600px]"
        >
          <div class="flex items-center justify-between mb-4 flex-shrink-0">
            <h3 class="text-lg font-bold text-primary font-serif">
              Signalements récents
            </h3>
            <div class="flex gap-2">
              <button
                @click="setFilter('all')"
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium transition-colors font-sans',
                  activeFilter === 'all'
                    ? 'bg-primary-light text-primary'
                    : 'text-primary hover:bg-primary-light',
                ]"
              >
                Tous
              </button>
              <button
                @click="setFilter('lost')"
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium transition-colors font-sans',
                  activeFilter === 'lost'
                    ? 'bg-primary-light text-primary'
                    : 'text-primary hover:bg-primary-light',
                ]"
              >
                Perdus
              </button>
              <button
                @click="setFilter('found')"
                :class="[
                  'px-3 py-1 rounded-full text-sm font-medium transition-colors font-sans',
                  activeFilter === 'found'
                    ? 'bg-primary-light text-primary'
                    : 'text-primary hover:bg-primary-light',
                ]"
              >
                Trouvés
              </button>
            </div>
          </div>

          <div
            class="overflow-y-auto flex-1 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
          >
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
            <div v-else-if="pets.length === 0" class="text-center py-12">
              <p class="text-gray-500">
                Aucun signalement disponible pour le moment.
              </p>
            </div>

            <!-- Liste des signalements -->
            <div v-else class="space-y-4 py-2">
              <router-link
                v-for="pet in pets"
                :key="pet.id"
                :to="{ name: 'PetDetails', params: { id: pet.id } }"
                class="block"
              >
                <div
                  class="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
                >
                  <img
                    :src="pet.image"
                    :alt="pet.name"
                    class="w-24 h-24 object-cover rounded-lg"
                    @error="
                      $event.target.src =
                        'https://via.placeholder.com/200x200?text=Pas+d%27image'
                    "
                  />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2">
                      <div>
                        <span
                          :class="[
                            'px-2 py-0.5 rounded-full text-xs font-medium inline-block mb-1',
                            pet.status === 'lost'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800',
                          ]"
                        >
                          {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                        </span>
                        <h4 class="font-medium text-primary truncate">
                          {{ pet.name || "Chat sans nom" }}
                        </h4>
                      </div>
                      <span class="text-xs text-gray-500 whitespace-nowrap">{{
                        pet.date
                      }}</span>
                    </div>
                    <p class="text-sm text-gray-600 line-clamp-2 mb-1">
                      {{ pet.description }}
                    </p>
                    <div class="flex items-center gap-1 text-sm text-primary">
                      <svg
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        />
                      </svg>
                      <span class="truncate">{{ pet.location }}</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import Map from "./Map.vue";
import { petService } from "../services/petService";

export default defineComponent({
  components: {
    Map,
  },

  setup() {
    const isMapLoaded = ref(false);
    const mapConfig = ref({
      lng: 4.399,
      lat: 50.7184,
      zoom: 14,
      pitch: 70,
      bearing: 0,
    });

    const allPets = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const activeFilter = ref("all"); // 'all', 'lost', 'found'
    const mapInstance = ref(null);

    const pets = computed(() => {
      if (activeFilter.value === "all") {
        return allPets.value;
      } else {
        return allPets.value.filter((pet) => pet.status === activeFilter.value);
      }
    });

    const loadPets = async () => {
      loading.value = true;
      error.value = null;

      try {
        // Récupérer tous les animaux
        const lostPets = await petService.getPetsByStatus("lost");
        const foundPets = await petService.getPetsByStatus("found");

        // Formater les données pour l'affichage
        const formattedPets = [...lostPets, ...foundPets].map((pet) => {
          // Calculer le temps écoulé
          const createdDate = pet.createdAt?.toDate() || new Date();
          const now = new Date();
          const diffTime = Math.abs(now - createdDate);
          const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
          const timeAgo =
            diffHours < 24
              ? `Il y a ${diffHours}h`
              : `Il y a ${Math.floor(diffHours / 24)}j`;

          return {
            id: pet.id,
            status: pet.status,
            name: pet.name,
            date: timeAgo,
            location: pet.last_seen_location?.address || "Lieu inconnu",
            description: pet.description || "Aucune description disponible",
            image:
              pet.images && pet.images.length > 0
                ? pet.images[0]
                : "https://via.placeholder.com/200x200?text=Pas+d%27image",
            coordinates: pet.last_seen_location?.coordinates || null,
          };
        });

        allPets.value = formattedPets;
      } catch (err) {
        console.error("Erreur lors du chargement des animaux:", err);
        error.value = "Impossible de charger les données. Veuillez réessayer.";
      } finally {
        loading.value = false;
      }
    };

    const setFilter = (filter) => {
      activeFilter.value = filter;
    };

    const onMapLoaded = (map) => {
      isMapLoaded.value = true;
      mapInstance.value = map;
    };

    onMounted(() => {
      loadPets();
    });

    return {
      isMapLoaded,
      mapConfig,
      pets,
      loading,
      error,
      activeFilter,
      setFilter,
      onMapLoaded,
    };
  },
});
</script>

<style>
.marker {
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
  z-index: 40;
}

.mapboxgl-ctrl-group {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.mapboxgl-ctrl-group button {
  width: 36px;
  height: 36px;
}

.mapboxgl-canvas {
  outline: none;
}

.mapboxgl-map {
  font-family: inherit;
}
</style>
