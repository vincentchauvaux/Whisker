<template>
  <MainLayout>
    <div class="bg-white">
      <main class="pt-24 pb-16">
        <div class="container mx-auto px-4 max-w-4xl">
          <div v-if="loading" class="flex justify-center py-12">
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
            ></div>
          </div>

          <div v-else-if="!userData" class="text-center py-12">
            <p class="text-xl text-gray-600 font-sans">
              Vous n'êtes pas connecté.
            </p>
            <button
              @click="router.push('/')"
              class="mt-4 px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>

          <div v-else class="bg-white shadow-lg rounded-2xl overflow-hidden">
            <!-- En-tête du profil avec bannière personnalisable -->
            <div class="h-48 relative" :style="bannerStyle">
              <!-- Bouton pour modifier la bannière (visible uniquement pour l'utilisateur actuel) -->
              <button
                v-if="isCurrentUser"
                @click="showBannerModal = true"
                class="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                title="Modifier la bannière"
              >
                <svg
                  class="w-5 h-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>

              <div
                class="absolute bottom-0 left-0 w-full transform translate-y-1/2 flex justify-center"
              >
                <img
                  :src="userData.photoURL || '/default-avatar.png'"
                  alt="Photo de profil"
                  class="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            <!-- Informations du profil -->
            <div class="pt-20 pb-8 px-8">
              <h1
                class="text-3xl font-bold text-center text-primary font-serif"
              >
                {{ userData.displayName }}
              </h1>
              <p class="text-gray-500 text-center mt-2 font-sans">
                {{ userData.email }}
              </p>

              <!-- Bouton d'édition du profil (visible uniquement pour l'utilisateur actuel) -->
              <div v-if="isCurrentUser" class="flex justify-center mt-4">
                <button
                  @click="showProfileModal = true"
                  class="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors flex items-center gap-2"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Modifier mon profil
                </button>
              </div>

              <div class="mt-8 border-t border-gray-200 pt-8">
                <h2 class="text-xl font-semibold text-primary font-serif mb-4">
                  Informations du compte
                </h2>

                <div class="space-y-4">
                  <div
                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                  >
                    <span class="text-gray-600 font-sans">Membre depuis</span>
                    <span class="font-medium text-gray-900 font-sans">{{
                      formatDate(userData.createdAt)
                    }}</span>
                  </div>

                  <div
                    class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                  >
                    <span class="text-gray-600 font-sans"
                      >Dernière connexion</span
                    >
                    <span class="font-medium text-gray-900 font-sans">{{
                      formatDate(userData.lastLogin)
                    }}</span>
                  </div>

                  <!-- Informations de contact -->
                  <div
                    v-if="
                      userData.phone ||
                      userData.address ||
                      userData.city ||
                      userData.website
                    "
                    class="mt-6"
                  >
                    <h3
                      class="text-lg font-semibold text-primary font-serif mb-3"
                    >
                      Informations de contact
                    </h3>

                    <div
                      v-if="userData.phone"
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                    >
                      <span class="text-gray-600 font-sans">Téléphone</span>
                      <span class="font-medium text-gray-900 font-sans">{{
                        userData.phone
                      }}</span>
                    </div>

                    <div
                      v-if="userData.address"
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                    >
                      <span class="text-gray-600 font-sans">Adresse</span>
                      <span class="font-medium text-gray-900 font-sans">{{
                        userData.address
                      }}</span>
                    </div>

                    <div
                      v-if="userData.city"
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                    >
                      <span class="text-gray-600 font-sans">Ville</span>
                      <span class="font-medium text-gray-900 font-sans">{{
                        userData.city
                      }}</span>
                    </div>

                    <div
                      v-if="userData.website"
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100"
                    >
                      <span class="text-gray-600 font-sans">Site web</span>
                      <a
                        :href="userData.website"
                        target="_blank"
                        class="font-medium text-secondary hover:text-secondary-dark font-sans"
                        >{{ userData.website }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 border-t border-gray-200 pt-8">
                <h2 class="text-xl font-semibold text-primary font-serif mb-4">
                  {{
                    isCurrentUser
                      ? "Mes signalements"
                      : "Signalements de " + userData.displayName
                  }}
                </h2>

                <div v-if="userPets.length === 0" class="text-center py-8">
                  <p class="text-gray-500 font-sans">
                    {{
                      isCurrentUser
                        ? "Vous n'avez pas encore créé de signalements."
                        : "Cet utilisateur n'a pas encore créé de signalements."
                    }}
                  </p>
                  <button
                    v-if="isCurrentUser"
                    @click="router.push('/')"
                    class="mt-4 px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors"
                  >
                    Créer un signalement
                  </button>
                </div>

                <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div
                    v-for="pet in userPets"
                    :key="pet.id"
                    class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <router-link
                      :to="{ name: 'PetDetailsPage', params: { id: pet.id } }"
                      class="block"
                    >
                      <div class="flex items-start gap-4">
                        <img
                          :src="
                            pet.images && pet.images.length > 0
                              ? pet.images[0]
                              : '/default-cat.jpg'
                          "
                          alt="Photo de l'animal"
                          class="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h3 class="font-medium text-primary font-serif">
                            {{ pet.name || "Sans nom" }}
                          </h3>
                          <p class="text-sm text-gray-600 font-sans">
                            {{ pet.breed }}
                          </p>
                          <span
                            :class="[
                              'inline-block px-2 py-1 text-xs rounded-full mt-2',
                              pet.status === 'lost'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-green-100 text-green-800',
                            ]"
                          >
                            {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                          </span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Calendrier de santé des animaux -->
              <div
                v-if="userPets.length > 0"
                class="mt-8 border-t border-gray-200 pt-8"
              >
                <PetHealthCalendar
                  :userId="userData.id"
                  :userPets="userPets"
                  :isCurrentUser="isCurrentUser"
                />
              </div>

              <div v-if="isCurrentUser" class="mt-8 flex justify-center">
                <button
                  @click="logout"
                  class="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors font-sans"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal pour modifier la bannière -->
    <div
      v-if="showBannerModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="showBannerModal = false"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg font-medium text-gray-900 font-serif mb-4">
              Personnaliser la bannière
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Couleur de fond</label
                >
                <input
                  type="color"
                  v-model="bannerForm.backgroundColor"
                  class="w-full h-10 rounded-md cursor-pointer"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Image de bannière (URL)</label
                >
                <input
                  type="text"
                  v-model="bannerForm.backgroundImage"
                  placeholder="https://exemple.com/image.jpg"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
                <p class="mt-1 text-xs text-gray-500">
                  Laissez vide pour utiliser uniquement la couleur
                </p>
              </div>

              <div class="mt-4">
                <h4 class="text-sm font-medium text-gray-700 mb-2">Aperçu</h4>
                <div
                  class="h-24 rounded-md w-full"
                  :style="previewBannerStyle"
                ></div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="saveBanner"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
            >
              Enregistrer
            </button>
            <button
              @click="showBannerModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal pour modifier le profil -->
    <div
      v-if="showProfileModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-modal="true"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="showProfileModal = false"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg font-medium text-gray-900 font-serif mb-4">
              Modifier mon profil
            </h3>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Nom d'affichage</label
                >
                <input
                  type="text"
                  v-model="profileForm.displayName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Téléphone</label
                >
                <input
                  type="tel"
                  v-model="profileForm.phone"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Adresse</label
                >
                <input
                  type="text"
                  v-model="profileForm.address"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Ville</label
                >
                <input
                  type="text"
                  v-model="profileForm.city"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Site web</label
                >
                <input
                  type="url"
                  v-model="profileForm.website"
                  placeholder="https://exemple.com"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="saveProfile"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
            >
              Enregistrer
            </button>
            <button
              @click="showProfileModal = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { userService } from "../services/userService";
import { petService } from "../services/petService";
import MainLayout from "../layouts/MainLayout.vue";
import PetHealthCalendar from "../components/PetHealthCalendar.vue";

const router = useRouter();
const userData = ref(null);
const userPets = ref([]);
const loading = ref(true);
const isCurrentUser = ref(true);

// Modals
const showBannerModal = ref(false);
const showProfileModal = ref(false);

// Formulaires
const bannerForm = ref({
  backgroundColor: "#E9EDF2", // Couleur par défaut (primary-light)
  backgroundImage: "",
});

const profileForm = ref({
  displayName: "",
  phone: "",
  address: "",
  city: "",
  website: "",
});

// Style calculé pour la bannière
const bannerStyle = computed(() => {
  const style = {
    backgroundColor: userData.value?.bannerColor || "#E9EDF2",
  };

  if (userData.value?.bannerImage) {
    style.backgroundImage = `url(${userData.value.bannerImage})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
  }

  return style;
});

// Style d'aperçu pour la bannière
const previewBannerStyle = computed(() => {
  const style = {
    backgroundColor: bannerForm.value.backgroundColor,
  };

  if (bannerForm.value.backgroundImage) {
    style.backgroundImage = `url(${bannerForm.value.backgroundImage})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
  }

  return style;
});

const props = defineProps({
  userId: {
    type: String,
    default: null,
  },
});

onMounted(async () => {
  try {
    // Déterminer quel utilisateur afficher
    const currentUser = auth.currentUser;

    if (props.userId && props.userId !== currentUser.uid) {
      // Afficher le profil d'un autre utilisateur
      isCurrentUser.value = false;
      userData.value = await userService.getUserData(props.userId);

      // Récupérer les signalements de cet utilisateur
      const allPets = await petService.getAllPets();
      userPets.value = allPets.filter((pet) => pet.userId === props.userId);
    } else if (currentUser) {
      // Afficher le profil de l'utilisateur connecté
      isCurrentUser.value = true;
      userData.value = await userService.getUserData(currentUser.uid);

      // Récupérer les signalements de l'utilisateur connecté
      const allPets = await petService.getAllPets();
      userPets.value = allPets.filter((pet) => pet.userId === currentUser.uid);

      // Initialiser les formulaires avec les données existantes
      initForms();
    }
  } catch (error) {
    console.error("Erreur lors du chargement des données utilisateur:", error);
  } finally {
    loading.value = false;
  }
});

// Initialiser les formulaires avec les données existantes
const initForms = () => {
  if (userData.value) {
    // Bannière
    bannerForm.value.backgroundColor = userData.value.bannerColor || "#E9EDF2";
    bannerForm.value.backgroundImage = userData.value.bannerImage || "";

    // Profil
    profileForm.value.displayName = userData.value.displayName || "";
    profileForm.value.phone = userData.value.phone || "";
    profileForm.value.address = userData.value.address || "";
    profileForm.value.city = userData.value.city || "";
    profileForm.value.website = userData.value.website || "";
  }
};

// Enregistrer les modifications de la bannière
const saveBanner = async () => {
  try {
    if (!auth.currentUser) return;

    const bannerData = {
      bannerColor: bannerForm.value.backgroundColor,
      bannerImage: bannerForm.value.backgroundImage,
    };

    await userService.updateUserProfile(auth.currentUser.uid, bannerData);

    // Mettre à jour les données locales
    userData.value = {
      ...userData.value,
      ...bannerData,
    };

    showBannerModal.value = false;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la bannière:", error);
    alert("Une erreur est survenue lors de la mise à jour de la bannière.");
  }
};

// Enregistrer les modifications du profil
const saveProfile = async () => {
  try {
    if (!auth.currentUser) return;

    await userService.updateUserProfile(
      auth.currentUser.uid,
      profileForm.value
    );

    // Mettre à jour les données locales
    userData.value = {
      ...userData.value,
      ...profileForm.value,
    };

    showProfileModal.value = false;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du profil:", error);
    alert("Une erreur est survenue lors de la mise à jour du profil.");
  }
};

const formatDate = (timestamp) => {
  if (!timestamp) return "Date inconnue";

  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const logout = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
  }
};
</script>
