import { ref, reactive, readonly } from "vue";
import { auth } from "../firebase/config";
import { userService } from "../services/userService";
import { onAuthStateChanged, signOut } from "firebase/auth";

// État initial
const state = reactive({
  currentUser: null,
  userProfile: null,
  userPets: [],
  loading: false,
  error: null,
  isAuthenticated: false,
});

// Getters
const getters = {
  getCurrentUser: () => state.currentUser,
  getUserProfile: () => state.userProfile,
  getUserPets: () => state.userPets,
  isLoading: () => state.loading,
  getError: () => state.error,
  isUserAuthenticated: () => state.isAuthenticated,
};

// Actions
const actions = {
  // Initialiser l'écouteur d'authentification
  initAuthListener() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
        console.log("[userStore] Utilisateur connecté:", user.email);

        // Charger le profil utilisateur
        try {
          await this.fetchUserProfile(user.uid);
        } catch (error) {
          console.error(
            "[userStore] Erreur lors du chargement du profil:",
            error
          );
        }
      } else {
        state.currentUser = null;
        state.userProfile = null;
        state.userPets = [];
        state.isAuthenticated = false;
        console.log("[userStore] Aucun utilisateur connecté");
      }
    });
  },

  // Charger le profil utilisateur
  async fetchUserProfile(userId) {
    if (!userId) {
      userId = state.currentUser?.uid;
    }

    if (!userId) {
      console.error(
        "[userStore] Aucun ID utilisateur fourni pour fetchUserProfile"
      );
      return null;
    }

    state.loading = true;
    state.error = null;

    try {
      const userProfile = await userService.getUserData(userId);
      state.userProfile = userProfile;
      return userProfile;
    } catch (error) {
      console.error(
        `[userStore] Erreur lors du chargement du profil utilisateur ${userId}:`,
        error
      );
      state.error = `Impossible de charger le profil utilisateur`;
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Charger les animaux de l'utilisateur
  async fetchUserPets(userId) {
    if (!userId) {
      userId = state.currentUser?.uid;
    }

    if (!userId) {
      console.error(
        "[userStore] Aucun ID utilisateur fourni pour fetchUserPets"
      );
      return [];
    }

    state.loading = true;
    state.error = null;

    try {
      const userPets = await userService.getUserPets(userId);
      state.userPets = userPets;
      return userPets;
    } catch (error) {
      console.error(
        `[userStore] Erreur lors du chargement des animaux de l'utilisateur ${userId}:`,
        error
      );
      state.error = `Impossible de charger les animaux de l'utilisateur`;
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Mettre à jour le profil utilisateur
  async updateUserProfile(profileData) {
    if (!state.currentUser) {
      console.error(
        "[userStore] Aucun utilisateur connecté pour updateUserProfile"
      );
      state.error = "Vous devez être connecté pour mettre à jour votre profil";
      return false;
    }

    state.loading = true;
    state.error = null;

    try {
      await userService.updateUserProfile(state.currentUser.uid, profileData);

      // Mettre à jour le cache
      state.userProfile = { ...state.userProfile, ...profileData };

      return true;
    } catch (error) {
      console.error(
        "[userStore] Erreur lors de la mise à jour du profil:",
        error
      );
      state.error = "Impossible de mettre à jour le profil";
      throw error;
    } finally {
      state.loading = false;
    }
  },

  // Déconnexion
  async logout() {
    try {
      await signOut(auth);
      // La réinitialisation de l'état sera gérée par l'écouteur d'authentification
      return true;
    } catch (error) {
      console.error("[userStore] Erreur lors de la déconnexion:", error);
      state.error = "Impossible de se déconnecter";
      throw error;
    }
  },

  // Réinitialiser l'état
  resetState() {
    state.currentUser = null;
    state.userProfile = null;
    state.userPets = [];
    state.loading = false;
    state.error = null;
    state.isAuthenticated = false;
  },
};

// Exporter le store
export const userStore = {
  state: readonly(state),
  ...getters,
  ...actions,
};
