<template>
  <section class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="container mx-auto px-4">
      <h2
        class="text-center text-4xl font-bold tracking-tight text-primary sm:text-6xl font-serif"
      >
        Ils nous font confiance
      </h2>
      <div
        class="mx-auto mt-20 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none"
      >
        <!-- SPA -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110 cursor-pointer"
          @click="openModal(sponsors[0])"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >SRPA Belgique</span
          >
        </div>

        <!-- Clinique Vétérinaire -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110 cursor-pointer"
          @click="openModal(sponsors[1])"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >Ordre des Vétérinaires</span
          >
        </div>

        <!-- Refuges -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110 cursor-pointer"
          @click="openModal(sponsors[2])"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M10,2V4.26L12,5.59V4H22V19H17V21H24V2H10M7.5,5L0,10V21H15V10L7.5,5M14,6V6.93L15.61,8H16V6H14M18,6V8H20V6H18M7.5,7.5L13,11V19H10V13H5V19H2V11L7.5,7.5M18,10V12H20V10H18M18,14V16H20V14H18Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >Refuges Agréés</span
          >
        </div>

        <!-- Communes -->
        <div
          class="group relative flex flex-col items-center transition duration-300 hover:scale-110 cursor-pointer"
          @click="openModal(sponsors[3])"
        >
          <div
            class="h-24 w-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-primary-light transition duration-300"
          >
            <svg
              class="w-12 h-12 text-primary group-hover:text-primary-dark"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"
              />
            </svg>
          </div>
          <span
            class="text-lg font-medium text-primary group-hover:text-primary-dark transition duration-300"
            >Communes Belges</span
          >
        </div>
      </div>
    </div>

    <!-- Modal de description du sponsor -->
    <div
      v-if="selectedSponsor"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click.self="closeModal"
    >
      <div
        class="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 transform transition-all"
        :class="modalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold text-primary font-serif">
            {{ selectedSponsor.name }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-500">
            <svg
              class="h-6 w-6"
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
          </button>
        </div>

        <div class="flex items-center mb-4">
          <div
            class="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center mr-4"
          >
            <svg
              class="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="selectedSponsor.icon" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-500">{{ selectedSponsor.type }}</p>
            <p class="text-sm text-gray-500">{{ selectedSponsor.location }}</p>
          </div>
        </div>

        <p class="text-gray-600 mb-6">{{ selectedSponsor.description }}</p>

        <div class="flex justify-end">
          <a
            :href="selectedSponsor.website"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors"
          >
            Visiter le site
            <svg class="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Overlay pour le modal -->
    <div
      v-if="selectedSponsor"
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
      :class="modalOpen ? 'opacity-100' : 'opacity-0'"
    ></div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Données des sponsors
const sponsors = [
  {
    id: 1,
    name: "SRPA Belgique",
    type: "Organisation de protection animale",
    location: "Bruxelles, Belgique",
    description:
      "La Société Royale Protectrice des Animaux (SRPA) est une organisation belge dédiée à la protection et au bien-être des animaux. Fondée en 1875, elle gère plusieurs refuges à travers le pays et travaille activement pour lutter contre la maltraitance animale.",
    website: "https://www.srpa.be",
    icon: "M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z",
  },
  {
    id: 2,
    name: "Ordre des Vétérinaires",
    type: "Organisation professionnelle",
    location: "Belgique",
    description:
      "L'Ordre des Vétérinaires est l'organisation professionnelle qui régit la profession vétérinaire en Belgique. Il veille au respect de la déontologie, à la qualité des soins et à la formation continue des vétérinaires. Notre partenariat permet d'assurer une prise en charge rapide et professionnelle des animaux perdus ou trouvés.",
    website: "https://www.ordre-veterinaires.be",
    icon: "M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4M13 7H11V11H7V13H11V17H13V13H17V11H13V7Z",
  },
  {
    id: 3,
    name: "Refuges Agréés",
    type: "Réseau de refuges",
    location: "Belgique",
    description:
      "Notre réseau de refuges agréés comprend plus de 50 établissements à travers la Belgique. Ces refuges respectent des normes strictes de bien-être animal et travaillent en étroite collaboration avec notre plateforme pour faciliter les retrouvailles entre animaux perdus et leurs propriétaires. Ils offrent également des services d'adoption responsable.",
    website: "https://www.refuges-agrees.be",
    icon: "M10,2V4.26L12,5.59V4H22V19H17V21H24V2H10M7.5,5L0,10V21H15V10L7.5,5M14,6V6.93L15.61,8H16V6H14M18,6V8H20V6H18M7.5,7.5L13,11V19H10V13H5V19H2V11L7.5,7.5M18,10V12H20V10H18M18,14V16H20V14H18Z",
  },
  {
    id: 4,
    name: "Communes Belges",
    type: "Administrations locales",
    location: "Belgique",
    description:
      "Les communes belges sont des partenaires essentiels dans notre mission. Elles nous aident à coordonner les efforts de recherche d'animaux perdus au niveau local, à sensibiliser les citoyens et à faciliter la communication entre les différents acteurs impliqués. Grâce à ce partenariat, nous pouvons intervenir plus efficacement sur l'ensemble du territoire.",
    website: "https://www.communes-belgique.be",
    icon: "M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z",
  },
];

// État du modal
const selectedSponsor = ref(null);
const modalOpen = ref(false);

// Ouvrir le modal avec les informations du sponsor sélectionné
const openModal = (sponsor) => {
  selectedSponsor.value = sponsor;
  setTimeout(() => {
    modalOpen.value = true;
  }, 50);
};

// Fermer le modal
const closeModal = () => {
  modalOpen.value = false;
  setTimeout(() => {
    selectedSponsor.value = null;
  }, 300);
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>
