// Script pour initialiser les données Firebase
// Ce fichier est destiné à être exécuté en ligne de commande avec Node.js
// Exemple d'utilisation: node initData.js
import { initializeDataOnce } from "./src/data/initializeFirebase.js";

// Fonction pour initialiser les données
async function runInitialization() {
  try {
    console.log("Démarrage de l'initialisation des données...");
    const result = await initializeDataOnce();
    console.log("Résultat:", result);
    console.log("Initialisation terminée avec succès!");
  } catch (error) {
    console.error("Erreur lors de l'initialisation:", error);
  } finally {
    process.exit(0); // Terminer le processus une fois terminé
  }
}

// Exécuter l'initialisation
runInitialization();
