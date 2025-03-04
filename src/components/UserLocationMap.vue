<template>
  <div class="user-location-map-container">
    <div class="relative">
      <!-- Barre de recherche stylisée -->
      <div class="absolute top-4 left-0 right-0 z-10 mx-4">
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="searchPlaceholder"
            class="w-full px-4 py-3 pl-10 bg-white text-gray-700 border-0 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            @keyup="handleSearchInput"
            @keyup.enter="searchLocation"
            :disabled="isAddressSearching"
          />
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <svg
              v-if="!isAddressSearching"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg
              v-else
              class="animate-spin h-5 w-5 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>

          <!-- Bouton pour rechercher l'adresse -->
          <div class="absolute inset-y-0 right-0 flex items-center">
            <!-- Bouton de recherche standard -->
            <button
              @click="searchLocation"
              class="h-full px-3 text-orange-500 hover:text-orange-700 transition-colors"
              :disabled="isAddressSearching"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- Liste d'autocomplétion -->
          <div
            v-if="autocompleteResults.length > 0"
            class="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto"
          >
            <div
              v-for="(result, index) in autocompleteResults"
              :key="index"
              @click="selectAutocompleteResult(result)"
              :class="[
                'px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0',
                selectedAutocompleteIndex === index ? 'bg-gray-100' : '',
              ]"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-orange-500 mr-2 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <span class="text-sm text-gray-700 truncate">{{
                  result.place_name
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Conteneur de la carte -->
      <div
        ref="mapContainer"
        class="h-64 w-full rounded-xl overflow-hidden shadow-md"
      ></div>

      <!-- Bouton "Trouver ma position" -->
      <div class="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
        <button
          @click="findMyLocation"
          class="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:bg-gray-50 transition-colors flex items-center gap-2 border border-gray-200"
        >
          <svg
            v-if="!isSearching"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-orange-500 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-red-500 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span v-if="!isSearching" class="transition-all duration-300"
            >Trouver ma position</span
          >
          <span v-else class="transition-all duration-300"
            >à {{ displayDistance }} km</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch, onUnmounted } from "vue";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Clé d'API Mapbox
mapboxgl.accessToken =
  "pk.eyJ1IjoidGliYWxpbyIsImEiOiJjbG82M2Z0OWcwaG1xMmttdjI1YmNudWUyIn0.BnGzE7APfkeVsCrtjWTQLw";

