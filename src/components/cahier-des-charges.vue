<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <h1 class="text-4xl font-bold text-slate-900 mb-2">
          Cahier des charges
        </h1>
        <p class="text-xl text-slate-600">
          Projet de fin d'étude : Whisker Quest
        </p>
        <p class="text-lg text-slate-500 mt-2">
          Vincent Chauvaux - Institut Paul Hankar - Année 2024-2025
        </p>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-6 py-12">
      <!-- Section 1: Présentation générale -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-emerald-500 pl-4"
          >
            1. Présentation générale
          </h2>

          <!-- 1.1 Nom du projet -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              1.1 Nom du projet
            </h3>
            <p class="text-emerald-700 font-bold text-xl">Whisker Quest</p>
          </div>

          <!-- 1.2 Auteur -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              1.2 Auteur
            </h3>
            <div class="bg-slate-50 rounded-lg p-4">
              <p class="text-slate-700 font-medium">
                Vincent Chauvaux – Étudiant en Infographie
              </p>
              <p class="text-slate-600">Établissement : Paul Hankar</p>
              <p class="text-slate-600">Année académique : [2024-2025]</p>
            </div>
          </div>

          <!-- 1.3 Contexte -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              1.3 Contexte
            </h3>
            <div class="prose prose-lg prose-slate max-w-none">
              <p class="mb-4 text-slate-700 leading-relaxed">
                Whisker Quest dépasse le cadre d'une simple plateforme de
                recherche d'animaux perdus. Sa vision graphique traduit une
                mission émotionnelle : transformer l'expérience anxiogène liée à
                la perte d'un animal en un parcours rassurant et engageant.
              </p>
              <p class="text-slate-700 leading-relaxed">
                C'est une web application communautaire dédiée spécifiquement
                aux propriétaires de chats, avec un double objectif : permettre
                aux utilisateurs de gérer facilement les informations de santé
                et de suivi de leur animal (rendez-vous vétérinaires,
                traitements), et faciliter la recherche de chats perdus grâce à
                une base de données partagée par la communauté. Ce projet
                associe harmonieusement design d'interface, expérience
                utilisateur et narration visuelle, créant un univers chaleureux
                et bienveillant centré sur la relation humain-animal.
              </p>
            </div>
          </div>

          <!-- 1.4 Direction artistique -->
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              1.4 Direction artistique
            </h3>
            <div class="prose prose-lg prose-slate max-w-none">
              <p class="mb-4 text-slate-700 leading-relaxed">
                L'identité visuelle s'appuie sur trois piliers essentiels :
              </p>
              <ul class="mb-6 space-y-3">
                <li class="flex items-start">
                  <span
                    class="inline-block w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="text-slate-800"
                      >Équilibre émotionnel :</strong
                    >
                    <span class="text-slate-700">
                      Chaleur et réassurance en réponse à l'urgence et
                      l'anxiété.</span
                    >
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="text-slate-800"
                      >Engagement communautaire :</strong
                    >
                    <span class="text-slate-700">
                      Éléments visuels qui renforcent le sentiment
                      d'appartenance.</span
                    >
                  </div>
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"
                  ></span>
                  <div>
                    <strong class="text-slate-800"
                      >Clarté fonctionnelle :</strong
                    >
                    <span class="text-slate-700">
                      Un design intuitif tout en élégance.</span
                    >
                  </div>
                </li>
              </ul>
              <p class="text-slate-700 leading-relaxed">
                Chaque élément graphique a été minutieusement conçu pour
                atteindre cette triple ambition, en offrant une expérience
                cohérente, mémorable et distincte des approches trop enfantines
                ou trop cliniques habituellement observées dans ce secteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Objectifs -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-4"
          >
            2. Objectifs du projet
          </h2>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span
                class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"
              ></span>
              <span class="text-slate-700 leading-relaxed"
                >Créer une narration interactive via un design UX qui guide
                subtilement l'utilisateur vers ses besoins réels.</span
              >
            </li>
            <li class="flex items-start">
              <span
                class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"
              ></span>
              <span class="text-slate-700 leading-relaxed"
                >Développer une interface utilisateur illustrée avec des séries
                iconographiques cohérentes.</span
              >
            </li>
            <li class="flex items-start">
              <span
                class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"
              ></span>
              <span class="text-slate-700 leading-relaxed"
                >Offrir une expérience communautaire, facilitant une entraide
                active dans la recherche de chats perdus.</span
              >
            </li>
            <li class="flex items-start">
              <span
                class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"
              ></span>
              <span class="text-slate-700 leading-relaxed"
                >Concevoir une application web responsive, esthétiquement
                alignée avec l'ensemble des supports de communication.</span
              >
            </li>
            <li class="flex items-start">
              <span
                class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"
              ></span>
              <span class="text-slate-700 leading-relaxed"
                >Valoriser les compétences en UX/UI design, développement
                front-end, iconographie et narration graphique.</span
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Cibles -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-blue-500 pl-4"
          >
            3. Cibles et utilisateurs
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-blue-900 mb-3">
                Utilisateurs principaux
              </h4>
              <ul class="space-y-2 text-blue-800">
                <li>
                  • Propriétaires de chats (particuliers, familles, foyers
                  aimants)
                </li>
                <li>• Associations félines et refuges</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-blue-900 mb-3">Audience élargie</h4>
              <ul class="space-y-2 text-blue-800">
                <li>• Public sensible à la cause animale</li>
                <li>• Jury d'évaluation du projet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Contenu et livrables -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-purple-500 pl-4"
          >
            4. Contenu et livrables attendus
          </h2>

          <!-- 4.1 Livrables principaux -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              4.1 Livrables principaux
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-purple-50 rounded-lg p-4">
                <h4 class="font-semibold text-purple-900 mb-2">
                  Design & Maquettes
                </h4>
                <ul class="text-purple-800 text-sm space-y-1">
                  <li>• Maquettes complètes (mobile et desktop)</li>
                  <li>• Univers graphique complet</li>
                  <li>• Icônes et pictogrammes</li>
                </ul>
              </div>
              <div class="bg-purple-50 rounded-lg p-4">
                <h4 class="font-semibold text-purple-900 mb-2">
                  Développement
                </h4>
                <ul class="text-purple-800 text-sm space-y-1">
                  <li>• Prototype web interactif</li>
                  <li>• Pages clés fonctionnelles</li>
                  <li>• Documentation technique</li>
                </ul>
              </div>
            </div>
            <div class="mt-4 bg-slate-50 rounded-lg p-4">
              <p class="text-slate-700 font-medium mb-2">Pages clés :</p>
              <p class="text-slate-600 text-sm">
                Profil du chat, calendrier de suivi, déclaration de perte/avis
                de recherche, accueil communautaire
              </p>
            </div>
          </div>

          <!-- 4.2 Technologies -->
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              4.2 Technologies envisagées
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                class="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg p-4 text-center"
              >
                <strong class="text-emerald-800">Figma</strong>
                <p class="text-emerald-700 text-sm mt-1">Maquettage</p>
              </div>
              <div
                class="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 text-center"
              >
                <strong class="text-blue-800">VS Code</strong>
                <p class="text-blue-700 text-sm mt-1">Prototype fonctionnel</p>
              </div>
              <div
                class="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-4 text-center"
              >
                <strong class="text-orange-800">Suite Adobe</strong>
                <p class="text-orange-700 text-sm mt-1">Création graphique</p>
              </div>
              <div
                class="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 text-center"
              >
                <strong class="text-purple-800">DaVinci</strong>
                <p class="text-purple-700 text-sm mt-1">Animation vidéo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Contraintes -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-red-500 pl-4"
          >
            5. Contraintes techniques et artistiques
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-slate-800 mb-3">
                Contraintes techniques
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700 text-sm"
                    >Application responsive, mobile-first</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700 text-sm"
                    >Recherche facilitée par éléments visuels</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700 text-sm"
                    >Projet ambitieux mais réaliste</span
                  >
                </li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-3">
                Contraintes artistiques
              </h4>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700 text-sm"
                    >Design inspirant confiance et simplicité</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700 text-sm"
                    >Identité visuelle distinctive</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700 text-sm"
                    >Univers chaleureux et bienveillant</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 6: Planning -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-indigo-500 pl-4"
          >
            6. Planning prévisionnel
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-indigo-50">
                  <th
                    class="border border-indigo-200 px-4 py-3 text-left font-semibold text-indigo-900"
                  >
                    Mois
                  </th>
                  <th
                    class="border border-indigo-200 px-4 py-3 text-left font-semibold text-indigo-900"
                  >
                    Étapes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-slate-50">
                  <td
                    class="border border-slate-200 px-4 py-3 font-medium text-slate-800"
                  >
                    1
                  </td>
                  <td class="border border-slate-200 px-4 py-3 text-slate-700">
                    Benchmark, moodboard, besoins utilisateurs
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td
                    class="border border-slate-200 px-4 py-3 font-medium text-slate-800"
                  >
                    2
                  </td>
                  <td class="border border-slate-200 px-4 py-3 text-slate-700">
                    Wireframes, architecture pages
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td
                    class="border border-slate-200 px-4 py-3 font-medium text-slate-800"
                  >
                    3
                  </td>
                  <td class="border border-slate-200 px-4 py-3 text-slate-700">
                    Création graphique, design UI
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td
                    class="border border-slate-200 px-4 py-3 font-medium text-slate-800"
                  >
                    4
                  </td>
                  <td class="border border-slate-200 px-4 py-3 text-slate-700">
                    Prototypage interactif
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td
                    class="border border-slate-200 px-4 py-3 font-medium text-slate-800"
                  >
                    5
                  </td>
                  <td class="border border-slate-200 px-4 py-3 text-slate-700">
                    Finalisation, corrections, présentation
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td
                    class="border border-slate-200 px-4 py-3 font-medium text-slate-800"
                  >
                    6
                  </td>
                  <td class="border border-slate-200 px-4 py-3 text-slate-700">
                    Rendu final
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Section 7: Risques -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-yellow-500 pl-4"
          >
            7. Risques et solutions envisagées
          </h2>
          <div class="space-y-6">
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 class="font-semibold text-yellow-900 mb-2">
                🔧 Risque technique
              </h4>
              <p class="text-yellow-800 mb-2">
                <strong>Problème :</strong> Difficulté technique du prototypage
              </p>
              <p class="text-yellow-700">
                <strong>Solution :</strong> Réduire les fonctionnalités, se
                concentrer sur UX/UI
              </p>
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 class="font-semibold text-yellow-900 mb-2">
                📋 Risque fonctionnel
              </h4>
              <p class="text-yellow-800 mb-2">
                <strong>Problème :</strong> Trop de fonctionnalités prévues
              </p>
              <p class="text-yellow-700">
                <strong>Solution :</strong> Définir clairement un MVP dès le
                début
              </p>
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 class="font-semibold text-yellow-900 mb-2">
                ⏰ Risque temporel
              </h4>
              <p class="text-yellow-800 mb-2">
                <strong>Problème :</strong> Retard dans le planning
              </p>
              <p class="text-yellow-700">
                <strong>Solution :</strong> Planification hebdomadaire précise,
                outils de gestion (Trello, Notion)
              </p>
            </div>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 class="font-semibold text-yellow-900 mb-2">
                👥 Risque utilisateur
              </h4>
              <p class="text-yellow-800 mb-2">
                <strong>Problème :</strong> Manque de retours utilisateurs
              </p>
              <p class="text-yellow-700">
                <strong>Solution :</strong> Prototypage rapide pour récolter
                rapidement du feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 8: SWOT -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-teal-500 pl-4"
          >
            8. Analyse SWOT
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Forces & Opportunités -->
            <div class="space-y-6">
              <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 class="font-bold text-green-900 mb-4 flex items-center">
                  <span class="mr-2">💪</span> Forces
                </h4>
                <ul class="space-y-2 text-green-800">
                  <li>• Passion et engagement personnel</li>
                  <li>• Compétences complémentaires équipe</li>
                  <li>• Concept innovant avec forte identité</li>
                  <li>• Création d'une communauté engagée</li>
                </ul>
              </div>
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 class="font-bold text-blue-900 mb-4 flex items-center">
                  <span class="mr-2">🚀</span> Opportunités
                </h4>
                <ul class="space-y-2 text-blue-800">
                  <li>• Partenariats avec refuges et vétérinaires</li>
                  <li>• Élargissement des fonctionnalités</li>
                  <li>• Campagnes de sensibilisation</li>
                </ul>
              </div>
            </div>

            <!-- Faiblesses & Menaces -->
            <div class="space-y-6">
              <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 class="font-bold text-orange-900 mb-4 flex items-center">
                  <span class="mr-2">⚠️</span> Faiblesses
                </h4>
                <ul class="space-y-2 text-orange-800">
                  <li>• Dépendance technologique</li>
                  <li>• Ressources limitées (financières et humaines)</li>
                  <li>• Concurrence potentielle émergente</li>
                </ul>
              </div>
              <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 class="font-bold text-red-900 mb-4 flex items-center">
                  <span class="mr-2">⛔</span> Menaces
                </h4>
                <ul class="space-y-2 text-red-800">
                  <li>• Réglementations protection des données</li>
                  <li>• Réactions négatives parties prenantes</li>
                  <li>• Faible engagement des utilisateurs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 9: Conclusion -->
      <section class="mb-16">
        <div
          class="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl shadow-lg p-8 border border-slate-200"
        >
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-emerald-500 pl-4"
          >
            9. Conclusion
          </h2>
          <div class="prose prose-lg prose-slate max-w-none">
            <p class="text-slate-700 leading-relaxed text-lg">
              Ce projet représente une synthèse ambitieuse des compétences
              développées durant la formation. Il permet la mise en pratique de
              méthodologies centrées utilisateur tout en valorisant une
              direction artistique personnelle au service d'un projet
              émotionnellement engageant et techniquement réaliste.
            </p>
            <p class="text-slate-700 leading-relaxed text-lg mt-4 font-medium">
              <em class="text-emerald-700">Whisker Quest</em> ambitionne
              d'offrir une solution concrète et utile aux propriétaires de
              chats, tout en constituant une vitrine professionnelle solide.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-8">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-slate-300">
          Vincent Chauvaux - Institut Paul Hankar - Cahier des charges 2025
        </p>
        <p class="text-slate-400 mt-2">Whisker Quest - Projet de fin d'étude</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page cahier des charges - Projet Whisker Quest
