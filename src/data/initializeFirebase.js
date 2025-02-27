import { petService } from "../services/petService";
import { db } from "../firebase/config";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

// Données des utilisateurs fictifs
const sampleUsers = [
  {
    id: "user1",
    email: "user1@example.com",
    displayName: "Sophie Martin",
    photoURL: "https://randomuser.me/api/portraits/women/1.jpg",
    createdAt: Timestamp.now(),
    lastLogin: Timestamp.now(),
  },
  {
    id: "user2",
    email: "user2@example.com",
    displayName: "Thomas Dubois",
    photoURL: "https://randomuser.me/api/portraits/men/2.jpg",
    createdAt: Timestamp.now(),
    lastLogin: Timestamp.now(),
  },
  {
    id: "user3",
    email: "user3@example.com",
    displayName: "Emma Leroy",
    photoURL: "https://randomuser.me/api/portraits/women/3.jpg",
    createdAt: Timestamp.now(),
    lastLogin: Timestamp.now(),
  },
  {
    id: "user4",
    email: "user4@example.com",
    displayName: "Lucas Bernard",
    photoURL: "https://randomuser.me/api/portraits/men/4.jpg",
    createdAt: Timestamp.now(),
    lastLogin: Timestamp.now(),
  },
  {
    id: "user5",
    email: "user5@example.com",
    displayName: "Chloé Petit",
    photoURL: "https://randomuser.me/api/portraits/women/5.jpg",
    createdAt: Timestamp.now(),
    lastLogin: Timestamp.now(),
  },
];

// Données des chats perdus
const lostPets = [
  {
    id: "lost1",
    name: "Milo",
    status: "lost",
    species: "chat",
    breed: "Européen",
    color: "tigré gris",
    age: 3,
    gender: "male",
    description:
      "Chat tigré gris avec un collier rouge. Très affectueux et répond à son nom.",
    last_seen_date: Timestamp.now(),
    last_seen_location: {
      address: "Rue de la Paix, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8476, lng: 4.3572 },
    },
    contact: {
      name: "Sophie Martin",
      email: "user1@example.com",
      phone: "+32 470 12 34 56",
    },
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    ],
    tags: ["collier rouge", "tigré", "sociable"],
    userId: "user1",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "lost2",
    name: "Felix",
    status: "lost",
    species: "chat",
    breed: "Maine Coon",
    color: "roux et blanc",
    age: 5,
    gender: "male",
    description:
      "Grand chat Maine Coon roux et blanc. Très poilu avec une queue touffue. Peureux avec les étrangers.",
    last_seen_date: Timestamp.now(),
    last_seen_location: {
      address: "Avenue Louise, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8271, lng: 4.3663 },
    },
    contact: {
      name: "Thomas Dubois",
      email: "user2@example.com",
      phone: "+32 470 23 45 67",
    },
    images: [
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=2574&auto=format&fit=crop",
    ],
    tags: ["maine coon", "poilu", "peureux"],
    userId: "user2",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "lost3",
    name: "Luna",
    status: "lost",
    species: "chat",
    breed: "Siamois",
    color: "beige et marron",
    age: 2,
    gender: "female",
    description:
      "Chatte siamoise aux yeux bleus. Très vocale et affectueuse. Porte un collier bleu avec une clochette.",
    last_seen_date: Timestamp.now(),
    last_seen_location: {
      address: "Place Flagey, Ixelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8271, lng: 4.3722 },
    },
    contact: {
      name: "Emma Leroy",
      email: "user3@example.com",
      phone: "+32 470 34 56 78",
    },
    images: [
      "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?q=80&w=2565&auto=format&fit=crop",
    ],
    tags: ["siamois", "yeux bleus", "collier bleu"],
    userId: "user3",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "lost4",
    name: "Oscar",
    status: "lost",
    species: "chat",
    breed: "British Shorthair",
    color: "gris bleu",
    age: 4,
    gender: "male",
    description:
      "Chat British Shorthair gris-bleu aux yeux orange. Calme et indépendant. Pucé et castré.",
    last_seen_date: Timestamp.now(),
    last_seen_location: {
      address: "Rue Royale, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8454, lng: 4.3613 },
    },
    contact: {
      name: "Lucas Bernard",
      email: "user4@example.com",
      phone: "+32 470 45 67 89",
    },
    images: [
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=2592&auto=format&fit=crop",
    ],
    tags: ["british", "gris", "pucé"],
    userId: "user4",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "lost5",
    name: "Nala",
    status: "lost",
    species: "chat",
    breed: "Persan",
    color: "blanc",
    age: 6,
    gender: "female",
    description:
      "Chatte persane blanche à poil long. Très calme et timide. Nécessite des soins particuliers pour son pelage.",
    last_seen_date: Timestamp.now(),
    last_seen_location: {
      address: "Boulevard Anspach, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8468, lng: 4.3487 },
    },
    contact: {
      name: "Chloé Petit",
      email: "user5@example.com",
      phone: "+32 470 56 78 90",
    },
    images: [
      "https://images.unsplash.com/photo-1618189063538-57c73af27adb?q=80&w=2670&auto=format&fit=crop",
    ],
    tags: ["persan", "blanc", "poil long"],
    userId: "user5",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];

