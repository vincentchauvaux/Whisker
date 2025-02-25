import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";

const COLLECTION_NAME = "pets";

export const petService = {
  // Ajouter un nouveau signalement
  async addPet(petData) {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...petData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Erreur lors de l'ajout du signalement:", error);
      throw error;
    }
  },

  // Récupérer un signalement par son ID
  async getPetById(petId) {
    try {
      const docRef = doc(db, COLLECTION_NAME, petId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data(),
        };
      } else {
        throw new Error("Aucun chat trouvé avec cet ID");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du signalement:", error);
      throw error;
    }
  },

  // Récupérer tous les signalements
  async getAllPets() {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Erreur lors de la récupération des signalements:", error);
      throw error;
    }
  },

  // Récupérer les signalements par statut (perdu/trouvé)
  async getPetsByStatus(status) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where("status", "==", status)
      );
      const querySnapshot = await getDocs(q);
      console.log(`Nombre de chats ${status} trouvés:`, querySnapshot.size);
      const results = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
      console.log("Données des chats:", results);
      return results;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des signalements par statut:",
        error
      );
      throw error;
    }
  },

  // Mettre à jour un signalement
  async updatePet(petId, updateData) {
    try {
      const petRef = doc(db, COLLECTION_NAME, petId);
      await updateDoc(petRef, {
        ...updateData,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour du signalement:", error);
      throw error;
    }
  },

  // Supprimer un signalement
  async deletePet(petId) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, petId));
    } catch (error) {
      console.error("Erreur lors de la suppression du signalement:", error);
      throw error;
    }
  },

  // Récupérer les signalements récents
  async getRecentPets(limit = 5) {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy("createdAt", "desc"),
        limit(limit)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des signalements récents:",
        error
      );
      throw error;
    }
  },
};
