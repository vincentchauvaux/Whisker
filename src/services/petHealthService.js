import { db } from "../firebase/config";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  Timestamp,
  addDoc,
} from "firebase/firestore";

const COLLECTION_NAME = "petHealthEvents";

export const petHealthService = {
  // Ajouter un nouvel événement de santé
  async addHealthEvent(eventData) {
    try {
      if (!eventData.petId) {
        throw new Error("ID de l'animal requis");
      }

      const eventRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...eventData,
        createdAt: Timestamp.now(),
        date: Timestamp.fromDate(new Date(eventData.date)),
      });

      return {
        id: eventRef.id,
        ...eventData,
      };
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un événement de santé:", error);
      throw error;
    }
  },

  // Récupérer tous les événements de santé d'un animal
  async getPetHealthEvents(petId) {
    try {
      const eventsCollection = collection(db, COLLECTION_NAME);
      const q = query(eventsCollection, where("petId", "==", petId));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: data.date.toDate(),
        };
      });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des événements de santé:",
        error
      );
      throw error;
    }
  },

  // Récupérer tous les événements de santé pour les animaux d'un utilisateur
  async getUserPetHealthEvents(userId) {
    try {
      const eventsCollection = collection(db, COLLECTION_NAME);
      const q = query(eventsCollection, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          date: data.date.toDate(),
        };
      });
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des événements de santé de l'utilisateur:",
        error
      );
      throw error;
    }
  },

  // Mettre à jour un événement de santé
  async updateHealthEvent(eventId, eventData) {
    try {
      const eventRef = doc(db, COLLECTION_NAME, eventId);

      // Convertir la date si elle est fournie
      const updatedData = { ...eventData };
      if (eventData.date) {
        updatedData.date = Timestamp.fromDate(new Date(eventData.date));
      }

      await updateDoc(eventRef, {
        ...updatedData,
        updatedAt: Timestamp.now(),
      });

      return {
        id: eventId,
        ...eventData,
      };
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'événement:", error);
      throw error;
    }
  },

  // Supprimer un événement de santé
  async deleteHealthEvent(eventId) {
    try {
      const eventRef = doc(db, COLLECTION_NAME, eventId);
      await deleteDoc(eventRef);
      return true;
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement:", error);
      throw error;
    }
  },
};
