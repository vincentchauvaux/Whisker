import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMars, faVenus, faQuestion } from "@fortawesome/free-solid-svg-icons";

// Ajouter les icônes à la bibliothèque
library.add(faMars, faVenus, faQuestion);

export { FontAwesomeIcon };
