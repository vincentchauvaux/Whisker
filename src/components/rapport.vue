<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <h1 class="text-4xl font-bold text-slate-900 mb-2">
          Travail de Fin d'Études
        </h1>
        <p class="text-xl text-slate-600">
          Whisker Quest - Plateforme de recherche de chats perdus
        </p>
        <p class="text-lg text-slate-500 mt-2">
          Vincent Chauvaux - Institut Paul Hankar
        </p>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-6 py-12">
      <!-- Introduction -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-emerald-500 pl-4"
          >
            Introduction
          </h2>

          <div class="prose prose-lg prose-slate max-w-none">
            <p class="mb-6 text-slate-700 leading-relaxed">
              Je m'appelle Vincent Chauvaux et je suis actuellement étudiant en
              dernière année du Bachelier en Infographie à l'Institut Paul
              Hankar. Ce Travail de Fin d'Études marque l'aboutissement de mon
              parcours académique et constitue une opportunité concrète de
              mettre en pratique l'ensemble des compétences acquises au cours de
              ces années de formation, que ce soit en design graphique,
              animation, 3D, sonore ou visuel.
            </p>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Ce projet n'est pas seulement un exercice académique : il
              représente aussi une démarche personnelle, motivée par le désir de
              confronter mon travail au regard de professionnels du secteur. En
              effet, pouvoir faire valider mes choix créatifs et techniques par
              des experts représente pour moi une forme de reconnaissance
              essentielle, capable de dissiper certains doutes intérieurs quant
              à la légitimité de mes compétences. Ce TFE devient donc un jalon
              important, non seulement dans mon parcours scolaire, mais
              également dans mon développement personnel et professionnel.
            </p>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Le projet que je présente,
              <em class="font-semibold text-emerald-700">Whisker Quest</em>, est
              une plateforme fictive dédiée à la recherche et au signalement de
              chats perdus. J'y ai développé une identité graphique complète,
              comprenant un logo, trois affiches, une carte de visite ainsi
              qu'un site web fonctionnel. Mon objectif principal a été de
              garantir une cohérence visuelle forte entre tous ces supports, en
              définissant une charte graphique rigoureuse et identifiable.
            </p>

            <p class="mb-6 text-slate-700 leading-relaxed">
              L'univers de
              <em class="font-semibold text-emerald-700">Whisker Quest</em>
              repose sur des valeurs d'empathie, d'accessibilité et
              d'efficacité. L'interface et les éléments graphiques ont été
              conçus dans une logique de clarté et de lisibilité, en intégrant
              des influences issues de mon environnement visuel quotidien —
              notamment les affiches publicitaires observées le long des quais,
              qui m'ont inspiré des compositions directes, impactantes et
              structurées.
            </p>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Ma démarche méthodologique a été nourrie par une dynamique
              d'apprentissage continue. Mon travail professionnel en parallèle
              de mes études m'a permis de découvrir et d'expérimenter de
              nouveaux outils que j'ai pu appliquer à ce projet. Chaque étape a
              été l'occasion d'affiner ma vision, de faire évoluer mon approche
              et de mieux maîtriser les contraintes d'un système graphique
              cohérent.
            </p>

            <p class="text-slate-700 leading-relaxed">
              <em class="font-semibold text-emerald-700">Whisker Quest</em> est
              ainsi à la fois un projet de synthèse, une vitrine de mes
              compétences techniques, et un espace d'expression personnelle. Il
              reflète mon évolution, mes influences, et mon envie sincère de
              produire des supports utiles, soignés, et pensés pour
              l'utilisateur.
            </p>
          </div>
        </div>
      </section>

      <!-- Chapitre 2 -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-orange-500 pl-4"
          >
            Chapitre 2 — Développement et description
          </h2>

          <!-- Section 1 -->
          <div class="mb-10">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              1. L'application Whisker Quest
            </h3>

            <div class="prose prose-lg prose-slate max-w-none">
              <p class="mb-6 text-slate-700 leading-relaxed">
                <em class="font-semibold text-emerald-700">Whisker Quest</em>
                est une web app responsive conçue pour faciliter la recherche de
                chats perdus et le signalement d'animaux retrouvés. Elle
                s'adresse à toute personne responsable possédant un chat et
                souhaitant disposer d'un espace centralisé pour signaler,
                consulter et sauvegarder des informations essentielles. Au-delà
                de la simple plateforme de signalement, l'application vise à
                créer une communauté active, solidaire et engagée autour de la
                cause animale.
              </p>

              <p class="mb-4 text-slate-700 font-medium">
                Les fonctionnalités principales incluent :
              </p>

              <ul class="mb-6 space-y-2">
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700"
                    >Une <strong>carte interactive</strong> alimentée par MapBox
                    pour localiser les signalements,</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700"
                    >Un <strong>formulaire de signalement</strong> accessible et
                    clair,</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700"
                    >Un <strong>système de badges</strong> communautaires
                    valorisant les actions des utilisateurs,</span
                  >
                </li>
                <li class="flex items-start">
                  <span
                    class="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"
                  ></span>
                  <span class="text-slate-700"
                    >Un <strong>espace personnel</strong> pour gérer ses
                    annonces et suivre ses activités.</span
                  >
                </li>
              </ul>

              <p class="text-slate-700 leading-relaxed">
                L'interface est développée avec
                <strong class="text-emerald-700">Vue.js</strong>,
                <strong class="text-emerald-700">Tailwind CSS</strong> pour le
                style, <strong class="text-emerald-700">MapBox</strong> pour la
                géolocalisation et un tout petit peu de
                <strong class="text-emerald-700">Tree.js</strong> pour des
                animations cartographiques plus immersives.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="mb-10">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              2. Contraintes de l'environnement
            </h3>

            <div class="prose prose-lg prose-slate max-w-none">
              <p class="mb-6 text-slate-700 leading-relaxed">
                L'application vise un large public connecté : toute personne
                détenant un chat et souhaitant participer à une entraide locale
                ou nationale. L'outil est pensé pour une utilisation fluide
                aussi bien sur ordinateur que sur mobile.
              </p>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Dans un contexte réaliste,
                <em class="font-semibold text-emerald-700">Whisker Quest</em>
                serait diffusée via un <strong>site web officiel</strong>, mais
                aussi via les <strong>stores d'applications mobiles</strong>,
                les <strong>réseaux sociaux</strong> et potentiellement des
                <strong>supports d'affichage</strong> (affiches imprimées,
                flyers), si des financements associatifs ou publics le
                permettent.
              </p>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Concernant l'accessibilité, le design vise à respecter au mieux
                les recommandations <strong>WCAG AA</strong>, notamment en
                termes de contrastes, tailles de textes, hiérarchies visuelles
                et compatibilité responsive. Le projet intègre aussi une
                réflexion sur l'ergonomie et la simplicité d'usage pour garantir
                une prise en main rapide, y compris pour les personnes peu
                familières avec les outils numériques.
              </p>

              <p class="text-slate-700 leading-relaxed">
                Tous les éléments graphiques sont originaux. Aucun visuel
                externe sous droits n'a été utilisé sans vérification ou
                adaptation. Les icônes, images et composants UI ont été pensés
                pour être réutilisables sans risque juridique dans un cadre
                associatif.
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="mb-10">
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              3. Démarche et choix conceptuels
            </h3>

            <div class="prose prose-lg prose-slate max-w-none">
              <p class="mb-6 text-slate-700 leading-relaxed">
                L'identité visuelle de
                <em class="font-semibold text-emerald-700">Whisker Quest</em> a
                été développée à partir d'un travail de design du logo. Celui-ci
                intègre une <strong>tête de chat stylisée</strong> au centre de
                la lettre <strong>Q</strong> dessinée en
                <strong>Libre Baskerville</strong>, créant un lien visuel entre
                l'animal et la notion de quête. Ce choix typographique rappelle
                les petites annonces imprimées, tout en évoquant discrètement
                une <strong>loupe</strong>, symbole de recherche, inspiré d'un
                imaginaire personnel qui mêle chaleur et technologie.
              </p>

              <div class="bg-slate-50 rounded-lg p-6 mb-6">
                <p class="mb-4 text-slate-700 font-medium">
                  La charte graphique repose sur :
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    <span class="text-slate-700"
                      >Une <strong>palette de couleurs</strong> dominée par un
                      vert profond et un orange vif,</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    <span class="text-slate-700"
                      >Un <strong>système typographique</strong> combinant Libre
                      Baskerville (titres) et Inter (interfaces),</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    <span class="text-slate-700"
                      >Un <strong>design UI</strong> clair et modulaire fondé
                      sur des composants réutilisables,</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span
                      class="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    <span class="text-slate-700"
                      >Un usage modéré des effets pour maintenir lisibilité et
                      accessibilité.</span
                    >
                  </li>
                </ul>
              </div>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Les affiches créées pour la communication s'inspirent
                directement des visuels d'affichage public observés en gare :
                typographies structurées, grille lisible, visuels impactants et
                rythme vertical. Cette référence visuelle a guidé la mise en
                page, le contraste texte/image et le ton général de la
                communication.
              </p>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Ma pratique professionnelle m'a accompagné tout au long de ce
                projet. J'ai d'abord été confronté à la création de sites en
                série sous WordPress, une expérience répétitive mais formatrice,
                qui m'a permis de forger mes compétences. J'ai eu la chance
                d'être entouré par une équipe bienveillante, qui m'a aidé à
                affiner mes choix et à prendre du recul : avoir "le nez dans son
                propre caca" n'est jamais agréable, mais c'est souvent la
                meilleure façon d'évoluer. Progressivement, j'ai pu accéder à
                des tâches plus techniques, comme le code brut, et j'ai appris à
                tirer parti des bibliothèques et ressources disponibles pour
                structurer mes idées.
              </p>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Par ailleurs, j'ai intégré les outils d'intelligence
                artificielle dans mon processus de création : je leur soumets
                mes idées, analyse les pistes proposées, les déconstruis, les
                réinterprète, puis je fais itérer ce cycle. Cette méthode m'a
                permis de gagner en agilité dans l'élaboration de visuels : je
                dessine, je propose, j'améliore, je redessine.
              </p>

              <p class="text-slate-700 leading-relaxed">
                Un des aspects fondamentaux de mon approche a été de garder une
                vision d'ensemble : veiller à l'harmonie entre les différents
                éléments, quitte à repenser ou réadapter certains composants
                pour maintenir une cohérence globale.
              </p>
            </div>
          </div>

          <!-- Section 4 -->
          <div>
            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              4. Étude technique
            </h3>

            <div class="prose prose-lg prose-slate max-w-none">
              <p class="mb-6 text-slate-700 leading-relaxed">
                Le projet repose sur un
                <strong>système de composants modulaires</strong> pour faciliter
                l'organisation et la cohérence de l'interface. Tailwind CSS
                offre une base flexible pour gérer l'espacement, la typographie
                et les interactions, tandis que Vue.js structure les composants
                de manière logique.
              </p>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Les cartes MapBox permettent une exploration fluide des
                signalements, et Tree.js ajoute une couche d'interactivité
                animée à l'espace communautaire.
              </p>

              <div
                class="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6"
              >
                <p class="text-slate-700 leading-relaxed">
                  J'ai développé un site entièrement consultable à l'adresse :
                  <a
                    href="https://whisker.netlify.app/"
                    class="text-emerald-700 font-semibold hover:text-emerald-800 underline decoration-emerald-300"
                    target="_blank"
                    >https://whisker.netlify.app/</a
                  >
                </p>
              </div>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Tous les visuels ont été conçus avec la suite Adobe, et mes
                fichiers sont organisés selon la structure demandée par l'école.
                La plus grande difficulté rencontrée a été d'ordre
                méthodologique : structurer mes idées et garder une vision
                claire du projet dans son ensemble. Ayant tendance à m'enfoncer
                dans des directions trop précises, j'ai parfois perdu de vue
                certains aspects essentiels. Les outils d'intelligence
                artificielle m'ont aidé à reformuler mes pensées et à
                réorganiser mes idées, que ce soit pour les textes ou pour les
                logiques de présentation.
              </p>

              <p class="mb-6 text-slate-700 leading-relaxed">
                Les supports imprimés (affiches, carte de visite) ont été
                exportés en CMJN haute définition (PDF ou TIFF selon les
                besoins), avec fonds perdus et traits de coupe, pour garantir
                une qualité optimale à l'impression offset ou numérique.
              </p>

              <p class="text-slate-700 leading-relaxed">
                Enfin, l'interface repose sur une grille flexible et un style
                guide cohérent, issu de ma charte graphique. J'y ai utilisé des
                composants réutilisables (boutons, cartes, formulaires), pensés
                pour maintenir une unité visuelle et fonctionnelle sur
                l'ensemble du projet
                <em class="font-semibold text-emerald-700">Whisker Quest</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Chapitre 3 -->
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h2
            class="text-3xl font-bold text-slate-900 mb-6 border-l-4 border-blue-500 pl-4"
          >
            Chapitre 3 — Conclusion et évaluation personnelle
          </h2>

          <div class="prose prose-lg prose-slate max-w-none">
            <p class="mb-8 text-slate-700 leading-relaxed text-lg">
              Ce Travail de Fin d'Études m'a permis de mobiliser de manière
              concrète les compétences acquises au fil de ma formation, tout en
              m'offrant un terrain d'expression personnelle et
              d'expérimentation. Le projet
              <em class="font-semibold text-emerald-700">Whisker Quest</em>
              résume mon envie de créer un système graphique cohérent, utile, et
              porteur de sens, au service d'une cause qui m'est chère : celle du
              lien entre les humains et leurs compagnons animaliers.
            </p>

            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              Intégration des savoirs, techniques et méthodes
            </h3>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Ce projet a été l'occasion d'intégrer les différents volets de ma
              formation : de la conception graphique à l'interface utilisateur,
              en passant par l'organisation de contenu, la narration visuelle,
              la compréhension technique du web et l'analyse des besoins
              utilisateurs.
            </p>

            <p class="mb-8 text-slate-700 leading-relaxed">
              Ma méthodologie s'est appuyée sur des cycles de
              conception/itération, où les outils d'intelligence artificielle
              ont joué un rôle d'accompagnement créatif, en me permettant de
              décomposer, restructurer et affiner mes propositions visuelles et
              stratégiques.
            </p>

            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              Justification de la charte graphique
            </h3>

            <p class="mb-6 text-slate-700 leading-relaxed">
              La charte graphique de
              <em class="font-semibold text-emerald-700">Whisker Quest</em>
              repose sur une volonté claire : développer une identité
              chaleureuse, lisible, accessible, et reconnaissable. Le choix du
              <strong>Libre Baskerville</strong> pour les titres ancre
              visuellement le projet dans une esthétique de petite annonce
              imprimée, familière et rassurante, tandis que
              <strong>Inter</strong>, sans serif contemporaine, garantit une
              lisibilité parfaite pour les contenus numériques.
            </p>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Le duo vert profond / orange vif crée un contraste engageant tout
              en évoquant la nature et la communauté. La structure des
              interfaces est soutenue par une grille claire, une hiérarchie
              typographique, et des composants modulables pour une expérience
              utilisateur fluide.
            </p>

            <p class="mb-8 text-slate-700 leading-relaxed">
              Ces choix ont été motivés par le besoin de concilier émotion et
              efficacité, tout en respectant les principes d'accessibilité.
              L'identité visuelle résultante traduit fidèlement les valeurs de
              la plateforme : empathie, entraide, visibilité.
            </p>

            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              Adéquation entre les méthodes, stratégies et résultats obtenus
            </h3>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Le résultat final répond pleinement aux objectifs fixés au départ
              : créer une plateforme fictive mais réaliste, visuellement
              homogène, intuitive, et techniquement cohérente. En alliant
              inspiration graphique, contraintes techniques et apport de mon
              expérience professionnelle, j'ai pu déployer un projet que je
              considère comme représentatif de mes capacités actuelles.
            </p>

            <p class="mb-8 text-slate-700 leading-relaxed">
              La méthode de travail mise en place — fondée sur des
              allers-retours entre esquisses, prototypages, tests visuels,
              relecture assistée par IA et synthèse critique — m'a permis
              d'ajuster mes outils aux besoins du projet. Les supports imprimés,
              le logo, les affiches, le site web et la charte forment un tout
              cohérent.
            </p>

            <h3 class="text-2xl font-semibold text-slate-800 mb-4">
              Analyse des difficultés rencontrées
            </h3>

            <p class="mb-6 text-slate-700 leading-relaxed">
              La principale difficulté à laquelle j'ai été confronté reste la
              structuration globale du travail. J'ai parfois tendance à me
              focaliser sur certains détails techniques ou esthétiques, au
              détriment de la vision d'ensemble. Le recours aux outils d'IA m'a
              permis de restructurer mes idées, de clarifier mes choix, et de
              reformuler mes intentions, tant dans la conception que dans la
              communication.
            </p>

            <p class="mb-6 text-slate-700 leading-relaxed">
              Il m'a également fallu apprendre à m'organiser avec plus de
              rigueur, à hiérarchiser mes priorités, et à accepter de remettre
              en question certains choix lorsque l'ensemble perdait en unité ou
              en lisibilité.
            </p>

            <p class="text-slate-700 leading-relaxed font-medium text-lg">
              Au final, ce projet m'a permis de grandir autant sur le plan
              technique que personnel. Il incarne l'aboutissement d'une phase
              d'apprentissage, et le début d'une posture plus assumée de
              créateur polyvalent et autonome.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-8">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-slate-300">
          Vincent Chauvaux - Institut Paul Hankar - Travail de Fin d'Études 2025
        </p>
        <p class="text-slate-400 mt-2">
          Whisker Quest - Plateforme de recherche de chats perdus
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page rapport - Travail de Fin d'Études
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
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
