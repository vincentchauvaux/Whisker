import { db, auth } from "../firebase/config.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Fonction pour supprimer tous les signalements existants
const deleteAllPets = async () => {
  try {
    console.log("Suppression des signalements existants...");
    const petsCollection = collection(db, "pets");
    const petsSnapshot = await getDocs(petsCollection);

    const deletePromises = petsSnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    console.log(`${petsSnapshot.size} signalements supprimés avec succès.`);
  } catch (error) {
    console.error("Erreur lors de la suppression des signalements:", error);
    throw error;
  }
};

// Fonction pour créer un nouvel utilisateur
const createUser = async (email, displayName, index) => {
  try {
    // Créer un utilisateur avec Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      "Password123!" // Mot de passe par défaut
    );

    const userId = userCredential.user.uid;

    // Ajouter les données utilisateur dans Firestore
    await setDoc(doc(db, "users", userId), {
      email,
      displayName,
      photoURL: null,
      createdAt: Timestamp.now(),
      lastLogin: Timestamp.now(),
      phone: `+32${Math.floor(Math.random() * 10000000) + 70000000}`,
      address: `${Math.floor(Math.random() * 100) + 1} Rue de ${
        ["Bruxelles", "Liège", "Namur", "Charleroi", "Mons"][index % 5]
      }`,
      city: ["Bruxelles", "Liège", "Namur", "Charleroi", "Mons"][index % 5],
    });

    console.log(`Utilisateur créé: ${email}`);
    return userId;
  } catch (error) {
    console.error(
      `Erreur lors de la création de l'utilisateur ${email}:`,
      error
    );
    // Si l'utilisateur existe déjà, on essaie de se connecter
    if (error.code === "auth/email-already-in-use") {
      try {
        // On génère un nouvel email
        const newEmail = `user${Date.now()}${index}@example.com`;
        return await createUser(newEmail, displayName, index);
      } catch (innerError) {
        console.error("Erreur lors de la nouvelle tentative:", innerError);
        throw innerError;
      }
    }
    throw error;
  }
};

