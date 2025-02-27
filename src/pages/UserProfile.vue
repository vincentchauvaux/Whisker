<template>
  <div class="bg-white">
    <Header />
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
          <!-- En-tête du profil -->
          <div class="bg-primary-light h-48 relative">
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
            <h1 class="text-3xl font-bold text-center text-primary font-serif">
              {{ userData.displayName }}
            </h1>
            <p class="text-gray-500 text-center mt-2 font-sans">
              {{ userData.email }}
            </p>

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
                    :to="{ name: 'PetDetails', params: { id: pet.id } }"
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
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { userService } from "../services/userService";
import { petService } from "../services/petService";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const router = useRouter();
const userData = ref(null);
const userPets = ref([]);
const loading = ref(true);
const isCurrentUser = ref(true);

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
    }
  } catch (error) {
    console.error("Erreur lors du chargement des données utilisateur:", error);
  } finally {
    loading.value = false;
  }
});

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
