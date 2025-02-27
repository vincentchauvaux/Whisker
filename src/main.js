import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import FirebasePlugin from "./plugins/firebase";
import {
  initializeFirebaseData,
  initializeDataOnce,
} from "./data/initializeFirebase";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { userService } from "./services/userService";

const app = createApp(App);

// Use Firebase plugin
app.use(FirebasePlugin);
// Use router
app.use(router);

// Initialize Firebase data without force reset
initializeFirebaseData(false)
  .then(() => {
    console.log("Vérification des données Firebase terminée");
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la vérification des données Firebase:",
      error
    );
  });

// Configurer l'écouteur d'authentification global
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("Utilisateur connecté dans main.js:", user.email);
    try {
      // Sauvegarder les données utilisateur dans Firestore
      await userService.createOrUpdateUser(user);
    } catch (error) {
      console.error(
        "Erreur lors de la sauvegarde des données utilisateur:",
        error
      );
    }
  } else {
    console.log("Aucun utilisateur connecté dans main.js");
  }
});

// Exposer la fonction d'initialisation des données dans la console
window.initializeDataOnce = initializeDataOnce;
console.log(
  "Pour initialiser les données de test, exécutez window.initializeDataOnce() dans la console"
);

app.mount("#app");