export default {
  name: "UserLocationMap",

  props: {
    userData: {
      type: Object,
      required: true,
    },
    zoom: {
      type: Number,
      default: 13,
    },
    height: {
      type: String,
      default: "400px",
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const mapContainer = ref(null);
    const map = ref(null);
    const marker = ref(null);
    const mapLoaded = ref(false);
    const searchQuery = ref("");
    const isSearching = ref(false);
    const isAddressSearching = ref(false);
    const displayDistance = ref(0);
    const targetDistance = ref(0);
    const animationInterval = ref(null);
    const autocompleteResults = ref([]);
    const autocompleteTimeout = ref(null);
    const selectedAutocompleteIndex = ref(-1);

    // Placeholder pour la barre de recherche
    const searchPlaceholder = computed(() => {
      // Si l'utilisateur a une adresse, l'utiliser
      if (props.userData.address) {
        return props.userData.address;
      }

      // Sinon, construire le placeholder à partir des données utilisateur
      if (props.userData.address && props.userData.city) {
        return `${props.userData.address}, ${props.userData.city}`;
      } else if (props.userData.city && props.userData.country) {
        return `${props.userData.city}, ${props.userData.country}`;
      } else if (props.userData.city) {
        return props.userData.city;
      } else if (props.userData.country) {
        return props.userData.country;
      }

      // Valeur par défaut
      return "Braine-l'Alleud, Belgique";
    });

    // Calculer les coordonnées à partir des données utilisateur
    const coordinates = computed(() => {
      // Si l'utilisateur a des coordonnées enregistrées
      if (props.userData.coordinates) {
        const coords = props.userData.coordinates;
        // Convertir du format {lat, lng} au format [lng, lat] attendu par Mapbox
        if (coords.lat !== undefined && coords.lng !== undefined) {
          return [coords.lng, coords.lat];
        }
        return coords;
      }

      // Si aucune coordonnée n'est disponible, utiliser les coordonnées par défaut pour Braine-l'Alleud
      return [4.3687, 50.6837];
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
        // Utiliser des coordonnées pour Braine-l'Alleud
        coords = [4.3687, 50.6837];
      }

      try {
        // Définir la hauteur du conteneur de la carte
        if (mapContainer.value) {
          mapContainer.value.style.height = props.height;
        }

        map.value = new mapboxgl.Map({
          container: mapContainer.value,
          style: "mapbox://styles/mapbox/light-v11",
          center: coords,
          zoom: props.zoom,
          minZoom: 2,
          maxZoom: 18,
          // Désactiver les contrôles par défaut pour une carte épurée
          attributionControl: false,
          boxZoom: false,
          doubleClickZoom: false,
          dragRotate: false,
          dragPan: true,
          keyboard: false,
          scrollZoom: false,
          touchZoomRotate: false,
        });

        // Ne pas ajouter les contrôles de navigation pour une carte épurée
        // Ajouter uniquement le contrôle d'attribution (obligatoire pour les conditions d'utilisation de Mapbox)
        map.value.addControl(
          new mapboxgl.AttributionControl({
            compact: true,
            customAttribution: null,
          }),
          "bottom-right"
        );

        // Gérer l'événement styleimagemissing pour éviter les erreurs d'images manquantes
        map.value.on("styleimagemissing", (e) => {
          const id = e.id; // id de l'image manquante
          console.log(`Création de l'image manquante: ${id}`);

          // Créer une image de remplacement
          const width = 20;
          const height = 20;
          const data = new Uint8Array(width * height * 4);

          // Remplir avec une couleur transparente
          for (let i = 0; i < width * height; i++) {
            data[i * 4] = 0; // r
            data[i * 4 + 1] = 0; // g
            data[i * 4 + 2] = 0; // b
            data[i * 4 + 3] = 0; // a
          }

          map.value.addImage(id, { width, height, data });
        });

        map.value.on("load", () => {
          mapLoaded.value = true;

          // Rechercher directement l'adresse spécifique
          const defaultAddress = searchPlaceholder.value;
          searchLocation(defaultAddress).then((result) => {
            if (!result) {
              // Si la recherche échoue, utiliser les coordonnées par défaut et le géocodage inverse
              reverseGeocode(coords).then((address) => {
                addUserMarker(address || defaultAddress);
                // Ne pas afficher le popup automatiquement
              });
            }
          });

          // Si la carte est éditable, permettre de cliquer pour placer un marqueur
          if (props.isEditable) {
            map.value.on("click", async (e) => {
              const newCoords = [e.lngLat.lng, e.lngLat.lat];

              // Effectuer un géocodage inverse pour obtenir l'adresse
              const address = await reverseGeocode(newCoords);

              // Mettre à jour le marqueur avec la nouvelle position et adresse
              updateMarkerPosition(newCoords, address);

              // Afficher le popup uniquement en mode édition
              if (marker.value && props.isEditable) {
                marker.value.togglePopup();
              }
            });
          }
        });
      } catch (error) {
        console.error("Erreur lors de l'initialisation de la carte:", error);
      }
    };

    const addUserMarker = (address = null) => {
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

        // Créer le conteneur du marqueur
        const container = document.createElement("div");
        container.className = "marker-container";
        container.style.position = "relative";
        container.style.width = "40px";
        container.style.height = "50px"; // Plus haut pour inclure la pointe

        // Créer l'élément du marqueur (cercle)
        const el = document.createElement("div");
        el.className = "user-marker";
        el.style.width = "40px";
        el.style.height = "40px";
        el.style.borderRadius = "50%";
        el.style.backgroundColor = "#F59E0B"; // Couleur orange pour le marqueur
        el.style.border = "3px solid white";
        el.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        el.style.position = "absolute";
        el.style.top = "0";
        el.style.left = "0";
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";

        // Créer la pointe du marqueur
        const pointer = document.createElement("div");
        pointer.style.position = "absolute";
        pointer.style.bottom = "0";
        pointer.style.left = "50%";
        pointer.style.transform = "translateX(-50%)";
        pointer.style.width = "0";
        pointer.style.height = "0";
        pointer.style.borderLeft = "10px solid transparent";
        pointer.style.borderRight = "10px solid transparent";
        pointer.style.borderTop = "10px solid #F59E0B"; // Même couleur que le cercle

        // Ajouter une icône d'utilisateur
        const icon = document.createElement("div");
        icon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        `;
        el.appendChild(icon);

        // Assembler le marqueur
        container.appendChild(el);
        container.appendChild(pointer);

        // Créer le popup avec l'adresse personnalisée si disponible
        const popup = new mapboxgl.Popup({
          offset: [0, -40],
          closeButton: true,
          closeOnClick: false,
          maxWidth: "300px",
        }).setHTML(`
          <div class="p-3">
            <h3 class="font-bold text-primary text-base mb-1">${
              props.userData.displayName || "Vincent Chauvaux"
            }</h3>
            <p class="text-sm text-gray-600 break-words">${
              address || getLocationText()
            }</p>
          </div>
        `);

        // Ajouter le marqueur à la carte
        marker.value = new mapboxgl.Marker({
          element: container,
          anchor: "bottom",
        })
          .setLngLat(coords)
          .setPopup(popup)
          .addTo(map.value);

        // Si la carte est éditable, afficher le popup immédiatement
        if (props.isEditable) {
          marker.value.togglePopup();
        }

        // Émettre les coordonnées si éditable
        if (props.isEditable) {
          emit("update:coordinates", {
            lng: coords[0],
            lat: coords[1],
            fullAddress: address || fullAddress.value,
          });
        }
      } catch (error) {
        console.error("Erreur lors de l'ajout du marqueur:", error);
      }
    };

    // Mettre à jour la position du marqueur
    const updateMarkerPosition = (coords, address = null) => {
      if (marker.value && coords) {
        try {
          marker.value.setLngLat(coords);

          // Si une nouvelle adresse est fournie, mettre à jour le popup
          if (address) {
            // Créer un nouveau popup avec l'adresse mise à jour
            const popup = new mapboxgl.Popup({
              offset: [0, -40],
              closeButton: true,
              closeOnClick: false,
              maxWidth: "300px",
            }).setHTML(`
              <div class="p-3">
                <h3 class="font-bold text-primary text-base mb-1">${
                  props.userData.displayName || "Vincent Chauvaux"
                }</h3>
                <p class="text-sm text-gray-600 break-words">${
                  address || getLocationText()
                }</p>
              </div>
            `);

            // Remplacer le popup existant
            marker.value.setPopup(popup);
          }
        } catch (error) {
          console.error("Erreur lors de la mise à jour du marqueur:", error);
        }
      } else if (!marker.value && map.value && mapLoaded.value) {
        // Si le marqueur n'existe pas encore, le créer
        addUserMarker(address);
      }
    };

    // Obtenir le texte de localisation
    const getLocationText = () => {
      const parts = [];
      if (props.userData.address) parts.push(props.userData.address);
      if (props.userData.city) parts.push(props.userData.city);
      if (props.userData.country) parts.push(props.userData.country);

      return parts.join(", ") || searchPlaceholder.value;
    };

    // Variable pour stocker l'adresse complète récupérée par géocodage inverse
    const fullAddress = ref("");

    // Gérer la saisie dans le champ de recherche pour l'autocomplétion
    const handleSearchInput = (event) => {
      // Gérer la navigation dans la liste d'autocomplétion avec les touches fléchées
      if (autocompleteResults.value.length > 0) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          selectedAutocompleteIndex.value = Math.min(
            selectedAutocompleteIndex.value + 1,
            autocompleteResults.value.length - 1
          );
          scrollToSelectedItem();
          return;
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          selectedAutocompleteIndex.value = Math.max(
            selectedAutocompleteIndex.value - 1,
            -1
          );
          scrollToSelectedItem();
          return;
        } else if (
          event.key === "Enter" &&
          selectedAutocompleteIndex.value >= 0
        ) {
          event.preventDefault();
          selectAutocompleteResult(
            autocompleteResults.value[selectedAutocompleteIndex.value]
          );
          return;
        }
      }

      // Si l'utilisateur appuie sur Enter et que le champ est vide, rechercher le placeholder
      if (
        event.key === "Enter" &&
        !searchQuery.value.trim() &&
        searchPlaceholder.value
      ) {
        event.preventDefault();
        searchLocation(searchPlaceholder.value);
        return;
      }

      // Fermer la liste d'autocomplétion si l'utilisateur appuie sur Escape
      if (event.key === "Escape") {
        autocompleteResults.value = [];
        selectedAutocompleteIndex.value = -1;
        return;
      }

      // Ignorer les autres touches de navigation
      if (["Enter"].includes(event.key)) {
        return;
      }

      const query = searchQuery.value.trim();

      // Effacer les résultats si le champ est vide
      if (!query) {
        autocompleteResults.value = [];
        selectedAutocompleteIndex.value = -1;
        return;
      }

      // Utiliser un délai pour éviter trop de requêtes pendant la frappe
      clearTimeout(autocompleteTimeout.value);
      autocompleteTimeout.value = setTimeout(() => {
        fetchAutocompleteResults(query);
      }, 300);
    };

    // Faire défiler la liste pour que l'élément sélectionné soit visible
    const scrollToSelectedItem = () => {
      if (selectedAutocompleteIndex.value >= 0) {
        setTimeout(() => {
          const selectedItem = document.querySelector(".bg-gray-100");
          if (selectedItem) {
            selectedItem.scrollIntoView({
              block: "nearest",
              behavior: "smooth",
            });
          }
        }, 0);
      }
    };

    // Récupérer les suggestions d'autocomplétion
    const fetchAutocompleteResults = async (query) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            query
          )}.json?access_token=${
            mapboxgl.accessToken
          }&limit=5&types=address,place,locality,neighborhood`
        );

        const data = await response.json();

        if (data.features && data.features.length > 0) {
          autocompleteResults.value = data.features;
          selectedAutocompleteIndex.value = -1; // Réinitialiser l'index sélectionné
        } else {
          autocompleteResults.value = [];
          selectedAutocompleteIndex.value = -1;
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des suggestions:", error);
        autocompleteResults.value = [];
        selectedAutocompleteIndex.value = -1;
      }
    };

    // Sélectionner un résultat d'autocomplétion
    const selectAutocompleteResult = (result) => {
      searchQuery.value = result.place_name;
      autocompleteResults.value = [];
      selectedAutocompleteIndex.value = -1;

      // Utiliser les coordonnées du résultat sélectionné
      const newCoords = result.center; // [lng, lat]

      // Mettre à jour la carte et le marqueur
      if (map.value && mapLoaded.value) {
        // Centrer la carte sur les nouvelles coordonnées avec une animation
        map.value.flyTo({
          center: newCoords,
          zoom: 14,
          essential: true,
          duration: 1500,
        });

        // Mettre à jour le marqueur
        updateMarkerPosition(newCoords, result.place_name);

        // Afficher le popup uniquement en mode édition
        if (marker.value && props.isEditable) {
          setTimeout(() => {
            marker.value.togglePopup();
          }, 1600);
        }

        // Si éditable, émettre les nouvelles coordonnées
        if (props.isEditable) {
          // Extraire les composants de l'adresse
          let address = "";
          let city = "";
          let country = "";

          // Parcourir les contextes pour extraire les informations
          if (result.context) {
            result.context.forEach((context) => {
              if (context.id.startsWith("place.")) {
                city = context.text;
              } else if (context.id.startsWith("country.")) {
                country = context.text;
              }
            });
          }

          // L'adresse est généralement le texte principal du résultat
          address = result.text || "";

          emit("update:coordinates", {
            lng: newCoords[0],
            lat: newCoords[1],
            fullAddress: result.place_name,
            address,
            city,
            country,
          });
        }
      }
    };

    // Rechercher une localisation
    const searchLocation = async (customQuery = null) => {
      // Si aucune requête personnalisée n'est fournie et que le champ est vide,
      // utiliser le placeholder comme valeur de recherche
      let query = customQuery;
      if (!query) {
        query = searchQuery.value.trim();
        // Si le champ est toujours vide, utiliser le placeholder
        if (!query) {
          query = searchPlaceholder.value;
        }
      }

      if (!query) return;

      // Effacer les résultats d'autocomplétion
      autocompleteResults.value = [];

      // Afficher l'indicateur de chargement
      isAddressSearching.value = true;

      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            query
          )}.json?access_token=${mapboxgl.accessToken}&limit=1`
        );

        const data = await response.json();

        if (data.features && data.features.length > 0) {
          const feature = data.features[0];
          const newCoords = feature.center; // [lng, lat]

          // Stocker l'adresse complète
          fullAddress.value = feature.place_name || "";

          // Mettre à jour la carte avec une animation fluide
          map.value.flyTo({
            center: newCoords,
            zoom: 14,
            essential: true,
            duration: 1500, // durée de l'animation en ms
          });

          // Mettre à jour le marqueur avec la nouvelle adresse
          updateMarkerPosition(newCoords, fullAddress.value);

          // Afficher le popup uniquement en mode édition
          if (marker.value && props.isEditable) {
            setTimeout(() => {
              marker.value.togglePopup();
            }, 1600); // Attendre que l'animation de la carte soit terminée
          }

          // Si éditable, émettre les nouvelles coordonnées et extraire les informations d'adresse
          if (props.isEditable) {
            // Extraire les composants de l'adresse à partir du résultat
            let address = "";
            let city = "";
            let country = "";

            // Parcourir les contextes pour extraire les informations
            if (feature.context) {
              feature.context.forEach((context) => {
                if (context.id.startsWith("place.")) {
                  city = context.text;
                } else if (context.id.startsWith("country.")) {
                  country = context.text;
                }
              });
            }

            // L'adresse est généralement le texte principal du résultat
            address = feature.text || "";

            // Émettre les coordonnées et les informations d'adresse
            emit("update:coordinates", {
              lng: newCoords[0],
              lat: newCoords[1],
              fullAddress: fullAddress.value,
              address,
              city,
              country,
            });
          }

          // Mettre à jour le placeholder avec l'adresse trouvée si en mode édition
          // Sinon, conserver le placeholder original
          if (props.isEditable) {
            searchQuery.value = feature.place_name || query;
          }

          return {
            coords: newCoords,
            address: fullAddress.value,
          };
        } else {
          // Aucun résultat trouvé
          console.warn("Aucun résultat trouvé pour:", query);
          // Vous pourriez afficher un message à l'utilisateur ici
          return null;
        }
      } catch (error) {
        console.error("Erreur lors de la recherche de localisation:", error);
        return null;
      } finally {
        // Masquer l'indicateur de chargement
        isAddressSearching.value = false;
      }
    };

    // Effectuer un géocodage inverse pour obtenir l'adresse à partir des coordonnées
    const reverseGeocode = async (coords) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${mapboxgl.accessToken}&types=address,place,country`
        );

        const data = await response.json();

        if (data.features && data.features.length > 0) {
          // Stocker l'adresse complète
          fullAddress.value = data.features[0].place_name;

          // Mettre à jour le marqueur avec la nouvelle adresse, mais sans ouvrir le popup
          if (marker.value) {
            // Créer un nouveau popup avec l'adresse mise à jour
            const popup = new mapboxgl.Popup({
              offset: [0, -40],
              closeButton: true,
              closeOnClick: false,
              maxWidth: "300px",
            }).setHTML(`
              <div class="p-3">
                <h3 class="font-bold text-primary text-base mb-1">${
                  props.userData.displayName || "Vincent Chauvaux"
                }</h3>
                <p class="text-sm text-gray-600 break-words">${
                  fullAddress.value || getLocationText()
                }</p>
              </div>
            `);

            // Remplacer le popup existant sans l'ouvrir
            marker.value.setPopup(popup);
          } else {
            // Si le marqueur n'existe pas, l'ajouter avec l'adresse
            updateMarkerPosition(coords, fullAddress.value);
          }

          // Extraire les composants de l'adresse
          let address = "";
          let city = "";
          let country = "";

          data.features.forEach((feature) => {
            if (feature.place_type.includes("address") && !address) {
              address = feature.text;
            }
            if (feature.place_type.includes("place") && !city) {
              city = feature.text;
            }
            if (feature.place_type.includes("country") && !country) {
              country = feature.text;
            }
          });

          // Si éditable, émettre les informations
          if (props.isEditable) {
            emit("update:coordinates", {
              lng: coords[0],
              lat: coords[1],
              fullAddress: fullAddress.value,
              address,
              city,
              country,
            });
          }

          return fullAddress.value;
        }

        return null;
      } catch (error) {
        console.error("Erreur lors du géocodage inverse:", error);
        return null;
      }
    };

    // Observer les changements de coordonnées
    watch(coordinates, (newCoords) => {
      if (map.value && mapLoaded.value) {
        try {
          // Centrer la carte sur les nouvelles coordonnées avec une animation
          map.value.flyTo({
            center: newCoords,
            zoom: props.zoom,
            essential: true,
            duration: 1000,
          });

          // Effectuer un géocodage inverse pour obtenir l'adresse complète
          reverseGeocode(newCoords);
        } catch (error) {
          console.error("Erreur lors de la mise à jour de la carte:", error);
        }
      }
    });

    // Fonction pour trouver la position de l'utilisateur
    const findMyLocation = () => {
      // Si déjà en recherche, on réinitialise le bouton à son état original
      if (isSearching.value) {
        isSearching.value = false;
        clearInterval(animationInterval.value);
        return;
      }

      if (navigator.geolocation) {
        isSearching.value = true;
        displayDistance.value = 0;

        // Animation du compteur qui monte pendant 2 secondes
        let startTime = Date.now();
        const duration = 2000; // 2 secondes

        // Générer une distance aléatoire entre 0.5 et 5 km
        targetDistance.value = (Math.random() * 4.5 + 0.5).toFixed(1);

        // Démarrer l'animation
        clearInterval(animationInterval.value);
        animationInterval.value = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          displayDistance.value = (progress * targetDistance.value).toFixed(1);

          if (progress >= 1) {
            clearInterval(animationInterval.value);
          }
        }, 50);

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { longitude, latitude } = position.coords;
            const newCoords = [longitude, latitude];

            // Mettre à jour la carte avec une animation fluide
            map.value.flyTo({
              center: newCoords,
              zoom: 15,
              essential: true,
              duration: 1500,
            });

            // Effectuer un géocodage inverse pour obtenir l'adresse
            reverseGeocode(newCoords).then((address) => {
              // Mettre à jour le marqueur avec la nouvelle position et adresse
              updateMarkerPosition(newCoords, address);

              // Afficher le popup uniquement en mode édition
              if (marker.value && props.isEditable) {
                setTimeout(() => {
                  marker.value.togglePopup();
                }, 1600);
              }

              // L'animation est terminée, on garde l'affichage de la distance
              // mais on ne réinitialise pas isSearching pour conserver l'icône de croix
            });
          },
          (error) => {
            console.error("Erreur lors de la géolocalisation:", error);
            // Fallback: rechercher l'adresse par défaut
            searchLocation(searchPlaceholder.value);
            isSearching.value = false;
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        console.warn(
          "La géolocalisation n'est pas supportée par ce navigateur"
        );
        // Fallback: rechercher l'adresse par défaut
        searchLocation(searchPlaceholder.value);
      }
    };

    onMounted(() => {
      initializeMap();

      // Ajouter un écouteur d'événement pour fermer la liste d'autocomplétion lorsque l'utilisateur clique en dehors
      document.addEventListener("click", (event) => {
        // Vérifier si le clic est en dehors de la barre de recherche et de la liste d'autocomplétion
        const searchContainer = document.querySelector(
          ".user-location-map-container"
        );
        if (searchContainer && !searchContainer.contains(event.target)) {
          autocompleteResults.value = [];
        }
      });

      // Ajouter un écouteur d'événement pour la touche Escape
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          autocompleteResults.value = [];
        }
      });
    });

    // Nettoyer les écouteurs d'événements lors de la destruction du composant
    onUnmounted(() => {
      document.removeEventListener("click", () => {});
      document.removeEventListener("keydown", () => {});
    });

    return {
      mapContainer,
      map,
      marker,
      mapLoaded,
      coordinates,
      searchQuery,
      searchPlaceholder,
      searchLocation,
      getLocationText,
      fullAddress,
      findMyLocation,
      isSearching,
      isAddressSearching,
      displayDistance,
      autocompleteResults,
      selectedAutocompleteIndex,
      handleSearchInput,
      selectAutocompleteResult,
    };
  },
};
</script>

