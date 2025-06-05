import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import FirebasePlugin from "./plugins/firebase";
import { FontAwesomeIcon } from "./plugins/fontawesome";
import {
  initializeFirebaseData,
  initializeDataOnce,
} from "./data/initializeFirebase";
import { userStore } from "./stores/userStore";
import { petStore } from "./stores/petStore";

// Import Toast
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

// Use Firebase plugin
app.use(FirebasePlugin);
// Use router
app.use(router);
// Use Toast
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});

// Enregistrer le composant FontAwesomeIcon globalement
app.component("font-awesome-icon", FontAwesomeIcon);

// Rendre les stores disponibles globalement
app.config.globalProperties.$userStore = userStore;
app.config.globalProperties.$petStore = petStore;

// Initialiser l'écouteur d'authentification
userStore.initAuthListener();

// Ajouter un écouteur d'événement global pour la navigation
window.addEventListener("navigate-to-pet", (event) => {
  const id = event.detail.id;
  console.log(`[Global Event] Navigating to pet details: ${id}`);
  router.push({ name: "PetDetailsPage", params: { id } });
});

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

// Exposer la fonction d'initialisation des données dans la console
window.initializeDataOnce = initializeDataOnce;
console.log(
  "Pour initialiser les données de test, exécutez window.initializeDataOnce() dans la console"
);

app.mount("#app");
