<template>
  <div
    ref="mapContainer"
    class="pet-map-container h-full w-full rounded-lg overflow-hidden"
  ></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
  },

  data: () => ({
    map: null,
    marker: null,
  }),

  computed: {
    coordinates() {
      // Si le chat a des coordonnées spécifiques, les utiliser
      if (this.pet.coordinates) {
        return this.pet.coordinates;
      }

      // Sinon, générer des coordonnées basées sur la localisation
      // Coordonnées de Waterloo, Belgique comme point central
      const waterlooLat = 50.7184;
      const waterlooLng = 4.399;

      // Si le chat a une localisation textuelle, générer des coordonnées aléatoires autour de Waterloo
      if (this.pet.status === "lost" && this.pet.last_seen_location) {
        // Rayon maximum en degrés (environ 2km)
        const maxRadius = 0.02;
        const randomAngle = Math.random() * 2 * Math.PI;
        const randomRadius = Math.random() * maxRadius;

        return [
          waterlooLng + randomRadius * Math.sin(randomAngle),
          waterlooLat + randomRadius * Math.cos(randomAngle),
        ];
      } else if (this.pet.status === "found" && this.pet.found_location) {
        // Rayon maximum en degrés (environ 2km)
        const maxRadius = 0.02;
        const randomAngle = Math.random() * 2 * Math.PI;
        const randomRadius = Math.random() * maxRadius;

        return [
          waterlooLng + randomRadius * Math.sin(randomAngle),
          waterlooLat + randomRadius * Math.cos(randomAngle),
        ];
      }

      // Par défaut, retourner les coordonnées de Waterloo
      return [waterlooLng, waterlooLat];
    },

    markerColor() {
      return this.pet.status === "lost" ? "#ef4444" : "#22c55e";
    },

    getLocationText() {
      if (this.pet.status === "lost") {
        if (typeof this.pet.last_seen_location === "object") {
          return `Perdu à ${
            this.pet.last_seen_location.address ||
            this.pet.last_seen_location.city ||
            "localisation inconnue"
          }`;
        }
        return `Perdu à ${
          this.pet.last_seen_location || "localisation inconnue"
        }`;
      } else {
        if (typeof this.pet.found_location === "object") {
          return `Trouvé à ${
            this.pet.found_location.address ||
            this.pet.found_location.city ||
            "localisation inconnue"
          }`;
        }
        return `Trouvé à ${this.pet.found_location || "localisation inconnue"}`;
      }
    },
  },

  mounted() {
    this.initializeMap();
  },

  unmounted() {
    if (this.marker) {
      this.marker.remove();
    }

    if (this.map) {
      this.map.remove();
    }
  },

  methods: {
    initializeMap() {
      const map = new mapboxgl.Map({
        container: this.$refs.mapContainer,
        style: "mapbox://styles/mapbox/light-v11",
        center: this.coordinates,
        zoom: this.zoom,
        minZoom: 9,
        maxZoom: 17,
      });

      // Ajouter les contrôles de navigation
      map.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true,
        })
      );

      map.on("load", () => {
        this.addPetMarker();
      });

      this.map = map;
    },

    addPetMarker() {
      if (!this.map) return;

      // Créer l'élément du marqueur
      const el = document.createElement("div");
      el.className = "pet-marker";
      el.style.width = "40px";
      el.style.height = "40px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = this.markerColor;
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
            this.pet.name || "Chat sans nom"
          }</h3>
          <p class="text-sm text-gray-600">${this.getLocationText}</p>
        </div>
      `);

      // Ajouter le marqueur à la carte
      this.marker = new mapboxgl.Marker(el)
        .setLngLat(this.coordinates)
        .setPopup(popup)
        .addTo(this.map);
    },
  },
};
</script>

<style scoped>
.pet-map-container {
  min-height: 250px;
}
</style>