// Données des chats trouvés
const foundPets = [
  {
    id: "found1",
    name: "Chat trouvé",
    status: "found",
    species: "chat",
    breed: "Européen",
    color: "noir et blanc",
    age_estimate: "2-3 ans",
    gender: "unknown",
    description:
      "Chat noir et blanc trouvé errant. Très amical et en bonne santé. Porte un collier vert sans médaille.",
    found_date: Timestamp.now(),
    found_location: {
      address: "Parc du Cinquantenaire, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.84, lng: 4.3936 },
    },
    contact: {
      name: "Sophie Martin",
      email: "user1@example.com",
      phone: "+32 470 12 34 56",
    },
    images: [
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=2529&auto=format&fit=crop",
    ],
    tags: ["noir et blanc", "collier vert", "amical"],
    userId: "user1",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "found2",
    name: "Chat trouvé",
    status: "found",
    species: "chat",
    breed: "Inconnu",
    color: "gris tigré",
    age_estimate: "1-2 ans",
    gender: "female",
    description:
      "Jeune chatte grise tigrée trouvée près d'une école. Très maigre mais affectueuse. Pas de collier ni de puce.",
    found_date: Timestamp.now(),
    found_location: {
      address: "Rue de la Loi, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8465, lng: 4.3707 },
    },
    contact: {
      name: "Thomas Dubois",
      email: "user2@example.com",
      phone: "+32 470 23 45 67",
    },
    images: [
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2670&auto=format&fit=crop",
    ],
    tags: ["tigré", "maigre", "jeune"],
    userId: "user2",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "found3",
    name: "Chat trouvé",
    status: "found",
    species: "chat",
    breed: "Possible Bengal",
    color: "tacheté brun",
    age_estimate: "3-4 ans",
    gender: "male",
    description:
      "Chat au pelage tacheté type Bengal trouvé dans un jardin. Très actif et curieux. Porte un collier anti-puces noir.",
    found_date: Timestamp.now(),
    found_location: {
      address: "Avenue de Tervuren, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8364, lng: 4.4103 },
    },
    contact: {
      name: "Emma Leroy",
      email: "user3@example.com",
      phone: "+32 470 34 56 78",
    },
    images: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2670&auto=format&fit=crop",
    ],
    tags: ["bengal", "tacheté", "collier noir"],
    userId: "user3",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "found4",
    name: "Chat trouvé",
    status: "found",
    species: "chat",
    breed: "Possible Ragdoll",
    color: "blanc et gris",
    age_estimate: "5-6 ans",
    gender: "female",
    description:
      "Chatte type Ragdoll à poil mi-long trouvée près d'un parc. Très douce et calme. Yeux bleus. Pucée mais pas de coordonnées à jour.",
    found_date: Timestamp.now(),
    found_location: {
      address: "Bois de la Cambre, Bruxelles",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8054, lng: 4.3841 },
    },
    contact: {
      name: "Lucas Bernard",
      email: "user4@example.com",
      phone: "+32 470 45 67 89",
    },
    images: [
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2670&auto=format&fit=crop",
    ],
    tags: ["ragdoll", "yeux bleus", "pucée"],
    userId: "user4",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
  {
    id: "found5",
    name: "Chat trouvé",
    status: "found",
    species: "chat",
    breed: "Européen",
    color: "roux",
    age_estimate: "7-8 ans",
    gender: "male",
    description:
      "Chat roux âgé trouvé dans un garage. Très maigre et craintif. Semble avoir été abandonné depuis longtemps.",
    found_date: Timestamp.now(),
    found_location: {
      address: "Chaussée de Waterloo, Uccle",
      city: "Bruxelles",
      region: "Bruxelles-Capitale",
      coordinates: { lat: 50.8054, lng: 4.3561 },
    },
    contact: {
      name: "Chloé Petit",
      email: "user5@example.com",
      phone: "+32 470 56 78 90",
    },
    images: [
      "https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=2670&auto=format&fit=crop",
    ],
    tags: ["roux", "âgé", "craintif"],
    userId: "user5",
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  },
];

