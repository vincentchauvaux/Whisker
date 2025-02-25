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
                class="px-3 py-1 rounded-full text-sm font-medium bg-primary-light text-primary hover:bg-primary/10 transition-colors font-sans"
              >
                Tous
              </button>
              <button
                class="px-3 py-1 rounded-full text-sm font-medium text-primary hover:bg-primary-light transition-colors font-sans"
              >
                Perdus
              </button>
              <button
                class="px-3 py-1 rounded-full text-sm font-medium text-primary hover:bg-primary-light transition-colors font-sans"
              >
                Trouvés
              </button>
            </div>
          </div>

          <div
            class="overflow-y-auto flex-1 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400"
          >
            <div class="space-y-4 py-2">
              <div
                v-for="pet in pets"
                :key="pet.id"
                class="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-100"
              >
                <img
                  :src="pet.image"
                  :alt="pet.name"
                  class="w-24 h-24 object-cover rounded-lg"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, defineComponent } from "vue";
import Map from "./Map.vue";

export default defineComponent({
  components: {
    Map,
  },

  setup() {
    const isMapLoaded = ref(false);
    const mapConfig = ref({
      lng: 4.3517,
      lat: 50.8503,
      zoom: 9,
      pitch: 70,
      bearing: 0,
    });

    const pets = ref([
      {
        id: 1,
        status: "lost",
        name: "Milo",
        date: "Il y a 2h",
        location: "Ixelles, Bruxelles",
        description:
          "Chat tigré gris avec un collier rouge. Vu pour la dernière fois près du parc.",
        image:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: 2,
        status: "found",
        name: null,
        date: "Il y a 3h",
        location: "Etterbeek, Bruxelles",
        description: "Chat noir et blanc, très amical. Trouvé près de la gare.",
        image:
          "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: 3,
        status: "lost",
        name: "Luna",
        date: "Il y a 5h",
        location: "Schaerbeek, Bruxelles",
        description: "Chatte siamoise avec yeux bleus. Peureux mais gentil.",
        image:
          "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: 4,
        status: "found",
        name: null,
        date: "Il y a 6h",
        location: "Saint-Gilles, Bruxelles",
        description: "Chat roux trouvé dans le jardin. Porte un collier bleu.",
        image:
          "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=200&auto=format&fit=crop",
      },
      {
        id: 5,
        status: "lost",
        name: "Oscar",
        date: "Il y a 8h",
        location: "Uccle, Bruxelles",
        description: "Chat persan blanc. Nécessite des soins médicaux.",
        image:
          "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=200&auto=format&fit=crop",
      },
    ]);

    const onMapLoaded = () => {
      isMapLoaded.value = true;
    };

    return {
      isMapLoaded,
      mapConfig,
      pets,
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
