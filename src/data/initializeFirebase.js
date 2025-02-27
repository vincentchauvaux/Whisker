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

// Coordonnées autour de Waterloo
const getRandomWaterlooCoordinates = () => {
  // Centre de Waterloo: 50.7184, 4.3990
  const centerLat = 50.7184;
  const centerLng = 4.399;
  // Rayon aléatoire (en degrés) pour rester dans la région
  const radius = 0.03;

  // Générer des coordonnées aléatoires dans ce rayon
  const randomLat = centerLat + (Math.random() - 0.5) * 2 * radius;
  const randomLng = centerLng + (Math.random() - 0.5) * 2 * radius;

  return { lat: randomLat, lng: randomLng };
};

// Adresses autour de Waterloo
const waterlooAddresses = [
  {
    address: "Chaussée de Bruxelles, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue de la Station, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Boulevard de la Cense, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue François Libert, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Avenue des Chasseurs, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Drève Richelle, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue du Couvent, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Chaussée de Tervuren, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue de la Croix, Braine-l'Alleud",
    city: "Braine-l'Alleud",
    region: "Brabant Wallon",
  },
  {
    address: "Avenue Reine Astrid, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue du Gaz, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue des Bégonias, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Avenue des Pâquerettes, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue des Merisiers, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue du Ménil, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue de la Ferme, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue du Chenois, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Avenue des Tourterelles, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue des Charmes, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
  {
    address: "Rue du Bois, Waterloo",
    city: "Waterloo",
    region: "Brabant Wallon",
  },
];

// Images de chats
const catImages = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2015&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=2036&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2601&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=2563&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=2529&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=2576&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=2592&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596854273338-cbf078ec7071?q=80&w=2580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?q=80&w=2670&auto=format&fit=crop",
];

// Noms de chats
const catNames = [
  "Milo",
  "Felix",
  "Luna",
  "Simba",
  "Nala",
  "Oscar",
  "Bella",
  "Charlie",
  "Lily",
  "Max",
  "Lucy",
  "Leo",
  "Zoe",
  "Loki",
  "Cleo",
  "Ollie",
  "Daisy",
  "Jasper",
  "Ruby",
  "Shadow",
  "Misty",
  "Oreo",
  "Gizmo",
  "Coco",
];

// Races de chats
const catBreeds = [
  "Européen",
  "Siamois",
  "Maine Coon",
  "Persan",
  "Bengal",
  "Ragdoll",
  "Abyssin",
  "British Shorthair",
  "Sphynx",
  "Sacré de Birmanie",
  "Norvégien",
  "Chartreux",
  "Exotic Shorthair",
  "Angora Turc",
];

// Couleurs de chats
const catColors = [
  "noir",
  "blanc",
  "roux",
  "tigré gris",
  "tigré roux",
  "noir et blanc",
  "tricolore",
  "gris",
  "crème",
  "bleu",
  "chocolat",
  "lilas",
  "écaille de tortue",
  "blanc et gris",
  "tacheté brun",
];

// Tags pour les chats
const lostTags = [
  "collier rouge",
  "collier bleu",
  "collier noir",
  "pucé",
  "tatoué",
  "sociable",
  "craintif",
  "timide",
  "joueur",
  "affectueux",
  "jeune",
  "âgé",
  "castré",
  "stérilisée",
  "médicaments",
];

const foundTags = [
  "sans collier",
  "collier cassé",
  "pucé",
  "tatoué",
  "blessé",
  "maigre",
  "bien nourri",
  "sociable",
  "craintif",
  "agressif",
  "jeune",
  "âgé",
  "castré",
  "stérilisée",
  "indemne",
];

// Générer un timestamp aléatoire dans les 30 derniers jours
const getRandomRecentTimestamp = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  const hoursAgo = Math.floor(Math.random() * 24);
  const minutesAgo = Math.floor(Math.random() * 60);

  now.setDate(now.getDate() - daysAgo);
  now.setHours(now.getHours() - hoursAgo);
  now.setMinutes(now.getMinutes() - minutesAgo);

  return Timestamp.fromDate(now);
};

// Fonction pour obtenir des tags aléatoires
const getRandomTags = (tagsList, count = 3) => {
  const shuffled = [...tagsList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.max(1, Math.min(count, tagsList.length)));
};

