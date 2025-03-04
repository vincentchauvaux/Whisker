<template>
  <MainLayout>
    <div class="container mx-auto px-4 py-8 mt-16">
      <h1 class="text-3xl font-bold text-primary mb-8 font-serif">
        Administration
      </h1>

      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4 font-serif">
          Gestion des données
        </h2>

        <div class="space-y-4">
          <div class="p-4 border border-gray-200 rounded-lg">
            <h3 class="font-medium text-lg mb-2">Initialisation des données</h3>
            <p class="text-gray-600 mb-4">
              Cette action va réinitialiser toutes les données et créer des
              utilisateurs, des signalements et des événements de santé fictifs.
              <span class="text-red-600 font-bold"
                >Attention : toutes les données existantes seront
                supprimées.</span
              >
            </p>

            <div class="flex items-center">
              <button
                @click="initializeData"
                class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                :disabled="isInitializing"
              >
                <span v-if="isInitializing">Initialisation en cours...</span>
                <span v-else>Initialiser les données</span>
              </button>

              <div v-if="initStatus" class="ml-4">
                <p v-if="initStatus.success" class="text-green-600">
                  {{ initStatus.message }}
                </p>
                <p v-else class="text-red-600">{{ initStatus.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import { initializeDataOnce } from "../data/initializeFirebase.js";

const isInitializing = ref(false);
const initStatus = ref(null);

const initializeData = async () => {
  if (
    confirm(
      "Êtes-vous sûr de vouloir réinitialiser toutes les données ? Cette action est irréversible."
    )
  ) {
    try {
      isInitializing.value = true;
      initStatus.value = null;

      const result = await initializeDataOnce();

      initStatus.value = {
        success: true,
        message: result,
      };
    } catch (error) {
      console.error("Erreur lors de l'initialisation des données:", error);
      initStatus.value = {
        success: false,
        message: `Erreur: ${error.message}`,
      };
    } finally {
      isInitializing.value = false;
    }
  }
};
</script>