<style scoped>
.user-location-map-container {
  position: relative;
  width: 100%;
}

/* Styles pour les popups Mapbox */
:global(.mapboxgl-popup-content) {
  padding: 0 !important;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

:global(.mapboxgl-popup-close-button) {
  font-size: 16px;
  color: #6b7280;
  padding: 5px;
  right: 5px;
  top: 5px;
}

:global(.mapboxgl-popup-close-button:hover) {
  background-color: #f3f4f6;
  color: #4b5563;
}

/* Styles pour le marqueur */
:global(.marker-container) {
  cursor: pointer;
  transition: transform 0.2s ease;
}

:global(.marker-container:hover) {
  transform: scale(1.05);
}

/* Masquer les attributions pour une carte plus épurée */
:global(.mapboxgl-ctrl-attrib) {
  display: none !important;
}

:global(.mapboxgl-ctrl-logo) {
  display: none !important;
}

/* Styles pour les contrôles de la carte - les rendre plus discrets */
:global(.mapboxgl-ctrl-group) {
  border-radius: 8px !important;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
  opacity: 0.7;
}

:global(.mapboxgl-ctrl button) {
  background-color: white !important;
}

:global(.mapboxgl-ctrl button:hover) {
  background-color: #f3f4f6 !important;
}
</style>