// Générer les chats perdus (10)
const lostPets = Array.from({ length: 10 }, (_, index) => {
  const userId = `user${Math.floor(Math.random() * 5) + 1}`;
  const user = sampleUsers.find((u) => u.id === userId);
  const addressIndex = Math.floor(Math.random() * waterlooAddresses.length);
  const timestamp = getRandomRecentTimestamp();
  const imageIndex = Math.floor(Math.random() * catImages.length);
  const nameIndex = Math.floor(Math.random() * catNames.length);
  const breedIndex = Math.floor(Math.random() * catBreeds.length);
  const colorIndex = Math.floor(Math.random() * catColors.length);
  const gender = Math.random() > 0.5 ? "male" : "female";
  const age = Math.floor(Math.random() * 15) + 1;

  return {
    id: `lost${index + 1}`,
    name: catNames[nameIndex],
    status: "lost",
    species: "chat",
    breed: catBreeds[breedIndex],
    color: catColors[colorIndex],
    age: age,
    gender: gender,
    description: `Chat ${catColors[colorIndex]} de race ${
      catBreeds[breedIndex]
    }. ${gender === "male" ? "Il" : "Elle"} a ${age} an${
      age > 1 ? "s" : ""
    } et ${gender === "male" ? "il" : "elle"} est ${
      Math.random() > 0.5 ? "très affectueux" : "plutôt timide"
    }.`,
    last_seen_date: timestamp,
    last_seen_location: {
      ...waterlooAddresses[addressIndex],
      coordinates: getRandomWaterlooCoordinates(),
    },
    contact: {
      name: user.displayName,
      email: user.email,
      phone: `+32 ${Math.floor(Math.random() * 900) + 100} ${
        Math.floor(Math.random() * 90) + 10
      } ${Math.floor(Math.random() * 90) + 10} ${
        Math.floor(Math.random() * 90) + 10
      }`,
    },
    images: [catImages[imageIndex]],
    tags: getRandomTags(lostTags),
    userId: userId,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
});

// Générer les chats trouvés (10)
const foundPets = Array.from({ length: 10 }, (_, index) => {
  const userId = `user${Math.floor(Math.random() * 5) + 1}`;
  const user = sampleUsers.find((u) => u.id === userId);
  const addressIndex = Math.floor(Math.random() * waterlooAddresses.length);
  const timestamp = getRandomRecentTimestamp();
  const imageIndex = Math.floor(Math.random() * catImages.length);
  const nameIndex = Math.floor(Math.random() * catNames.length);
  const breedIndex = Math.floor(Math.random() * catBreeds.length);
  const colorIndex = Math.floor(Math.random() * catColors.length);
  const gender = Math.random() > 0.5 ? "male" : "female";
  const ageEstimate = `${Math.floor(Math.random() * 10) + 1}-${
    Math.floor(Math.random() * 5) + 2
  } ans`;

  return {
    id: `found${index + 1}`,
    name: Math.random() > 0.3 ? catNames[nameIndex] : "",
    status: "found",
    species: "chat",
    breed: `Possible ${catBreeds[breedIndex]}`,
    color: catColors[colorIndex],
    age_estimate: ageEstimate,
    gender: gender,
    description: `Chat ${catColors[colorIndex]} trouvé près de ${
      waterlooAddresses[addressIndex].address
    }. ${gender === "male" ? "Il" : "Elle"} semble être un ${
      catBreeds[breedIndex]
    } et ${gender === "male" ? "il" : "elle"} est ${
      Math.random() > 0.5 ? "très sociable" : "plutôt craintif"
    }.`,
    found_date: timestamp,
    found_location: {
      ...waterlooAddresses[addressIndex],
      coordinates: getRandomWaterlooCoordinates(),
    },
    contact: {
      name: user.displayName,
      email: user.email,
      phone: `+32 ${Math.floor(Math.random() * 900) + 100} ${
        Math.floor(Math.random() * 90) + 10
      } ${Math.floor(Math.random() * 90) + 10} ${
        Math.floor(Math.random() * 90) + 10
      }`,
    },
    images: [catImages[imageIndex]],
    tags: getRandomTags(foundTags),
    userId: userId,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
});

// Fonction pour réinitialiser les données Firebase
export const resetFirebaseData = async () => {
  try {
    console.log("Réinitialisation des données Firebase...");

    // Supprimer tous les chats
    const petsRef = collection(db, "pets");
    const petsSnapshot = await getDocs(petsRef);
    const deletePromises = [];

    petsSnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });

    // Supprimer tous les utilisateurs
    const usersRef = collection(db, "users");
    const usersSnapshot = await getDocs(usersRef);

    usersSnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });

    await Promise.all(deletePromises);
    console.log("Données Firebase réinitialisées avec succès");
  } catch (error) {
    console.error("Erreur lors de la réinitialisation des données:", error);
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
