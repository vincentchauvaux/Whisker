<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div v-if="loading" class="text-center py-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"
      ></div>
      <p class="mt-4 text-gray-600 font-sans">Chargement en cours...</p>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600 font-sans">{{ error }}</p>
    </div>

    <div v-else-if="pet" class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="relative h-96">
        <img
          :src="pet.images[0]"
          :alt="pet.name || 'Chat sans nom'"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-4 right-4">
          <span
            :class="[
              'px-4 py-2 rounded-full text-sm font-sans',
              pet.status === 'lost'
                ? 'bg-red-100 text-red-800'
                : 'bg-green-100 text-green-800',
            ]"
          >
            {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
          </span>
        </div>
      </div>

      <div class="p-8">
        <div class="flex justify-between items-start mb-6">
          <h1 class="text-4xl font-serif text-gray-900">
            {{ pet.name || "Chat sans nom" }}
          </h1>
          <div v-if="pet.reward_offered" class="text-right">
            <p class="text-sm font-sans text-gray-600">Récompense</p>
            <p class="text-xl font-serif text-secondary">
              {{ pet.reward_amount }}€
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-xl font-serif text-gray-900 mb-4">
              Informations générales
            </h2>
            <div class="space-y-3">
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Race:</span> {{ pet.breed }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Couleur:</span> {{ pet.color }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Sexe:</span>
                {{ pet.gender === "male" ? "Mâle" : "Femelle" }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Âge:</span>
                {{ pet.age || pet.age_estimate || "Non spécifié" }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Signes distinctifs:</span>
                {{ pet.distinctive_features }}
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-serif text-gray-900 mb-4">Localisation</h2>
            <div class="space-y-3">
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Adresse:</span>
                {{
                  pet.status === "lost"
                    ? pet.last_seen_location.address
                    : pet.found_location.address
                }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Ville:</span>
                {{
                  pet.status === "lost"
                    ? pet.last_seen_location.city
                    : pet.found_location.city
                }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Région:</span>
                {{
                  pet.status === "lost"
                    ? pet.last_seen_location.region
                    : pet.found_location.region
                }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Date:</span>
                {{
                  formatDate(
                    pet.status === "lost" ? pet.last_seen_date : pet.found_date
                  )
                }}
              </p>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-serif text-gray-900 mb-4">Description</h2>
          <p class="text-gray-700 font-sans">{{ pet.description }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-xl font-serif text-gray-900 mb-4">
              Informations médicales
            </h2>
            <div class="space-y-3">
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Pucé:</span>
                {{
                  typeof pet.medical_info.microchipped === "boolean"
                    ? pet.medical_info.microchipped
                      ? "Oui"
                      : "Non"
                    : pet.medical_info.microchipped
                }}
              </p>
              <p
                v-if="pet.medical_info.sterilized !== undefined"
                class="text-sm font-sans text-gray-600"
              >
                <span class="font-medium">Stérilisé:</span>
                {{ pet.medical_info.sterilized ? "Oui" : "Non" }}
              </p>
              <p
                v-if="pet.medical_info.special_needs"
                class="text-sm font-sans text-gray-600"
              >
                <span class="font-medium">Besoins spéciaux:</span>
                {{ pet.medical_info.special_needs }}
              </p>
              <p
                v-if="pet.medical_info.medications"
                class="text-sm font-sans text-gray-600"
              >
                <span class="font-medium">Médicaments:</span>
                {{ pet.medical_info.medications }}
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-serif text-gray-900 mb-4">Contact</h2>
            <div class="space-y-3">
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Nom:</span> {{ pet.contact.name }}
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Téléphone:</span>
                <a
                  :href="'tel:' + pet.contact.phone"
                  class="text-secondary hover:underline"
                >
                  {{ pet.contact.phone }}
                </a>
              </p>
              <p class="text-sm font-sans text-gray-600">
                <span class="font-medium">Email:</span>
                <a
                  :href="'mailto:' + pet.contact.email"
                  class="text-secondary hover:underline"
                >
                  {{ pet.contact.email }}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tag in pet.tags"
            :key="tag"
            class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-sans"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex justify-center space-x-4">
          <button
            @click="contactOwner"
            class="px-6 py-3 bg-secondary/30 text-gray-900 rounded-full font-sans hover:bg-secondary/40 transition-colors duration-300"
          >
            Contacter
          </button>
          <button
            @click="sharePet"
            class="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-sans hover:bg-gray-200 transition-colors duration-300"
          >
            Partager
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { petService } from "../services/petService";

const props = defineProps({
  petId: {
    type: String,
    required: true,
  },
});

const pet = ref(null);
const loading = ref(true);
const error = ref(null);

const loadPetDetails = async () => {
  try {
    loading.value = true;
    error.value = null;
    // Note: Cette fonction devra être implémentée dans petService
    const result = await petService.getPetById(props.petId);
    pet.value = result;
  } catch (err) {
    error.value = "Une erreur est survenue lors du chargement des détails.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const contactOwner = () => {
  // À implémenter: logique pour contacter le propriétaire
  window.location.href = `mailto:${pet.value.contact.email}`;
};

const sharePet = async () => {
  // À implémenter: logique de partage
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${pet.value.name || "Chat"} ${
          pet.value.status === "lost" ? "perdu" : "trouvé"
        }`,
        text: pet.value.description,
        url: window.location.href,
      });
    } catch (err) {
      console.error("Erreur lors du partage:", err);
    }
  } else {
    // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
    alert("Le partage n'est pas supporté sur ce navigateur");
  }
};

onMounted(() => {
  loadPetDetails();
});
</script>
