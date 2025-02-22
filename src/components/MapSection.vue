<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6"
        >
          Mapbox
        </h2>
        <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
          Une carte subtile conçue pour fournir un contexte géographique tout en
          mettant en valeur vos données. Parfaite pour visualiser les
          signalements d'animaux perdus et trouvés dans votre région.
        </p>
      </div>

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
      zoom: 8,
      pitch: 45,
      bearing: 0,
    });

    const onMapLoaded = () => {
      isMapLoaded.value = true;
    };

    return {
      isMapLoaded,
      mapConfig,
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