// Données pour les chats perdus
const lostPetsData = [
  {
    name: "Minou",
    breed: "Européen",
    color: "Noir",
    gender: "male",
    age_estimate: "Adulte",
    distinctive_features: "Collier rouge, tache blanche sur le poitrail",
    last_seen_location: {
      address: "Rue de la Loi 16",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-06-15"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat1.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 100,
  },
  {
    name: "Felix",
    breed: "Siamois",
    color: "Blanc",
    gender: "male",
    age_estimate: "Jeune",
    distinctive_features: "Yeux bleus, oreille gauche légèrement déchirée",
    last_seen_location: {
      address: "Avenue Louise 143",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-07-22"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat2.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 150,
  },
  {
    name: "Caramel",
    breed: "Maine Coon",
    color: "Roux",
    gender: "male",
    age_estimate: "Adulte",
    distinctive_features: "Très grand, poil long, queue touffue",
    last_seen_location: {
      address: "Chaussée de Waterloo 862",
      city: "Uccle",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-08-05"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat3.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 200,
  },
  {
    name: "Luna",
    breed: "Ragdoll",
    color: "Bicolore",
    gender: "female",
    age_estimate: "Jeune",
    distinctive_features: "Collier bleu avec clochette, très affectueuse",
    last_seen_location: {
      address: "Rue Neuve 123",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-09-10"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat4.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 120,
  },
  {
    name: "Oscar",
    breed: "British Shorthair",
    color: "Gris",
    gender: "male",
    age_estimate: "Senior",
    distinctive_features: "Puce électronique, boiterie patte arrière droite",
    last_seen_location: {
      address: "Boulevard Anspach 85",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-10-18"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat5.jpg?alt=media",
    ],
    reward_offered: false,
    reward_amount: 0,
  },
  {
    name: "Nala",
    breed: "Abyssin",
    color: "Roux",
    gender: "female",
    age_estimate: "Adulte",
    distinctive_features: "Pelage tacheté, très fine",
    last_seen_location: {
      address: "Place Flagey 18",
      city: "Ixelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-11-05"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat6.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 80,
  },
  {
    name: "Simba",
    breed: "Bengal",
    color: "Tigré",
    gender: "male",
    age_estimate: "Jeune",
    distinctive_features: "Motif tacheté, très actif et joueur",
    last_seen_location: {
      address: "Avenue de Tervuren 245",
      city: "Woluwe-Saint-Pierre",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2023-12-12"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat7.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 250,
  },
  {
    name: "Lily",
    breed: "Persan",
    color: "Blanc",
    gender: "female",
    age_estimate: "Adulte",
    distinctive_features: "Poil très long, nez écrasé, yeux verts",
    last_seen_location: {
      address: "Rue du Bailli 37",
      city: "Ixelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2024-01-08"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat8.jpg?alt=media",
    ],
    reward_offered: false,
    reward_amount: 0,
  },
  {
    name: "Max",
    breed: "Européen",
    color: "Noir",
    gender: "male",
    age_estimate: "Chaton",
    distinctive_features: "Petite tache blanche sous le menton",
    last_seen_location: {
      address: "Rue de Flandre 52",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2024-02-20"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat9.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 50,
  },
  {
    name: "Coco",
    breed: "Sacré de Birmanie",
    color: "Bicolore",
    gender: "female",
    age_estimate: "Senior",
    distinctive_features: "Yeux bleus, pattes blanches, collier avec médaille",
    last_seen_location: {
      address: "Avenue Franklin Roosevelt 108",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    last_seen_date: new Date("2024-03-15"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat10.jpg?alt=media",
    ],
    reward_offered: true,
    reward_amount: 180,
  },
];

// Données pour les chats trouvés
const foundPetsData = [
  {
    name: "",
    breed: "Européen",
    color: "Tigré",
    gender: "unknown",
    age_estimate: "Adulte",
    distinctive_features: "Collier rouge cassé, très sociable",
    found_location: {
      address: "Parc du Cinquantenaire",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2023-06-20"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat11.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Siamois",
    color: "Blanc",
    gender: "male",
    age_estimate: "Jeune",
    distinctive_features: "Yeux bleus, très maigre",
    found_location: {
      address: "Rue Belliard 135",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2023-07-30"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat12.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Norvégien",
    color: "Roux",
    gender: "male",
    age_estimate: "Adulte",
    distinctive_features: "Poil long, queue très touffue",
    found_location: {
      address: "Bois de la Cambre",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2023-08-15"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat13.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Chartreux",
    color: "Gris",
    gender: "female",
    age_estimate: "Adulte",
    distinctive_features: "Yeux dorés, pelage épais",
    found_location: {
      address: "Place Sainte-Catherine",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2023-09-22"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat14.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Européen",
    color: "Noir",
    gender: "unknown",
    age_estimate: "Chaton",
    distinctive_features: "Très petit, environ 2-3 mois",
    found_location: {
      address: "Rue Haute 290",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2023-10-30"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat15.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Bengal",
    color: "Tigré",
    gender: "male",
    age_estimate: "Jeune",
    distinctive_features: "Motif tacheté, très énergique",
    found_location: {
      address: "Parc Josaphat",
      city: "Schaerbeek",
      region: "Bruxelles",
    },
    found_date: new Date("2023-11-18"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat16.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Angora Turc",
    color: "Blanc",
    gender: "female",
    age_estimate: "Adulte",
    distinctive_features: "Poil long et soyeux, très élégante",
    found_location: {
      address: "Avenue Louise 200",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2023-12-25"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat17.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Européen",
    color: "Tricolore",
    gender: "female",
    age_estimate: "Senior",
    distinctive_features: "Boiterie légère, très calme",
    found_location: {
      address: "Rue du Midi 78",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2024-01-15"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat18.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Bleu Russe",
    color: "Gris",
    gender: "male",
    age_estimate: "Adulte",
    distinctive_features: "Pelage gris-bleu dense, yeux verts",
    found_location: {
      address: "Square Ambiorix",
      city: "Bruxelles",
      region: "Bruxelles",
    },
    found_date: new Date("2024-02-28"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat19.jpg?alt=media",
    ],
  },
  {
    name: "",
    breed: "Exotic Shorthair",
    color: "Roux",
    gender: "unknown",
    age_estimate: "Jeune",
    distinctive_features: "Face plate, corps trapu",
    found_location: {
      address: "Boulevard du Souverain 165",
      city: "Auderghem",
      region: "Bruxelles",
    },
    found_date: new Date("2024-03-20"),
    images: [
      "https://firebasestorage.googleapis.com/v0/b/whikser-a5580.appspot.com/o/pets%2Fcat20.jpg?alt=media",
    ],
  },
];

// Fonction principale pour recréer la base de données
const seedDatabase = async () => {
  try {
    // Supprimer tous les signalements existants
    await deleteAllPets();

    console.log("Création de nouveaux utilisateurs et signalements...");

    // Créer 10 utilisateurs pour les chats perdus
    for (let i = 0; i < 10; i++) {
      const email = `user_lost${i}@example.com`;
      const displayName = `Propriétaire ${i + 1}`;
      const userId = await createUser(email, displayName, i);

      // Créer un signalement de chat perdu
      const petData = {
        ...lostPetsData[i],
        userId,
        status: "lost",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      await addDoc(collection(db, "pets"), petData);
      console.log(`Signalement de chat perdu #${i + 1} créé`);
    }

    // Créer 10 utilisateurs pour les chats trouvés
    for (let i = 0; i < 10; i++) {
      const email = `user_found${i}@example.com`;
      const displayName = `Découvreur ${i + 1}`;
      const userId = await createUser(email, displayName, i + 10);

      // Créer un signalement de chat trouvé
      const petData = {
        ...foundPetsData[i],
        userId,
        status: "found",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      await addDoc(collection(db, "pets"), petData);
      console.log(`Signalement de chat trouvé #${i + 1} créé`);
    }

    console.log("Base de données recréée avec succès!");
  } catch (error) {
    console.error("Erreur lors de la recréation de la base de données:", error);
  }
};

// Exporter la fonction pour pouvoir l'appeler depuis un autre fichier
export { seedDatabase };
