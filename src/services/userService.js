import { db, auth } from "../firebase/config";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  Timestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const COLLECTION_NAME = "users";

export const userService = {
  // Créer ou mettre à jour un utilisateur après connexion
  async createOrUpdateUser(user) {
    try {
      if (!user || !user.uid) {
        throw new Error("Utilisateur non valide");
      }

      const userRef = doc(db, COLLECTION_NAME, user.uid);
      const userDoc = await getDoc(userRef);

      const userData = {
        email: user.email,
        displayName: user.displayName || "Utilisateur",
        photoURL: user.photoURL || null,
        lastLogin: Timestamp.now(),
      };

      if (!userDoc.exists()) {
        // Nouvel utilisateur
        await setDoc(userRef, {
          ...userData,
          createdAt: Timestamp.now(),
        });
        console.log("Nouvel utilisateur créé:", user.uid);
      } else {
        // Mise à jour de l'utilisateur existant
        await updateDoc(userRef, userData);
        console.log("Utilisateur mis à jour:", user.uid);
      }

      return userData;
    } catch (error) {
      console.error(
        "Erreur lors de la création/mise à jour de l'utilisateur:",
        error
      );
      throw error;
    }
  },

  // Récupérer les données d'un utilisateur
  async getUserData(userId) {
    try {
      const userRef = doc(db, COLLECTION_NAME, userId);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        return {
          id: userDoc.id,
          ...userDoc.data(),
        };
      } else {
        throw new Error("Utilisateur non trouvé");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données utilisateur:",
        error
      );
      throw error;
    }
  },

  // Récupérer l'utilisateur actuellement connecté
  async getCurrentUser() {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        return await this.getUserData(currentUser.uid);
      }
      return null;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de l'utilisateur actuel:",
        error
      );
      throw error;
    }
  },

  // Mettre à jour le profil utilisateur
  async updateUserProfile(userId, profileData) {
    try {
      const userRef = doc(db, COLLECTION_NAME, userId);
      await updateDoc(userRef, {
        ...profileData,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
      throw error;
    }
  },

  // Récupérer les animaux d'un utilisateur
  async getUserPets(userId) {
    try {
      const petsCollection = collection(db, "pets");
      const q = query(petsCollection, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des animaux de l'utilisateur:",
        error
      );
      throw error;
    }
  },
};
