<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGliYWxpbyIsImEiOiJjbG82M2Z0OWcwaG1xMmttdjI1YmNudWUyIn0.BnGzE7APfkeVsCrtjWTQLw";

// Données des chats
const cats = [
  {
    coordinates: [4.3991, 50.7147], // Waterloo
    title: "Milo",
    description: "Perdu depuis 2 jours",
    type: "lost",
    date: "14/02/24 - 12:45",
    tags: ["Curieux", "Indemne", "Chat Siamois"],
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop",
  },
  {
    coordinates: [4.6157, 50.7167], // Wavre
    title: "Luna",
    description: "Trouvé sur la voie publique",
    type: "found",
    date: "13/02/24 - 15:30",
    tags: ["Amical", "Indemne", "Chat Européen"],
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=400&auto=format&fit=crop",
  },
  {
    coordinates: [4.3297, 50.5982], // Nivelles
    title: "Felix",
    description: "Perdu depuis 4 jours",
    type: "lost",
    date: "12/02/24 - 09:15",
    tags: ["Timide", "Chat Maine Coon"],
    image:
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=400&auto=format&fit=crop",
  },
  {
    coordinates: [4.2056, 50.6911], // Tubize
    title: "Oscar",
    description: "Trouvé hier soir",
    type: "found",
    date: "14/02/24 - 20:30",
    tags: ["Joueur", "Chat Tigré"],
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=400&auto=format&fit=crop",
  },
  {
    coordinates: [4.3517, 50.8503], // Bruxelles
    title: "Charlie",
    description: "Perdu depuis 3 jours",
    type: "lost",
    date: "11/02/24 - 16:20",
    tags: ["Sociable", "Chat Persan"],
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=400&auto=format&fit=crop",
  },
  {
    coordinates: [4.4024, 51.2194], // Anvers
    title: "Leo",
    description: "Trouvé ce matin",
    type: "found",
    date: "14/02/24 - 08:15",
    tags: ["Calme", "Chat Roux"],
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=400&auto=format&fit=crop",
  },
  {
    coordinates: [5.5719, 50.6337], // Liège
    title: "Max",
    description: "Perdu depuis hier",
    type: "lost",
    date: "13/02/24 - 14:30",
    tags: ["Peureux", "Chat Noir"],
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=400&auto=format&fit=crop",
  },
];

export default {
  name: "Map",

  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({
        lng: 4.3517,
        lat: 50.8503,
        zoom: 8,
        bearing: 0,
        pitch: 45,
      }),
    },
  },

  data: () => ({
    map: null,
    markers: [],
  }),

  mounted() {
    const { lng, lat, zoom, bearing, pitch } = this.modelValue;

    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      bearing,
      pitch,
      zoom,
      minZoom: 6,
      maxZoom: 15,
    });

    // Ajouter les contrôles de navigation
    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      })
    );

    const updateLocation = () =>
      this.$emit("update:modelValue", this.getLocation());

    map.on("load", () => {
      this.addCatMarkers();
      this.$emit("map-loaded", map);
    });

    map.on("move", updateLocation);
    map.on("zoom", updateLocation);
    map.on("rotate", updateLocation);
    map.on("pitch", updateLocation);

    this.map = map;
  },

  unmounted() {
    // Nettoyer les marqueurs
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];

    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  },

  watch: {
    modelValue(next) {
      if (!this.map) return;

      const curr = this.getLocation();
      const map = this.map;

      if (curr.lng !== next.lng || curr.lat !== next.lat)
        map.setCenter({ lng: next.lng, lat: next.lat });
      if (curr.pitch !== next.pitch) map.setPitch(next.pitch);
      if (curr.bearing !== next.bearing) map.setBearing(next.bearing);
      if (curr.zoom !== next.zoom) map.setZoom(next.zoom);
    },
  },

  methods: {
    getLocation() {
      if (!this.map) return this.modelValue;

      const center = this.map.getCenter();
      return {
        lng: center.lng,
        lat: center.lat,
        bearing: this.map.getBearing(),
        pitch: this.map.getPitch(),
        zoom: this.map.getZoom(),
      };
    },

    addCatMarkers() {
      cats.forEach((cat) => {
        // Créer l'élément du marqueur
        const el = document.createElement("div");
        el.className = "cat-marker";

        // Créer le HTML du marqueur
        const markerHtml = `
          <div class="relative group">
            <div class="w-24 h-24 rounded-full overflow-hidden border-8 ${
              cat.type === "lost" ? "border-red-500" : "border-green-500"
            } transform transition-transform duration-300 hover:scale-110 bg-white shadow-lg cursor-pointer">
              <img src="${cat.image}" alt="${
          cat.title
        }" class="w-full h-full object-cover" />
            </div>
          </div>
        `;
        el.innerHTML = markerHtml;

        // Créer le popup
        const popup = new mapboxgl.Popup({ offset: [0, -10] }).setHTML(`
          <div class="p-4 min-w-[250px]">
            <div class="relative h-48 mb-4 rounded-xl overflow-hidden">
              <img src="${cat.image}" alt="${
          cat.title
        }" class="w-full h-full object-cover" />
              <div class="absolute top-4 left-4">
                <span class="px-4 py-2 rounded-full text-white font-bold ${
                  cat.type === "lost" ? "bg-red-500" : "bg-green-500"
                }">
                  ${cat.type === "lost" ? "Perdu" : "Trouvé"}
                </span>
              </div>
            </div>
            
            <div class="flex items-center gap-2 mb-2">
              <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span class="text-lg font-semibold">${
                cat.title
              } - ${cat.coordinates[1].toFixed(
          4
        )}, ${cat.coordinates[0].toFixed(4)}</span>
            </div>

            <div class="flex items-center gap-2 mb-3">
              <svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
              </svg>
              <span class="text-gray-600">${cat.date}</span>
            </div>

            <div class="mb-3">
              <span class="text-gray-600">${cat.description}</span>
            </div>

            <div class="flex flex-wrap gap-2">
              ${cat.tags
                .map(
                  (tag) =>
                    `<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">${tag}</span>`
                )
                .join("")}
            </div>
          </div>
        `);

        // Créer et ajouter le marqueur
        const marker = new mapboxgl.Marker(el)
          .setLngLat(cat.coordinates)
          .setPopup(popup)
          .addTo(this.map);

        this.markers.push(marker);
      });
    },
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 100%;
}

.cat-marker {
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 350px !important;
}

.mapboxgl-popup-content {
  padding: 0 !important;
  border-radius: 16px !important;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
}

.mapboxgl-popup-close-button {
  padding: 6px !important;
  font-size: 18px !important;
  color: #4b5563 !important;
}

/* Styles Mapbox nécessaires */
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

.mapboxgl-marker {
  transform: scale(1.2);
}
</style>
