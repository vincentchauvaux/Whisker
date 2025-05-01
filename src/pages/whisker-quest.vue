<template>
  <MainLayout>
    <div class="max-w-4xl mx-auto px-4 py-12 pt-32">
      <!-- En-tête -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-montserrat font-bold text-primary mb-6">
          Présentation du projet Whisker Quest
        </h1>
        <div class="w-24 h-1 bg-[#f26052] mx-auto rounded-full"></div>
      </div>

      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Introduction -->
          <div class="p-8 bg-gradient-to-br from-primary/5 to-[#f26052]/5">
            <h2 class="text-2xl font-montserrat font-bold text-primary mb-6">
              Vision graphique et choix visuels
            </h2>
            <div class="space-y-6">
              <div class="flex items-start gap-6">
                <div
                  class="w-16 h-16 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-primary flex items-center justify-center"
                >
                  <span class="text-white text-2xl">🎨</span>
                </div>
                <div>
                  <h3
                    class="font-montserrat font-bold text-primary text-lg mb-4"
                  >
                    1. Introduction et vision créative
                  </h3>
                  <p class="font-open-sans text-gray-600 mb-4">
                    Whisker Quest est bien plus qu'une simple plateforme de
                    recherche d'animaux perdus. Notre vision graphique traduit
                    une mission émotionnelle : transformer l'expérience
                    anxiogène de la perte d'un animal en un parcours rassurant,
                    engageant et communautaire.
                  </p>
                  <p class="font-open-sans text-gray-600 mb-4">
                    L'identité visuelle que j'ai développée s'articule autour de
                    trois piliers fondamentaux :
                  </p>
                  <ul class="font-open-sans text-gray-600 list-disc pl-6 mb-4">
                    <li>
                      L'équilibre émotionnel : chaleur et réassurance
                      contrebalançant l'urgence et l'anxiété
                    </li>
                    <li>
                      L'engagement communautaire : éléments visuels favorisant
                      le sentiment d'appartenance
                    </li>
                    <li>
                      La clarté fonctionnelle : design intuitif sans sacrifice
                      d'élégance
                    </li>
                  </ul>
                  <p class="font-open-sans text-gray-600">
                    Chaque élément graphique a été minutieusement pensé pour
                    soutenir cette triple ambition, créant une expérience
                    cohérente et mémorable qui se démarque des approches
                    infantilisantes ou trop cliniques souvent observées dans ce
                    domaine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Palette chromatique -->
          <div class="p-8">
            <h3 class="font-montserrat font-bold text-primary text-lg mb-6">
              2. Palette chromatique et justification émotionnelle
            </h3>
            <p class="font-open-sans text-gray-600 mb-6">
              Ma palette repose sur un équilibre soigneusement étudié entre
              profondeur, énergie et clarté :
            </p>
            <div class="space-y-6">
              <div
                class="flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-transparent"
              >
                <div
                  class="w-20 h-20 rounded-full flex-shrink-0 ring-4 ring-gray-100"
                  style="background-color: #162e35"
                ></div>
                <div>
                  <h4 class="font-montserrat font-bold text-primary text-lg">
                    Vert Profond (#162E35)
                  </h4>
                  <p class="font-open-sans text-gray-600 mt-2">
                    Notre couleur primaire évoque la nature, la stabilité et la
                    fiabilité. Ce ton sophistiqué ancre visuellement l'interface
                    tout en inspirant confiance. Sa profondeur crée une toile de
                    fond apaisante qui contrebalance l'anxiété potentielle des
                    utilisateurs confrontés à la perte d'un animal. Utilisé pour
                    les éléments structurants, en-têtes et éléments d'identité
                    principale, ce vert établit immédiatement le caractère
                    sérieux mais bienveillant de la plateforme.
                  </p>
                </div>
              </div>

              <div
                class="flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-[#f26052]/5 to-transparent"
              >
                <div
                  class="w-20 h-20 rounded-full flex-shrink-0 ring-4 ring-gray-100"
                  style="background-color: #f26052"
                ></div>
                <div>
                  <h4 class="font-montserrat font-bold text-primary text-lg">
                    Corail Vif (#F26052)
                  </h4>
                  <p class="font-open-sans text-gray-600 mt-2">
                    Notre couleur secondaire apporte l'énergie et la chaleur
                    nécessaires. Cette teinte vibrante guide intuitivement
                    l'utilisateur vers les actions clés sans l'agressivité du
                    rouge pur. Son caractère chaleureux symbolise l'empathie et
                    la passion qui animent notre communauté, tout en créant un
                    contraste dynamique avec notre vert profond. Réservée
                    principalement aux call-to-action, badges importants et
                    notifications, elle attire l'attention sans créer de fatigue
                    visuelle.
                  </p>
                </div>
              </div>

              <div
                class="flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-[#4b5563]/5 to-transparent"
              >
                <div
                  class="w-20 h-20 rounded-full flex-shrink-0 ring-4 ring-gray-100"
                  style="background-color: #4b5563"
                ></div>
                <div>
                  <h4 class="font-montserrat font-bold text-primary text-lg">
                    Gris Ardoise (#4B5563)
                  </h4>
                  <p class="font-open-sans text-gray-600 mt-2">
                    Choisi pour les textes et éléments informatifs, ce gris
                    moyen offre une lisibilité optimale tout en évitant la
                    dureté du noir pur. Sa neutralité sophistiquée permet aux
                    informations de rester au premier plan tout en s'intégrant
                    harmonieusement dans notre palette. Cette teinte crée une
                    hiérarchie visuelle naturelle, permettant aux contenus
                    textuels de s'affirmer sans dominer les éléments interactifs
                    colorés.
                  </p>
                </div>
              </div>

              <div
                class="flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-gray-50 to-transparent"
              >
                <div
                  class="w-20 h-20 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-white border-2 border-gray-200"
                ></div>
                <div>
                  <h4 class="font-montserrat font-bold text-primary text-lg">
                    Blanc et Nuances Légères (#FFFFFF et #F9FAFB)
                  </h4>
                  <p class="font-open-sans text-gray-600 mt-2">
                    Le blanc sert de toile de fond principale, créant une
                    impression d'espace, de clarté et de légèreté essentielle
                    dans un contexte émotionnellement chargé. Le gris très pâle
                    (#F9FAFB) permet de démarquer subtilement certaines sections
                    pour structurer l'information sans ruptures visuelles
                    brutales. Cette approche minimaliste favorise la
                    concentration sur les contenus essentiels tout en offrant
                    des moments de "respiration visuelle".
                  </p>
                </div>
              </div>

              <div
                class="flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-gray-900/5 to-transparent"
              >
                <div
                  class="w-20 h-20 rounded-full flex-shrink-0 ring-4 ring-gray-100"
                  style="background-color: #000000"
                ></div>
                <div>
                  <h4 class="font-montserrat font-bold text-primary text-lg">
                    Noir (#000000)
                  </h4>
                  <p class="font-open-sans text-gray-600 mt-2">
                    Utilisé avec parcimonie pour les contrastes essentiels, les
                    ombres et certains éléments nécessitant une attention
                    particulière. Son utilisation restreinte en fait un outil
                    puissant pour accentuer les informations critiques sans
                    alourdir l'interface.
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 rounded-lg bg-gray-50">
              <h4 class="font-montserrat font-bold text-primary text-lg mb-4">
                Système émotionnel et fonctionnel
              </h4>
              <ul class="font-open-sans text-gray-600 space-y-2">
                <li>• Le fond blanc crée un espace apaisant et neutre</li>
                <li>• Le vert profond structure et identifie la plateforme</li>
                <li>• Le corail dynamise et signale les points d'action</li>
                <li>• Les nuances de gris hiérarchisent l'information</li>
                <li>• Les touches de noir accentuent les éléments critiques</li>
              </ul>
            </div>
          </div>

          <!-- Typographie -->
          <div class="p-8 bg-gradient-to-br from-gray-50 to-white">
            <h3 class="font-montserrat font-bold text-primary text-lg mb-6">
              3. Typographie et expression visuelle
            </h3>
            <p class="font-open-sans text-gray-600 mb-6">
              La sélection typographique renforce notre positionnement entre
              professionnalisme et chaleur humaine :
            </p>

            <div class="grid grid-cols-2 gap-8 mb-8">
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <h4 class="font-montserrat font-bold text-primary text-lg mb-4">
                  Montserrat
                </h4>
                <p class="font-montserrat text-2xl mb-4">Aa Bb Cc Dd Ee</p>
                <p class="font-open-sans text-gray-600">
                  Sa structure géométrique aux proportions équilibrées confère
                  autorité et modernité. Les variations de graisse (Bold pour
                  les titres principaux, Semi-Bold pour les sous-titres) créent
                  une hiérarchie visuelle immédiatement perceptible.
                </p>
              </div>
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <h4 class="font-montserrat font-bold text-primary text-lg mb-4">
                  Open Sans
                </h4>
                <p class="font-open-sans text-2xl mb-4">Aa Bb Cc Dd Ee</p>
                <p class="font-open-sans text-gray-600">
                  Cette police humaniste apporte chaleur et lisibilité optimale,
                  même à petite taille. Sa compatibilité harmonieuse avec
                  Montserrat crée une complémentarité parfaite.
                </p>
              </div>
            </div>

            <div class="p-6 rounded-lg bg-white shadow-sm">
              <h4 class="font-montserrat font-bold text-primary text-lg mb-4">
                Ratio et hiérarchie
              </h4>
              <p class="font-open-sans text-gray-600 mb-4">
                J'ai établi un système proportionnel rigoureux :
              </p>
              <ul class="font-open-sans text-gray-600 space-y-2">
                <li class="flex items-center gap-2">
                  <span class="font-montserrat font-bold text-primary">H1</span>
                  <span>Montserrat Bold 24px (2.5rem web)</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="font-montserrat font-bold text-primary">H2</span>
                  <span>Montserrat Semi-Bold 18px (2rem web)</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="font-montserrat font-bold text-primary">H3</span>
                  <span>Montserrat Semi-Bold 14px (1.75rem web)</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="font-montserrat font-bold text-primary"
                    >Corps</span
                  >
                  <span>Open Sans Regular 16px avec interligne 1.6</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="font-montserrat font-bold text-primary"
                    >Légendes</span
                  >
                  <span>Open Sans Italic 14px</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Éléments graphiques -->
          <div class="p-8">
            <h3 class="font-montserrat font-bold text-primary text-lg mb-6">
              4. Éléments graphiques distinctifs et innovation visuelle
            </h3>

            <div class="space-y-8">
              <!-- Système iconographique -->
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <div class="flex items-start gap-6">
                  <div
                    class="w-16 h-16 rounded-full flex-shrink-0 bg-primary flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4
                      class="font-montserrat font-bold text-primary text-lg mb-4"
                    >
                      Système iconographique cohérent
                    </h4>
                    <p class="font-open-sans text-gray-600 mb-4">
                      J'ai développé un langage iconographique unifié avec des
                      caractéristiques distinctives :
                    </p>
                    <ul class="font-open-sans text-gray-600 space-y-2">
                      <li>
                        • Épaisseur de trait constante (1pt) créant une
                        cohérence immédiate
                      </li>
                      <li>
                        • Terminaisons légèrement arrondies apportant une touche
                        organique
                      </li>
                      <li>
                        • Proportions équilibrées entre traits et espaces
                        négatifs
                      </li>
                      <li>
                        • Palette restreinte s'adaptant au contexte (vert
                        primaire, corail pour les actions, gris pour les
                        éléments secondaires)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Système de tags visuels -->
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <div class="flex items-start gap-6">
                  <div
                    class="w-16 h-16 rounded-full flex-shrink-0 bg-[#f26052] flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🏷️</span>
                  </div>
                  <div>
                    <h4
                      class="font-montserrat font-bold text-primary text-lg mb-4"
                    >
                      Système de tags visuels innovant
                    </h4>
                    <p class="font-open-sans text-gray-600 mb-4">
                      L'innovation majeure de notre identité est le système de
                      tags visuels pour l'identification des caractéristiques
                      animales. Ce langage pictographique unique résout deux
                      défis cruciaux :
                    </p>
                    <ul class="font-open-sans text-gray-600 space-y-2 mb-4">
                      <li>
                        • La standardisation des descriptions d'animaux aux
                        caractéristiques infiniment variées
                      </li>
                      <li>
                        • Le dépassement des barrières linguistiques pour les
                        signalements internationaux
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Badges et gamification -->
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <div class="flex items-start gap-6">
                  <div
                    class="w-16 h-16 rounded-full flex-shrink-0 bg-[#4b5563] flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🏅</span>
                  </div>
                  <div>
                    <h4
                      class="font-montserrat font-bold text-primary text-lg mb-4"
                    >
                      Badges et gamification visuelle
                    </h4>
                    <p class="font-open-sans text-gray-600 mb-4">
                      Notre système de badges transforme la contribution en
                      identité visuelle valorisante. Chaque badge combine :
                    </p>
                    <ul class="font-open-sans text-gray-600 space-y-2">
                      <li>
                        • Une forme contenante signifiant la catégorie
                        d'accomplissement
                      </li>
                      <li>
                        • Un symbole central représentant l'action spécifique
                      </li>
                      <li>
                        • Une palette chromatique spécifique utilisant des
                        variations de notre vert et corail
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Interface -->
          <div class="p-8 bg-gradient-to-br from-primary/5 to-[#f26052]/5">
            <h3 class="font-montserrat font-bold text-primary text-lg mb-6">
              5. Interface et expérience visuelle
            </h3>
            <p class="font-open-sans text-gray-600 mb-6">
              La matérialisation de ces principes visuels se traduit dans des
              interfaces soigneusement orchestrées :
            </p>

            <div class="space-y-8">
              <!-- Page d'accueil -->
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <div class="flex items-start gap-6">
                  <div
                    class="w-16 h-16 rounded-full flex-shrink-0 bg-primary flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🏠</span>
                  </div>
                  <div>
                    <h4
                      class="font-montserrat font-bold text-primary text-lg mb-4"
                    >
                      Page d'accueil : première impression émotionnelle
                    </h4>
                    <p class="font-open-sans text-gray-600 mb-4">
                      L'entrée dans l'univers Whisker Quest est marquée par :
                    </p>
                    <ul class="font-open-sans text-gray-600 space-y-2">
                      <li>
                        • Une image héroïque soigneusement sélectionnée montrant
                        une connexion animal-humain authentique
                      </li>
                      <li>
                        • Une navigation épurée privilégiant les actions
                        essentielles ("Signaler", "Rechercher")
                      </li>
                      <li>
                        • Des call-to-action en corail vif attirant
                        naturellement l'attention
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Formulaire de signalement -->
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <div class="flex items-start gap-6">
                  <div
                    class="w-16 h-16 rounded-full bg-[#f26052] flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">📝</span>
                  </div>
                  <div>
                    <h4
                      class="font-montserrat font-bold text-primary text-lg mb-4"
                    >
                      Formulaire de signalement : l'empathie par le design
                    </h4>
                    <p class="font-open-sans text-gray-600 mb-4">
                      Ce moment potentiellement stressant est transformé par :
                    </p>
                    <ul class="font-open-sans text-gray-600 space-y-2">
                      <li>
                        • Une progression visualisée avec dégradé subtil du vert
                        au corail
                      </li>
                      <li>• Un compartimentage aéré sur fond blanc</li>
                      <li>
                        • Un avatar dynamique qui se met à jour en temps réel
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Carte interactive -->
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <div class="flex items-start gap-6">
                  <div
                    class="w-16 h-16 rounded-full bg-[#4b5563] flex items-center justify-center"
                  >
                    <span class="text-white text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h4
                      class="font-montserrat font-bold text-primary text-lg mb-4"
                    >
                      Carte interactive : visualisation spatiale intelligente
                    </h4>
                    <p class="font-open-sans text-gray-600 mb-4">
                      Notre approche cartographique distinctive comprend :
                    </p>
                    <ul class="font-open-sans text-gray-600 space-y-2">
                      <li>• Un fond cartographique aux tons désaturés</li>
                      <li>
                        • Une distinction visuelle claire entre animaux perdus
                        et trouvés
                      </li>
                      <li>
                        • Des clusters interactifs pour les zones à forte
                        densité
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Animations -->
          <div class="p-8">
            <h3 class="font-montserrat font-bold text-primary text-lg mb-6">
              6. Animation et micro-interactions
            </h3>
            <p class="font-open-sans text-gray-600 mb-6">
              Les animations ne sont pas de simples ornements mais des vecteurs
              d'émotion et d'information :
            </p>

            <div class="grid grid-cols-2 gap-6">
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <h4 class="font-montserrat font-bold text-primary text-lg mb-4">
                  Langage du mouvement
                </h4>
                <ul class="font-open-sans text-gray-600 space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-primary"></span>
                    Mouvements rebondissants (overshoot 5%)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#f26052]"></span>
                    Transitions mesurées pour les alertes
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#4b5563]"></span>
                    Timing calibré pour les réponses émotionnelles
                  </li>
                </ul>
              </div>
              <div class="p-6 rounded-lg bg-white shadow-sm">
                <h4 class="font-montserrat font-bold text-primary text-lg mb-4">
                  Feedback visuel
                </h4>
                <ul class="font-open-sans text-gray-600 space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-primary"></span>
                    Effet d'élévation des boutons
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#f26052]"></span>
                    Animation progressive des tags
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#4b5563]"></span>
                    Feedback immédiat pour les confirmations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Conclusion -->
          <div class="p-8 bg-gradient-to-br from-primary/5 to-[#f26052]/5">
            <h3 class="font-montserrat font-bold text-primary text-lg mb-6">
              10. Conclusion : une identité au service de l'émotion
            </h3>
            <div class="space-y-6">
              <div class="flex items-start gap-6">
                <div
                  class="w-16 h-16 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-primary flex items-center justify-center"
                >
                  <span class="text-white text-2xl">🎯</span>
                </div>
                <div>
                  <p class="font-open-sans text-gray-600">
                    L'identité visuelle de Whisker Quest représente bien plus
                    qu'un simple exercice esthétique. Elle constitue une réponse
                    délibérée et méthodique à un défi complexe : traduire
                    visuellement une expérience émotionnellement chargée tout en
                    facilitant l'action efficace.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div
                  class="w-16 h-16 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-[#f26052] flex items-center justify-center"
                >
                  <span class="text-white text-2xl">❤️</span>
                </div>
                <div>
                  <p class="font-open-sans text-gray-600">
                    Chaque élément visuel – du logo aux composants d'interface,
                    de la palette chromatique au système de tags – a été conçu
                    avec une double considération constante pour l'impact
                    émotionnel et l'efficacité fonctionnelle.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div
                  class="w-16 h-16 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-[#4b5563] flex items-center justify-center"
                >
                  <span class="text-white text-2xl">⚖️</span>
                </div>
                <div>
                  <p class="font-open-sans text-gray-600">
                    Cette dualité se reflète dans l'équilibre des choix visuels
                    : des couleurs équilibrant profondeur et chaleur, une
                    typographie alliant structure et humanité, un système
                    d'icônes à la fois précis et accessible.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div
                  class="w-16 h-16 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-primary flex items-center justify-center"
                >
                  <span class="text-white text-2xl">✨</span>
                </div>
                <div>
                  <p class="font-open-sans text-gray-600">
                    Au-delà des éléments individuels, c'est la cohérence globale
                    du système visuel qui constitue sa force principale. Cette
                    cohérence crée une expérience fluide et rassurante,
                    transformant une situation potentiellement stressante en
                    parcours guidé et soutenant.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div
                  class="w-16 h-16 rounded-full flex-shrink-0 ring-4 ring-gray-100 bg-[#f26052] flex items-center justify-center"
                >
                  <span class="text-white text-2xl">🌟</span>
                </div>
                <div>
                  <p class="font-open-sans text-gray-600">
                    En définitive, l'identité visuelle de Whisker Quest démontre
                    comment le design graphique peut transcender son rôle
                    esthétique traditionnel pour devenir un véritable vecteur
                    d'impact émotionnel et social positif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
</script>

<style scoped>
/* Styles spécifiques à la page */
</style>
