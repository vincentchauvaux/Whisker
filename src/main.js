import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import FirebasePlugin from "./plugins/firebase";
import { initializeFirebaseData } from "./data/initializeFirebase";

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

app.mount("#app");
