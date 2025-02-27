import { ref, reactive, readonly } from "vue";
import { petService } from "../services/petService";

// État initial
const state = reactive({
  pets: [],
  lostPets: [],
  foundPets: [],
  currentPet: null,
  loading: false,
  error: null,
});

// Getters
const getters = {
  getPetById: (id) => {
    return state.pets.find((pet) => pet.id === id) || null;
  },
  getLostPets: () => state.lostPets,
  getFoundPets: () => state.foundPets,
  getAllPets: () => state.pets,
  getCurrentPet: () => state.currentPet,
  isLoading: () => state.loading,
  getError: () => state.error,
};

// Actions
const actions = {
  // Charger tous les animaux
  async fetchAllPets() {
    state.loading = true;
    state.error = null;

    try {
      const pets = await petService.getAllPets();
      state.pets = pets;
      return pets;
    } catch (error) {
      console.error("Erreur lors du chargement des animaux:", error);
      state.error = "Impossible de charger les animaux";
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Charger les animaux perdus
  async fetchLostPets() {
    state.loading = true;
    state.error = null;

    try {
      const lostPets = await petService.getPetsByStatus("lost");
      state.lostPets = lostPets;
      return lostPets;
    } catch (error) {
      console.error("Erreur lors du chargement des animaux perdus:", error);
      state.error = "Impossible de charger les animaux perdus";
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Charger les animaux trouvés
  async fetchFoundPets() {
    state.loading = true;
    state.error = null;

    try {
      const foundPets = await petService.getPetsByStatus("found");
      state.foundPets = foundPets;
      return foundPets;
    } catch (error) {
      console.error("Erreur lors du chargement des animaux trouvés:", error);
      state.error = "Impossible de charger les animaux trouvés";
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Charger un animal par son ID
  async fetchPetById(id) {
    if (!id) {
      console.error("ID non fourni pour fetchPetById");
      state.error = "ID non fourni";
      return null;
    }

    state.loading = true;
    state.error = null;

    try {
      console.log(`[petStore] Chargement de l'animal avec ID: ${id}`);
      const pet = await petService.getPetById(id);
      state.currentPet = pet;

      // Mettre à jour le cache si nécessaire
      const existingIndex = state.pets.findIndex((p) => p.id === id);
      if (existingIndex >= 0) {
        state.pets[existingIndex] = pet;
      } else {
        state.pets.push(pet);
      }

      return pet;
    } catch (error) {
      console.error(
        `Erreur lors du chargement de l'animal avec ID ${id}:`,
        error
      );
      state.error = `Impossible de charger l'animal avec ID ${id}`;
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Ajouter un nouvel animal
  async addPet(petData) {
    state.loading = true;
    state.error = null;

    try {
      const id = await petService.addPet(petData);
      const newPet = { id, ...petData };

      // Mettre à jour le cache
      state.pets.push(newPet);
      if (petData.status === "lost") {
        state.lostPets.push(newPet);
      } else if (petData.status === "found") {
        state.foundPets.push(newPet);
      }

      return id;
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un animal:", error);
      state.error = "Impossible d'ajouter l'animal";
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Mettre à jour un animal
  async updatePet(id, updateData) {
    state.loading = true;
    state.error = null;

    try {
      await petService.updatePet(id, updateData);

      // Mettre à jour le cache
      const index = state.pets.findIndex((pet) => pet.id === id);
      if (index >= 0) {
        state.pets[index] = { ...state.pets[index], ...updateData };
      }

      // Mettre à jour les listes filtrées
      const lostIndex = state.lostPets.findIndex((pet) => pet.id === id);
      if (lostIndex >= 0) {
        if (updateData.status && updateData.status !== "lost") {
          state.lostPets.splice(lostIndex, 1);
        } else {
          state.lostPets[lostIndex] = {
            ...state.lostPets[lostIndex],
            ...updateData,
          };
        }
      }

      const foundIndex = state.foundPets.findIndex((pet) => pet.id === id);
      if (foundIndex >= 0) {
        if (updateData.status && updateData.status !== "found") {
          state.foundPets.splice(foundIndex, 1);
        } else {
          state.foundPets[foundIndex] = {
            ...state.foundPets[foundIndex],
            ...updateData,
          };
        }
      }

      // Mettre à jour l'animal courant si nécessaire
      if (state.currentPet && state.currentPet.id === id) {
        state.currentPet = { ...state.currentPet, ...updateData };
      }

      return true;
    } catch (error) {
      console.error(
        `Erreur lors de la mise à jour de l'animal avec ID ${id}:`,
        error
      );
      state.error = `Impossible de mettre à jour l'animal avec ID ${id}`;
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Supprimer un animal
  async deletePet(id) {
    state.loading = true;
    state.error = null;

    try {
      await petService.deletePet(id);

      // Mettre à jour le cache
      state.pets = state.pets.filter((pet) => pet.id !== id);
      state.lostPets = state.lostPets.filter((pet) => pet.id !== id);
      state.foundPets = state.foundPets.filter((pet) => pet.id !== id);

      // Réinitialiser l'animal courant si nécessaire
      if (state.currentPet && state.currentPet.id === id) {
        state.currentPet = null;
      }

      return true;
    } catch (error) {
      console.error(
        `Erreur lors de la suppression de l'animal avec ID ${id}:`,
        error
      );
      state.error = `Impossible de supprimer l'animal avec ID ${id}`;
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Réinitialiser l'état
  resetState() {
    state.pets = [];
    state.lostPets = [];
    state.foundPets = [];
    state.currentPet = null;
    state.loading = false;
    state.error = null;
  },
};

// Exporter le store
export const petStore = {
  state: readonly(state),
  ...getters,
  ...actions,
};
