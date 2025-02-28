const { seedDatabase } = require("./seedDatabase.js");

// Exécuter la fonction de peuplement de la base de données
console.log("Démarrage du script de peuplement de la base de données...");
seedDatabase()
  .then(() => {
    console.log("Script terminé avec succès!");
    // Sortir du processus après un délai pour s'assurer que toutes les opérations asynchrones sont terminées
    setTimeout(() => process.exit(0), 3000);
  })
  .catch((error) => {
    console.error("Erreur lors de l'exécution du script:", error);
    process.exit(1);
  });
