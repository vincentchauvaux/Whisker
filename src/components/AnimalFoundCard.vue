<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <!-- En-tête avec ID et statut -->
    <div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
      <span class="text-gray-700 font-medium">ID: {{ animal.id }}</span>
      <span
        class="px-3 py-1 rounded-full text-sm font-medium"
        :class="
          isFound
            ? STATUS_COLORS.FOUND.bg + ' ' + STATUS_COLORS.FOUND.text
            : STATUS_COLORS.LOST.bg + ' ' + STATUS_COLORS.LOST.text
        "
      >
        {{ isFound ? "Trouvé" : "Perdu" }}
      </span>
    </div>

    <!-- Image de l'animal -->
    <div class="w-full h-64 overflow-hidden">
      <img
        :src="animal.image || '/img/placeholder-animal.jpg'"
        :alt="animal.name"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Informations principales -->
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-2">{{ animal.name }}</h2>

      <!-- Caractéristiques -->
      <div class="space-y-2 mb-4">
        <div class="flex items-center">
          <span class="w-6 h-6 mr-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-gray-600"
            >
              <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
              />
            </svg>
          </span>
          <span>Race: {{ characteristics.race }}</span>
        </div>

        <div class="flex items-center">
          <span class="w-6 h-6 mr-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>Couleur: {{ characteristics.color }}</span>
        </div>

        <div class="flex items-center">
          <span class="w-6 h-6 mr-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>Sexe: {{ characteristics.gender }}</span>
        </div>
      </div>

      <!-- Lieu et date de découverte -->
      <div class="border-t border-gray-200 pt-3 space-y-2">
        <div class="flex items-start">
          <span class="w-6 h-6 mr-2 flex items-center justify-center mt-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>{{ characteristics.location }}</span>
        </div>

        <div class="flex items-center">
          <span class="w-6 h-6 mr-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-gray-600"
            >
              <path
                fill-rule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span>{{ characteristics.discoveryDate }}</span>
        </div>
      </div>

      <!-- Description -->
      <div class="mt-4">
        <p class="text-gray-700">{{ description }}</p>
      </div>
    </div>

    <!-- Actions -->
    <div class="px-4 py-3 bg-gray-50 flex justify-end space-x-2">
      <button
        class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        @click="$emit('contact')"
      >
        Contacter
      </button>
      <button
        class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
        @click="$emit('share')"
      >
        Partager
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAnimalData } from "../functions";
import { STATUS_COLORS } from "../constants/colors.js";

const props = defineProps({
  animalData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["contact", "share"]);

// Utilisation du hook pour gérer les données de l'animal
const { animal, isFound, formattedDescription, mainCharacteristics } =
  useAnimalData(props.animalData);

// Alias pour faciliter l'accès aux données
const characteristics = computed(() => mainCharacteristics.value);
const description = computed(() => formattedDescription.value);
</script>
