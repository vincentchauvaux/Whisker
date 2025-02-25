import { petService } from "../services/petService";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

const samplePets = [
  {
    name: "Milo",
    status: "lost",
    species: "chat",
    breed: "Européen",
    color: "tigré gris",
    age: 3,
    gender: "male",
    description:
      "Chat tigré gris avec un collier rouge. Très affectueux et sociable. A l'habitude de répondre à son nom.",
    distinctive_features:
      "Collier rouge avec médaille, petite tache blanche sous le menton",
    last_seen_date: new Date("2024-03-15T14:30:00"),
    last_seen_location: {
      address: "Parc Léopold",
      city: "Ixelles",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8383,
        longitude: 4.3795,
      },
    },
    contact: {
      name: "Marie Dubois",
      phone: "+32 470 12 34 56",
      email: "marie.dubois@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Aucun",
      medications: "Aucun",
    },
    reward_offered: true,
    reward_amount: 100,
    images: ["https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"],
    tags: ["collier", "sociable", "tigré"],
  },
  {
    name: "Felix",
    status: "lost",
    species: "chat",
    breed: "Maine Coon",
    color: "roux et blanc",
    age: 5,
    gender: "male",
    description:
      "Grand chat roux et blanc, très poilu. Queue très touffue. Craintif avec les étrangers.",
    distinctive_features: "Grande taille, pelage très long, yeux verts",
    last_seen_date: new Date("2024-03-16T18:45:00"),
    last_seen_location: {
      address: "Avenue Louise",
      city: "Bruxelles",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8271,
        longitude: 4.3663,
      },
    },
    contact: {
      name: "Pierre Martin",
      phone: "+32 472 98 76 54",
      email: "pierre.martin@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Régime spécial",
      medications: "Aucun",
    },
    reward_offered: true,
    reward_amount: 200,
    images: ["https://images.unsplash.com/photo-1533743983669-94fa5c4338ec"],
    tags: ["maine coon", "poilu", "grand"],
  },
  {
    name: null,
    status: "found",
    species: "chat",
    breed: "Européen",
    color: "noir et blanc",
    age_estimate: "2-3 ans",
    gender: "femelle",
    description:
      "Chatte noir et blanc, très amicale. Trouvée près de la gare, semble bien nourrie et soignée.",
    distinctive_features:
      "Taches blanches symétriques sur le visage, pattes blanches",
    found_date: new Date("2024-03-16T09:15:00"),
    found_location: {
      address: "Rue de la Station",
      city: "Etterbeek",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8366,
        longitude: 4.3991,
      },
    },
    contact: {
      name: "Thomas Laurent",
      phone: "+32 475 98 76 54",
      email: "thomas.laurent@email.com",
    },
    medical_info: {
      microchipped: "à vérifier",
      apparent_health: "Bon état général",
      injuries: "Aucune visible",
    },
    temporary_care: {
      status: "En famille d'accueil",
      facility: "Domicile du découvreur",
    },
    images: ["https://images.unsplash.com/photo-1495360010541-f48722b34f7d"],
    tags: ["amical", "bien soigné", "noir et blanc"],
  },
  {
    name: "Luna",
    status: "lost",
    species: "chat",
    breed: "Siamois",
    color: "seal point",
    age: 4,
    gender: "femelle",
    description:
      "Chatte siamoise avec yeux bleus. Peureuse mais gentille. Répond au nom de Luna.",
    distinctive_features:
      "Yeux bleus caractéristiques, petite cicatrice sur l'oreille droite",
    last_seen_date: new Date("2024-03-16T11:45:00"),
    last_seen_location: {
      address: "Avenue Louis Bertrand",
      city: "Schaerbeek",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8657,
        longitude: 4.3673,
      },
    },
    contact: {
      name: "Sophie Van Damme",
      phone: "+32 483 23 45 67",
      email: "sophie.vandamme@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Régime alimentaire spécial",
      medications: "Traitement pour allergie",
    },
    reward_offered: true,
    reward_amount: 150,
    images: ["https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8"],
    tags: ["siamois", "yeux bleus", "craintif"],
  },
  {
    name: "Oscar",
    status: "lost",
    species: "chat",
    breed: "British Shorthair",
    color: "gris bleu",
    age: 2,
    gender: "male",
    description:
      "Chat British Shorthair gris bleu, très calme et affectueux. Pelage dense et yeux oranges.",
    distinctive_features: "Yeux oranges vifs, museau court typique",
    last_seen_date: new Date("2024-03-17T10:20:00"),
    last_seen_location: {
      address: "Place Flagey",
      city: "Ixelles",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8271,
        longitude: 4.3722,
      },
    },
    contact: {
      name: "Julie Leroy",
      phone: "+32 478 45 67 89",
      email: "julie.leroy@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Aucun",
      medications: "Aucun",
    },
    reward_offered: true,
    reward_amount: 180,
    images: ["https://images.unsplash.com/photo-1574158622682-e40e69881006"],
    tags: ["british", "gris", "calme"],
  },
  {
    name: "Milo",
    status: "lost",
    species: "chat",
    breed: "Européen",
    color: "tigré gris",
    age: 2,
    gender: "male",
    description:
      "Chat tigré gris avec un collier rouge. Vu pour la dernière fois près du parc.",
    distinctive_features: "Collier rouge",
    last_seen_date: new Date("2024-03-18T14:00:00"),
    last_seen_location: {
      address: "Ixelles, Bruxelles",
      city: "Ixelles",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8271,
        longitude: 4.3722,
      },
    },
    contact: {
      name: "Sarah Dubois",
      phone: "+32 470 11 22 33",
      email: "sarah.dubois@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Aucun",
      medications: "Aucun",
    },
    reward_offered: true,
    reward_amount: 100,
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=200&auto=format&fit=crop",
    ],
    tags: ["collier", "tigré", "jeune"],
  },
  {
    name: null,
    status: "found",
    species: "chat",
    breed: "Européen",
    color: "noir et blanc",
    age_estimate: "1-2 ans",
    gender: "inconnu",
    description: "Chat noir et blanc, très amical. Trouvé près de la gare.",
    distinctive_features: "Collier bleu",
    found_date: new Date("2024-03-18T15:00:00"),
    found_location: {
      address: "Etterbeek, Bruxelles",
      city: "Etterbeek",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8366,
        longitude: 4.3991,
      },
    },
    contact: {
      name: "Marc Leroy",
      phone: "+32 475 44 55 66",
      email: "marc.leroy@email.com",
    },
    medical_info: {
      microchipped: "à vérifier",
      apparent_health: "Bon état général",
      injuries: "Aucune visible",
    },
    temporary_care: {
      status: "En famille d'accueil",
      facility: "Domicile du découvreur",
    },
    images: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=200&auto=format&fit=crop",
    ],
    tags: ["amical", "collier bleu"],
  },
  {
    name: "Luna",
    status: "lost",
    species: "chat",
    breed: "Siamois",
    color: "seal point",
    age: 3,
    gender: "femelle",
    description: "Chatte siamoise avec yeux bleus. Peureux mais gentil.",
    distinctive_features: "Yeux bleus caractéristiques",
    last_seen_date: new Date("2024-03-18T16:00:00"),
    last_seen_location: {
      address: "Schaerbeek, Bruxelles",
      city: "Schaerbeek",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8657,
        longitude: 4.3673,
      },
    },
    contact: {
      name: "Emma Vandenberg",
      phone: "+32 483 77 88 99",
      email: "emma.vandenberg@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Aucun",
      medications: "Aucun",
    },
    reward_offered: true,
    reward_amount: 150,
    images: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=200&auto=format&fit=crop",
    ],
    tags: ["siamois", "yeux bleus", "craintif"],
  },
  {
    name: "Oscar",
    status: "lost",
    species: "chat",
    breed: "Persan",
    color: "blanc",
    age: 5,
    gender: "male",
    description: "Chat persan blanc. Nécessite des soins médicaux.",
    distinctive_features: "Pelage long et blanc",
    last_seen_date: new Date("2024-03-18T17:00:00"),
    last_seen_location: {
      address: "Uccle, Bruxelles",
      city: "Uccle",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.8003,
        longitude: 4.3361,
      },
    },
    contact: {
      name: "Lucas Martin",
      phone: "+32 478 00 11 22",
      email: "lucas.martin@email.com",
    },
    medical_info: {
      microchipped: true,
      sterilized: true,
      special_needs: "Traitement médical régulier",
      medications: "Antibiotiques",
    },
    reward_offered: true,
    reward_amount: 200,
    images: [
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=200&auto=format&fit=crop",
    ],
    tags: ["persan", "blanc", "soins médicaux"],
  },
  {
    name: null,
    status: "found",
    species: "chat",
    breed: "Européen",
    color: "roux",
    age_estimate: "3-4 ans",
    gender: "male",
    description: "Chat roux trouvé dans le jardin. Porte un collier bleu.",
    distinctive_features: "Collier bleu, pelage roux vif",
    found_date: new Date("2024-03-18T18:00:00"),
    found_location: {
      address: "Saint-Gilles, Bruxelles",
      city: "Saint-Gilles",
      region: "Bruxelles",
      coordinates: {
        latitude: 50.825,
        longitude: 4.345,
      },
    },
    contact: {
      name: "Sophie Lambert",
      phone: "+32 470 33 44 55",
      email: "sophie.lambert@email.com",
    },
    medical_info: {
      microchipped: "à vérifier",
      apparent_health: "Bon état général",
      injuries: "Aucune visible",
    },
    temporary_care: {
      status: "En famille d'accueil",
      facility: "Domicile du découvreur",
    },
    images: [
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=200&auto=format&fit=crop",
    ],
    tags: ["roux", "collier bleu", "amical"],
  },
];

// Fonction pour réinitialiser la base de données
export const resetFirebaseData = async () => {
  try {
    console.log("Suppression des données existantes...");
    const petsRef = collection(db, "pets");
    const querySnapshot = await getDocs(petsRef);

    const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    console.log("Données supprimées avec succès.");
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression des données:", error);
    return false;
  }
};

export const initializeFirebaseData = async (forceReset = false) => {
  try {
    console.log("Vérification des données existantes...");

    if (forceReset) {
      await resetFirebaseData();
    } else {
      // Vérifier si des données existent déjà
      const petsRef = collection(db, "pets");
      const querySnapshot = await getDocs(petsRef);

      if (!querySnapshot.empty) {
        console.log(
          "Des données existent déjà dans Firebase. Initialisation ignorée."
        );
        return;
      }
    }

    console.log("Début de l'initialisation des données...");

    for (const pet of samplePets) {
      await petService.addPet(pet);
      console.log(`Données ajoutées pour ${pet.name || "chat sans nom"}`);
    }

    console.log("Initialisation des données terminée avec succès!");
  } catch (error) {
    console.error("Erreur lors de l'initialisation des données:", error);
    throw error;
  }
};
