<template>
  <MainLayout>
    <div class="bg-white min-h-screen">
      <main class="container mx-auto px-4 py-12">
        <!-- État de chargement -->
        <div v-if="loading" class="flex justify-center items-center py-24">
          <div
            class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"
          ></div>
        </div>

        <!-- Message d'erreur -->
        <div v-else-if="error" class="text-center py-24">
          <p class="text-red-500 text-xl">{{ error }}</p>
          <button
            @click="loadPetDetails"
            class="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Réessayer
          </button>
        </div>

        <!-- Contenu principal -->
        <div v-else-if="pet" class="max-w-6xl mx-auto">
          <!-- En-tête avec statut et navigation -->
          <div class="flex flex-wrap justify-between items-center mb-8">
            <div class="flex items-center gap-4 mb-4 md:mb-0">
              <router-link
                to="/pets"
                class="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Retour à la liste</span>
              </router-link>
              <span
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium',
                  pet.status === 'lost'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-green-100 text-green-800',
                ]"
              >
                {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-gray-500"
                >Publié le {{ formatDate(pet.createdAt) }}</span
              >
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Galerie d'images -->
            <div class="lg:col-span-2">
              <div v-if="pet.images && pet.images.length > 0" class="mb-8">
                <div class="relative rounded-xl overflow-hidden h-96 mb-4">
                  <img
                    :src="currentImage"
                    :alt="pet.name || 'Chat sans nom'"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  v-if="pet.images.length > 1"
                  class="flex gap-2 overflow-x-auto pb-2"
                >
                  <button
                    v-for="(image, index) in pet.images"
                    :key="index"
                    @click="currentImageIndex = index"
                    class="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden"
                    :class="{
                      'ring-2 ring-primary': currentImageIndex === index,
                    }"
                  >
                    <img
                      :src="image"
                      :alt="`Image ${index + 1} de ${
                        pet.name || 'Chat sans nom'
                      }`"
                      class="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </div>
              <div
                v-else
                class="mb-8 rounded-xl overflow-hidden h-96 bg-gray-100 flex items-center justify-center"
              >
                <span class="text-gray-400 text-lg"
                  >Aucune image disponible</span
                >
              </div>

              <!-- Informations principales -->
              <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h1 class="text-3xl font-bold text-gray-900 mb-4 font-serif">
                  {{ pet.name || "Chat sans nom" }}
                </h1>

                <div class="flex flex-wrap gap-4 mb-6">
                  <div v-if="pet.breed" class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-700">Race: {{ pet.breed }}</span>
                  </div>
                  <div v-if="pet.color" class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.64 1.06 0.64 1.67 0A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"
                        fill="currentColor"
                      />
                      <circle cx="6.5" cy="11.5" r="1.5" fill="currentColor" />
                      <circle cx="9.5" cy="7.5" r="1.5" fill="currentColor" />
                      <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" />
                      <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor" />
                    </svg>
                    <span class="text-gray-700">Couleur: {{ pet.color }}</span>
                  </div>
                  <div v-if="pet.age" class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-700">Âge: {{ pet.age }}</span>
                  </div>
                  <div v-if="pet.gender" class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-700"
                      >Sexe:
                      {{ pet.gender === "male" ? "Mâle" : "Femelle" }}</span
                    >
                  </div>
                </div>

                <div v-if="pet.description" class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Description
                  </h2>
                  <p class="text-gray-700 whitespace-pre-line">
                    {{ pet.description }}
                  </p>
                </div>

                <div v-if="pet.status === 'lost'" class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Dernière fois aperçu
                  </h2>
                  <div class="flex items-start gap-2">
                    <svg
                      class="w-5 h-5 text-primary mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p class="text-gray-700">
                        {{ getLocationText(pet) }}
                      </p>
                      <p
                        v-if="pet.last_seen_date"
                        class="text-gray-500 text-sm mt-1"
                      >
                        Le {{ formatDate(pet.last_seen_date) }}
                      </p>
                    </div>
                  </div>
                </div>

                <div v-else-if="pet.status === 'found'" class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Lieu de découverte
                  </h2>
                  <div class="flex items-start gap-2">
                    <svg
                      class="w-5 h-5 text-primary mt-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p class="text-gray-700">
                        {{ getLocationText(pet) }}
                      </p>
                      <p
                        v-if="pet.found_date"
                        class="text-gray-500 text-sm mt-1"
                      >
                        Le {{ formatDate(pet.found_date) }}
                      </p>
                    </div>
                  </div>
                </div>

                <div v-if="pet.microchipped !== undefined" class="mb-6">
                  <h2 class="text-xl font-bold text-gray-900 mb-3 font-serif">
                    Informations supplémentaires
                  </h2>
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5"
                      :class="
                        pet.microchipped ? 'text-green-500' : 'text-red-500'
                      "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="text-gray-700">
                      {{ pet.microchipped ? "Pucé" : "Non pucé" }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar avec informations de contact -->
            <div class="lg:col-span-1">
              <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Contact
                </h2>

                <div v-if="petOwner" class="mb-6">
                  <div class="flex items-center gap-3 mb-4">
                    <div
                      class="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"
                    >
                      <img
                        v-if="petOwner.photoURL"
                        :src="petOwner.photoURL"
                        :alt="petOwner.displayName || 'Utilisateur'"
                        class="w-full h-full object-cover"
                      />
                      <div
                        v-else
                        class="w-full h-full flex items-center justify-center bg-primary text-white text-xl font-bold"
                      >
                        {{ getInitials(petOwner.displayName) }}
                      </div>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">
                        {{ petOwner.displayName || "Utilisateur" }}
                      </p>
                      <p class="text-sm text-gray-500">
                        Membre depuis {{ formatDate(petOwner.createdAt, true) }}
                      </p>
                    </div>
                  </div>

                  <div
                    v-if="petOwner.email"
                    class="flex items-center gap-2 mb-3"
                  >
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        fill="currentColor"
                      />
                    </svg>
                    <a
                      :href="`mailto:${petOwner.email}`"
                      class="text-primary hover:underline"
                    >
                      {{ petOwner.email }}
                    </a>
                  </div>

                  <div v-if="petOwner.phone" class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                        fill="currentColor"
                      />
                    </svg>
                    <a
                      :href="`tel:${petOwner.phone}`"
                      class="text-primary hover:underline"
                    >
                      {{ petOwner.phone }}
                    </a>
                  </div>
                </div>

                <div v-else class="mb-6 text-gray-500">
                  Informations de contact non disponibles
                </div>

                <div class="flex flex-col gap-3">
                  <button
                    v-if="petOwner && petOwner.email"
                    class="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                        fill="currentColor"
                      />
                    </svg>
                    Contacter par email
                  </button>
                  <button
                    v-if="petOwner && petOwner.phone"
                    class="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                        fill="currentColor"
                      />
                    </svg>
                    Appeler
                  </button>
                </div>
              </div>

              <!-- Carte de localisation -->
              <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Localisation
                </h2>
                <div class="h-64 rounded-lg overflow-hidden">
                  <PetMap v-if="pet" :pet="pet" />
                </div>
                <p class="mt-3 text-gray-700">
                  {{ getLocationText(pet) }}
                </p>
              </div>

              <!-- Signaler -->
              <div class="bg-white rounded-xl shadow-sm p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Signaler
                </h2>
                <button
                  class="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"
                      fill="currentColor"
                    />
                  </svg>
                  Signaler cette annonce
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Aucun chat trouvé -->
        <div v-else class="text-center py-24">
          <p class="text-gray-500 text-xl">Chat non trouvé</p>
          <router-link
            to="/pets"
            class="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Retour à la liste des chats
          </router-link>
        </div>
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { inject, getCurrentInstance } from "vue";
import MainLayout from "../../layouts/MainLayout.vue";
import PetMap from "../../components/PetMap.vue";

// Accéder au store et à la route
const { proxy } = getCurrentInstance();
const petStore = proxy.$petStore;
const userStore = proxy.$userStore;
const route = useRoute();

// État local
const loading = ref(false);
const error = ref(null);
const currentImageIndex = ref(0);
const petOwner = ref(null);

// Obtenir l'ID du chat depuis les paramètres de route
const petId = computed(() => route.params.id);

// Image actuelle dans la galerie
const currentImage = computed(() => {
  if (!pet.value || !pet.value.images || pet.value.images.length === 0) {
    return "https://via.placeholder.com/800x600?text=Pas+d%27image";
  }
  return pet.value.images[currentImageIndex.value];
});

// Référence au chat actuel
const pet = computed(() => {
  return petStore.getPetById(petId.value);
});

// Charger les détails du chat
const loadPetDetails = async () => {
  if (!petId.value) return;

  loading.value = true;
  error.value = null;

  try {
    // Charger les détails du chat
    await petStore.fetchPetById(petId.value);

    // Si le chat a un propriétaire, charger ses informations
    if (pet.value && pet.value.userId) {
      try {
        const ownerData = await userStore.fetchUserProfile(pet.value.userId);
        petOwner.value = ownerData;
      } catch (err) {
        console.error(
          "Erreur lors du chargement des informations du propriétaire:",
          err
        );
        // Ne pas afficher d'erreur à l'utilisateur pour cette partie
      }
    }
  } catch (err) {
    console.error("Erreur lors du chargement des détails du chat:", err);
    error.value =
      "Impossible de charger les détails du chat. Veuillez réessayer.";
  } finally {
    loading.value = false;
  }
};

// Formater la date
const formatDate = (timestamp, dateOnly = false) => {
  if (!timestamp) return "Date inconnue";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

  if (dateOnly) {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Obtenir le texte de localisation
const getLocationText = (pet) => {
  if (pet.status === "lost" && pet.last_seen_location) {
    return (
      pet.last_seen_location.address ||
      pet.last_seen_location.city ||
      "Lieu inconnu"
    );
  } else if (pet.status === "found" && pet.found_location) {
    return (
      pet.found_location.address || pet.found_location.city || "Lieu inconnu"
    );
  }
  return "Lieu inconnu";
};

// Obtenir les initiales d'un nom
const getInitials = (name) => {
  if (!name) return "?";
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

// Observer les changements d'ID pour recharger les données
watch(petId, () => {
  loadPetDetails();
});

// Charger les données au montage du composant
onMounted(() => {
  loadPetDetails();
});
</script>
