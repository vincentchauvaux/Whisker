<template>
  <div class="bg-white py-24">
    <div class="container mx-auto px-4">
      <!-- En-tête du profil -->
      <div class="max-w-3xl mx-auto mb-12">
        <div class="flex items-center gap-8">
          <div class="relative">
            <img
              :src="user?.photoURL || '/default-avatar.png'"
              alt="Photo de profil"
              class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <button
              @click="updatePhoto"
              class="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-secondary-dark"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-primary font-serif">
              {{ user?.displayName || "Utilisateur" }}
            </h1>
            <p class="text-gray-600 font-sans">{{ user?.email }}</p>
          </div>
        </div>
      </div>

      <!-- Informations personnelles -->
      <div
        class="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8"
      >
        <div class="p-8">
          <h2 class="text-xl font-bold text-primary mb-6 font-serif">
            Informations personnelles
          </h2>
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Nom complet</label
                >
                <input
                  v-model="userProfile.fullName"
                  type="text"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"
                  >Téléphone</label
                >
                <input
                  v-model="userProfile.phone"
                  type="tel"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Adresse</label
              >
              <input
                v-model="userProfile.address"
                type="text"
                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <button
              @click="saveProfile"
              class="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors font-sans"
            >
              Enregistrer les modifications
            </button>
          </div>
        </div>
      </div>

      <!-- Mes signalements -->
      <div class="max-w-3xl mx-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold text-primary font-serif">
            Mes signalements
          </h2>
          <button
            @click="showAddPetModal = true"
            class="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-dark transition-colors font-sans flex items-center gap-2"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Nouveau signalement
          </button>
        </div>

        <!-- Liste des signalements -->
        <div class="space-y-4">
          <div
            v-for="pet in userPets"
            :key="pet.id"
            class="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div class="flex">
              <img
                :src="pet.images[0]"
                :alt="pet.name"
                class="w-32 h-32 object-cover"
              />
              <div class="p-4 flex-1">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-primary">
                      {{ pet.name || "Chat sans nom" }}
                    </h3>
                    <p class="text-sm text-gray-600">
                      {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                    </p>
                  </div>
                  <span
                    :class="[
                      'px-2 py-1 rounded-full text-sm',
                      pet.status === 'lost'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800',
                    ]"
                  >
                    {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                  </span>
                </div>
                <p class="text-sm text-gray-600 mt-2">{{ pet.description }}</p>
                <div class="mt-4 flex justify-end gap-2">
                  <button
                    @click="editPet(pet)"
                    class="text-primary hover:text-primary-dark"
                  >
                    Modifier
                  </button>
                  <button
                    @click="deletePet(pet.id)"
                    class="text-red-600 hover:text-red-800"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal d'ajout/modification de signalement -->
    <AddPetModal
      v-if="showAddPetModal"
      :pet="editingPet"
      @close="closeAddPetModal"
      @save="savePet"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { petService } from "../services/petService";
import AddPetModal from "../components/AddPetModal.vue";

const user = ref(auth.currentUser);
const userProfile = ref({
  fullName: "",
  phone: "",
  address: "",
});
const userPets = ref([]);
const showAddPetModal = ref(false);
const editingPet = ref(null);

onMounted(async () => {
  // Charger le profil utilisateur
  if (user.value) {
    // TODO: Charger les données du profil depuis Firestore

    // Charger les signalements de l'utilisateur
    const petsRef = collection(db, "pets");
    const q = query(petsRef, where("userId", "==", user.value.uid));
    const querySnapshot = await getDocs(q);
    userPets.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
});

const updatePhoto = () => {
  // TODO: Implémenter la mise à jour de la photo
};

const saveProfile = async () => {
  // TODO: Sauvegarder les modifications du profil dans Firestore
};

const editPet = (pet) => {
  editingPet.value = pet;
  showAddPetModal.value = true;
};

const closeAddPetModal = () => {
  showAddPetModal.value = false;
  editingPet.value = null;
};

const savePet = async (petData) => {
  try {
    if (editingPet.value) {
      await petService.updatePet(editingPet.value.id, {
        ...petData,
        userId: user.value.uid,
      });
    } else {
      await petService.addPet({
        ...petData,
        userId: user.value.uid,
      });
    }
    // Recharger les signalements
    const petsRef = collection(db, "pets");
    const q = query(petsRef, where("userId", "==", user.value.uid));
    const querySnapshot = await getDocs(q);
    userPets.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    closeAddPetModal();
  } catch (error) {
    console.error("Erreur lors de la sauvegarde du signalement:", error);
  }
};

const deletePet = async (petId) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer ce signalement ?")) {
    try {
      await petService.deletePet(petId);
      userPets.value = userPets.value.filter((pet) => pet.id !== petId);
    } catch (error) {
      console.error("Erreur lors de la suppression du signalement:", error);
    }
  }
};
</script>