</script>

<style scoped>
/* Styles personnalisés pour améliorer la lisibilité */
.prose {
  line-height: 1.7;
}

.prose p {
  text-align: justify;
}

.prose strong {
  color: theme("colors.slate.800");
}

.prose em {
  font-style: italic;
}

/* Animation subtile au scroll */
@media (prefers-reduced-motion: no-preference) {
  section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
  }

  section:nth-child(1) {
    animation-delay: 0.1s;
  }
  section:nth-child(2) {
    animation-delay: 0.2s;
  }
  section:nth-child(3) {
    animation-delay: 0.3s;
  }
  section:nth-child(4) {
    animation-delay: 0.4s;
  }
  section:nth-child(5) {
    animation-delay: 0.5s;
  }
  section:nth-child(6) {
    animation-delay: 0.6s;
  }
  section:nth-child(7) {
    animation-delay: 0.7s;
  }
  section:nth-child(8) {
    animation-delay: 0.8s;
  }
  section:nth-child(9) {
    animation-delay: 0.9s;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Style spécial pour les tableaux */
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background-color: #f8fafc;
  font-weight: 600;
}

/* Hover effects pour les cartes */
.hover\:bg-slate-50:hover {
  background-color: #f8fafc;
  transition: background-color 0.2s ease;
}
</style>
