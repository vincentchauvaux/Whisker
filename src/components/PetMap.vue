<template>
  <div
    ref="mapContainer"
    class="pet-map-container h-full w-full rounded-lg overflow-hidden"
  ></div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { STATUS_COLORS } from "../constants/colors.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGliYWxpbyIsImEiOiJjbG82M2Z0OWcwaG1xMmttdjI1YmNudWUyIn0.BnGzE7APfkeVsCrtjWTQLw";

export default {
  name: "PetMap",

  props: {
    pet: {
      type: Object,
      required: true,
    },
    zoom: {
      type: Number,
      default: 14,
    },
    height: {
      type: String,
      default: "400px",
    },
  },

  setup(props) {
    const mapContainer = ref(null);
    const map = ref(null);
    const marker = ref(null);
    const mapLoaded = ref(false);

    const coordinates = computed(() => {
      if (
        props.pet.status === "lost" &&
        props.pet.last_seen_location?.coordinates
      ) {
        const coords = props.pet.last_seen_location.coordinates;
        // Convertir du format {lat, lng} au format [lng, lat] attendu par Mapbox
        if (coords.lat !== undefined && coords.lng !== undefined) {
          return [coords.lng, coords.lat];
        }
        return coords;
      } else if (
        props.pet.status === "found" &&
        props.pet.found_location?.coordinates
      ) {
        const coords = props.pet.found_location.coordinates;
        // Convertir du format {lat, lng} au format [lng, lat] attendu par Mapbox
        if (coords.lat !== undefined && coords.lng !== undefined) {
          return [coords.lng, coords.lat];
        }
        return coords;
      }
      // Coordonnées par défaut pour Paris si aucune coordonnée n'est disponible
      return [2.3522, 48.8566];
    });

    const markerColor = computed(() => {
      return props.pet.status === "lost"
        ? STATUS_COLORS.LOST.mapMarker
        : STATUS_COLORS.FOUND.mapMarker;
    });

    const getLocationText = computed(() => {
      if (props.pet.status === "lost") {
        if (typeof props.pet.last_seen_location === "object") {
          return `Perdu à ${
            props.pet.last_seen_location.address ||
            props.pet.last_seen_location.city ||
            "localisation inconnue"
          }`;
        }
        return `Perdu à ${
          props.pet.last_seen_location || "localisation inconnue"
        }`;
      } else {
        if (typeof props.pet.found_location === "object") {
          return `Trouvé à ${
            props.pet.found_location.address ||
            props.pet.found_location.city ||
            "localisation inconnue"
          }`;
        }
        return `Trouvé à ${
          props.pet.found_location || "localisation inconnue"
        }`;
      }
    });

    const initializeMap = () => {
      // Vérifier que les coordonnées sont valides
      let coords = coordinates.value;
      if (
        !coords ||
        !Array.isArray(coords) ||
        coords.length !== 2 ||
        isNaN(coords[0]) ||
        isNaN(coords[1])
      ) {
        console.warn("Coordonnées invalides pour la carte:", coords);
        // Utiliser des coordonnées par défaut pour Paris
        coords = [2.3522, 48.8566];
      }

      try {
        map.value = new mapboxgl.Map({
          container: mapContainer.value,
          style: "mapbox://styles/mapbox/light-v11",
          center: coords,
          zoom: props.zoom,
          minZoom: 9,
          maxZoom: 17,
        });

        // Ajouter les contrôles de navigation
        map.value.addControl(
          new mapboxgl.NavigationControl({
            showCompass: true,
            showZoom: true,
            visualizePitch: true,
          })
        );

        map.value.on("load", () => {
          mapLoaded.value = true;
          addPetMarker();
        });
      } catch (error) {
        console.error("Erreur lors de l'initialisation de la carte:", error);
      }
    };

    const addPetMarker = () => {
      if (!map.value || !mapLoaded.value) return;

      try {
        // Vérifier que les coordonnées sont valides
        let coords = coordinates.value;
        if (
          !coords ||
          !Array.isArray(coords) ||
          coords.length !== 2 ||
          isNaN(coords[0]) ||
          isNaN(coords[1])
        ) {
          console.warn("Coordonnées invalides pour le marqueur:", coords);
          return;
        }

        // Créer l'élément du marqueur
        const el = document.createElement("div");
        el.className = "pet-marker";
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.borderRadius = "50%";
        el.style.backgroundColor = markerColor.value;
        el.style.border = "3px solid white";
        el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        el.style.cursor = "pointer";
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";

        // Ajouter une icône de chat
        const icon = document.createElement("div");
        icon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
          </svg>
        `;
        el.appendChild(icon);

        // Créer le popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-primary">${
              props.pet.name || "Chat sans nom"
            }</h3>
            <p class="text-sm text-gray-600">${getLocationText.value}</p>
          </div>
        `);

        // Ajouter le marqueur à la carte
        marker.value = new mapboxgl.Marker(el)
          .setLngLat(coords)
          .setPopup(popup)
          .addTo(map.value);
      } catch (error) {
        console.error("Erreur lors de l'ajout du marqueur:", error);
      }
    };

    // Observer les changements de coordonnées
    watch(coordinates, (newCoords) => {
      if (marker.value && newCoords) {
        try {
          marker.value.setLngLat(newCoords);
        } catch (error) {
          console.error("Erreur lors de la mise à jour du marqueur:", error);
        }
      }
    });

    onMounted(() => {
      initializeMap();
    });

    return {
      mapContainer,
      map,
      marker,
      mapLoaded,
      coordinates,
      markerColor,
      getLocationText,
    };
  },

  unmounted() {
    if (this.marker) {
      this.marker.remove();
    }

    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
.pet-map-container {
  min-height: 250px;
}
</style>
