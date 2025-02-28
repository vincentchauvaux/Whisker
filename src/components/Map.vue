<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ref, onMounted, computed, watch } from "vue";
import { getTagColorClass, STATUS_COLORS } from "../constants/colors.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGliYWxpbyIsImEiOiJjbG82M2Z0OWcwaG1xMmttdjI1YmNudWUyIn0.BnGzE7APfkeVsCrtjWTQLw";

export default {
  name: "Map",

  props: {
    modelValue: {
      type: Object,
      required: true,
      default: () => ({
        lng: 4.399,
        lat: 50.7184,
        zoom: 12,
        bearing: 0,
        pitch: 45,
      }),
    },
    activeFilter: {
      type: String,
      default: "all",
      validator: (value) => ["all", "lost", "found"].includes(value),
    },
  },

  data: () => ({
    map: null,
    markers: [],
    cats: [],
    loading: false,
    error: null,
  }),

  mounted() {
    const { lng, lat, zoom, bearing, pitch } = this.modelValue;

    const map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: "mapbox://styles/mapbox/light-v11",
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

    map.on("load", async () => {
      await this.loadPetsData();
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
    activeFilter() {
      // Mettre à jour les marqueurs lorsque le filtre change
      this.updateMarkers();
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

    async loadPetsData() {
      this.loading = true;
      this.error = null;

      try {
        // Récupérer tous les animaux via le store
        await this.$petStore.fetchLostPets();
        await this.$petStore.fetchFoundPets();

        const lostPets = this.$petStore.getLostPets();
        const foundPets = this.$petStore.getFoundPets();

        // Coordonnées de Waterloo, Belgique
        const waterlooLat = 50.7184;
        const waterlooLng = 4.399;

        // Rayon maximum en degrés (environ 5km)
        const maxRadius = 0.05;

        // Formater les données pour l'affichage sur la carte
        this.cats = [...lostPets, ...foundPets].map((pet) => {
          // Générer des coordonnées aléatoires autour de Waterloo
          const randomAngle = Math.random() * 2 * Math.PI;
          const randomRadius = Math.random() * maxRadius;
          const randomLat = waterlooLat + randomRadius * Math.cos(randomAngle);
          const randomLng = waterlooLng + randomRadius * Math.sin(randomAngle);

          // Calculer le temps écoulé
          const createdDate = pet.createdAt?.toDate() || new Date();
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
            coordinates: [randomLng, randomLat],
            title: pet.name || "Chat sans nom",
            description: pet.description || "Aucune description disponible",
            type: pet.status,
            date: formattedDate,
            tags: [pet.breed, pet.color].filter(Boolean),
            image:
              pet.images && pet.images.length > 0
                ? pet.images[0]
                : "https://via.placeholder.com/400x300?text=Pas+d%27image",
          };
        });
      } catch (err) {
        console.error(
          "Erreur lors du chargement des animaux pour la carte:",
          err
        );
        this.error = "Impossible de charger les données pour la carte.";
      } finally {
        this.loading = false;
      }
    },

    updateMarkers() {
      // Supprimer tous les marqueurs existants
      this.markers.forEach((marker) => marker.remove());
      this.markers = [];

      // Ajouter les nouveaux marqueurs filtrés
      this.addCatMarkers();
    },

    addCatMarkers() {
      // Nettoyer les marqueurs existants
      this.markers.forEach((marker) => marker.remove());
      this.markers = [];

      if (this.cats.length === 0) {
        console.warn(
          "Aucun animal avec des coordonnées valides pour afficher sur la carte"
        );
        return;
      }

      // Filtrer les chats en fonction du filtre actif
      const filteredCats =
        this.activeFilter === "all"
          ? this.cats
          : this.cats.filter((cat) => cat.type === this.activeFilter);

      // Utiliser la fonction importée depuis constants/colors.js

      filteredCats.forEach((cat) => {
        // Créer un élément pour le marqueur
        const el = document.createElement("div");
        el.className = "cat-marker";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "50%";
        el.style.backgroundColor =
          cat.type === "lost"
            ? STATUS_COLORS.LOST.mapMarker
            : STATUS_COLORS.FOUND.mapMarker;
        el.style.border = "3px solid white";
        el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        el.style.cursor = "pointer";

        // Créer le HTML du marqueur
        const markerHtml = `
          <div class="relative group">
            <div class="w-24 h-24 rounded-full overflow-hidden border-8 ${
              cat.type === "lost" ? "border-red-500" : "border-green-500"
            } transform transition-transform duration-300 hover:scale-110 bg-white shadow-lg cursor-pointer">
              <img src="${cat.image}" alt="${
          cat.title
        }" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Pas+d%27image'" />
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
        }" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Pas+d%27image'" />
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

            <div class="flex flex-wrap gap-2 mb-4">
              ${cat.tags
                .map(
                  (tag) =>
                    `<span class="${getTagColorClass(
                      tag
                    )} px-3 py-1 rounded-full text-sm">${tag}</span>`
                )
                .join("")}
            </div>
            
            <button 
              class="block w-full bg-secondary text-white py-2 px-4 rounded-full text-center font-medium hover:bg-secondary-dark transition-colors"
              onclick="window.dispatchEvent(new CustomEvent('navigate-to-pet', { detail: { id: '${
                cat.id
              }' } }))"
            >
              Voir les détails
            </button>
          </div>
        `);

        // Créer et ajouter le marqueur à la carte
        const marker = new mapboxgl.Marker(el)
          .setLngLat(cat.coordinates)
          .setPopup(popup)
          .addTo(this.map);

        // Stocker le marqueur pour pouvoir le supprimer plus tard
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