// Fonction pour réinitialiser les données Firebase
export const resetFirebaseData = async () => {
  try {
    console.log("Suppression des données existantes...");

    // Supprimer tous les chats
    const petsRef = collection(db, "pets");
    const petsSnapshot = await getDocs(petsRef);
    await Promise.all(petsSnapshot.docs.map((doc) => deleteDoc(doc.ref)));

    // Supprimer tous les utilisateurs
    const usersRef = collection(db, "users");
    const usersSnapshot = await getDocs(usersRef);
    await Promise.all(usersSnapshot.docs.map((doc) => deleteDoc(doc.ref)));

    console.log("Données supprimées avec succès");
    return "Données supprimées avec succès";
  } catch (error) {
    console.error("Erreur lors de la suppression des données:", error);
    throw error;
  }
};

// Fonction pour initialiser les données Firebase
export const initializeFirebaseData = async (forceReset = false) => {
  try {
    // Vérifier si des données existent déjà
    const petsRef = collection(db, "pets");
    const petsSnapshot = await getDocs(petsRef);

    if (petsSnapshot.size > 0 && !forceReset) {
      console.log(
        "Des données existent déjà dans Firebase. Initialisation ignorée."
      );
      return "Des données existent déjà. Initialisation ignorée.";
    }

    // Si forceReset est true ou s'il n'y a pas de données, réinitialiser
    if (forceReset) {
      await resetFirebaseData();
    }

    console.log("Initialisation des données Firebase...");

    // Ajouter les utilisateurs
    for (const user of sampleUsers) {
      await setDoc(doc(db, "users", user.id), user);
    }

    // Ajouter les chats perdus
    for (const pet of lostPets) {
      await setDoc(doc(db, "pets", pet.id), pet);
    }

    // Ajouter les chats trouvés
    for (const pet of foundPets) {
      await setDoc(doc(db, "pets", pet.id), pet);
    }

    console.log("Données Firebase initialisées avec succès");
    return "Données Firebase initialisées avec succès";
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation des données Firebase:",
      error
    );
    throw error;
  }
};

// Fonction pour initialiser les données une seule fois (à appeler manuellement)
export const initializeDataOnce = async () => {
  try {
    console.log("Initialisation des données une seule fois...");
    await resetFirebaseData(); // On réinitialise d'abord pour être sûr
    await initializeFirebaseData(true); // Puis on force l'initialisation
    return "Données initialisées avec succès";
  } catch (error) {
    console.error("Erreur lors de l'initialisation unique des données:", error);
    throw error;
  }
};
