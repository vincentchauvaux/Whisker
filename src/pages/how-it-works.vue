<template>
  <MainLayout>
    <div class="bg-white">
      <main>
        <!-- En-tête de la page -->
        <section
          class="relative isolate overflow-hidden bg-white py-24 sm:py-32"
        >
          <div class="container mx-auto px-4">
            <div class="mx-auto max-w-2xl lg:max-w-4xl">
              <h1
                class="text-4xl font-bold tracking-tight text-primary font-serif sm:text-6xl"
              >
                Comment ça marche
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
                Découvrez comment notre plateforme innovante aide à retrouver
                les animaux perdus et à réunir les familles avec leurs
                compagnons bien-aimés.
              </p>
            </div>
          </div>
        </section>

        <!-- Section Globe -->
        <section class="py-16 sm:py-24 bg-gray-50">
          <div class="container mx-auto px-4">
            <div class="mx-auto max-w-2xl text-center mb-16">
              <h2
                class="text-base font-semibold leading-7 text-secondary font-sans"
              >
                Réseau mondial
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
              >
                <span class="text-secondary">Visualisez</span> notre communauté
                <span class="text-secondary">mondiale</span>
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
                Notre réseau d'utilisateurs et de partenaires s'étend à travers
                le monde entier,
                <span class="text-primary font-semibold"
                  >connectant des milliers de personnes</span
                >
                qui contribuent chaque jour à retrouver des animaux perdus.
              </p>
            </div>

            <!-- Composant Globe Three.js -->
            <div
              class="relative h-[600px] w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl"
            >
              <div
                id="globe-container"
                class="absolute inset-0 h-full w-full rounded-lg bg-primary-light/20"
              >
                <GlobeComponent />
              </div>
            </div>

            <div
              class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div class="text-center">
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                >
                  <svg
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </div>
                <h3
                  class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
                >
                  <span class="text-secondary">25K+</span> Utilisateurs
                </h3>
                <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
                  Une communauté active et engagée à travers l'Europe et au-delà
                </p>
              </div>

              <div class="text-center">
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                >
                  <svg
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3
                  class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
                >
                  <span class="text-secondary">150+</span> Villes
                </h3>
                <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
                  Présence dans les principales métropoles et zones urbaines
                </p>
              </div>

              <div class="text-center">
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                >
                  <svg
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <h3
                  class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
                >
                  <span class="text-secondary">10+</span> Pays
                </h3>
                <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
                  Une présence internationale en constante expansion
                </p>
              </div>

              <div class="text-center">
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                >
                  <svg
                    class="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3
                  class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
                >
                  <span class="text-secondary">5.2K+</span> Succès
                </h3>
                <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
                  Animaux retrouvés et réunis avec leurs familles
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Processus -->
        <section class="py-24 sm:py-32 bg-white">
          <div class="container mx-auto px-4">
            <div class="mx-auto max-w-2xl lg:text-center mb-16">
              <h2
                class="text-base font-semibold leading-7 text-secondary font-sans"
              >
                Processus
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
              >
                Comment fonctionne notre plateforme
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
                Notre système utilise des technologies avancées pour maximiser
                les chances de retrouver les animaux perdus.
              </p>
            </div>

            <div
              class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            >
              <dl
                class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
              >
                <div class="flex flex-col">
                  <dt
                    class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary font-serif"
                  >
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light"
                    >
                      <span class="text-lg font-bold text-primary">1</span>
                    </div>
                    Signalement
                  </dt>
                  <dd
                    class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
                  >
                    <p class="flex-auto">
                      Lorsqu'un animal est perdu ou trouvé, les utilisateurs
                      peuvent créer un signalement détaillé avec photos et
                      localisation précise via notre application mobile ou site
                      web.
                    </p>
                  </dd>
                </div>

                <div class="flex flex-col">
                  <dt
                    class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary font-serif"
                  >
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light"
                    >
                      <span class="text-lg font-bold text-primary">2</span>
                    </div>
                    Traitement des données
                  </dt>
                  <dd
                    class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
                  >
                    <p class="flex-auto">
                      Notre système analyse les signalements à l'aide
                      d'algorithmes avancés de reconnaissance d'image et de
                      géolocalisation pour identifier les correspondances
                      potentielles.
                    </p>
                  </dd>
                </div>

                <div class="flex flex-col">
                  <dt
                    class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary font-serif"
                  >
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light"
                    >
                      <span class="text-lg font-bold text-primary">3</span>
                    </div>
                    Notification et mise en relation
                  </dt>
                  <dd
                    class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
                  >
                    <p class="flex-auto">
                      Les utilisateurs concernés reçoivent des alertes
                      instantanées et peuvent communiquer directement via notre
                      plateforme sécurisée pour organiser les retrouvailles.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <!-- Section Technologie -->
        <section class="py-24 sm:py-32 bg-gray-50">
          <div class="container mx-auto px-4">
            <div class="mx-auto max-w-2xl lg:text-center mb-16">
              <h2
                class="text-base font-semibold leading-7 text-secondary font-sans"
              >
                Technologie
              </h2>
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
              >
                Les technologies derrière notre plateforme
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
                Nous utilisons des technologies de pointe pour offrir une
                expérience efficace et fiable.
              </p>
            </div>

            <div
              class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div
                class="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold leading-8 text-primary font-serif"
                  >
                    Intelligence Artificielle
                  </h3>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 font-sans">
                  Nos algorithmes d'IA analysent les photos pour identifier les
                  caractéristiques distinctives des animaux et suggérer des
                  correspondances potentielles avec une précision élevée.
                </p>
              </div>

              <div
                class="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold leading-8 text-primary font-serif"
                  >
                    Géolocalisation avancée
                  </h3>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 font-sans">
                  Notre système de géolocalisation précis permet de localiser
                  les signalements et d'alerter les utilisateurs à proximité,
                  augmentant considérablement les chances de retrouvailles.
                </p>
              </div>

              <div
                class="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold leading-8 text-primary font-serif"
                  >
                    Notifications en temps réel
                  </h3>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 font-sans">
                  Notre infrastructure de messagerie instantanée permet
                  d'envoyer des alertes immédiates aux utilisateurs concernés,
                  réduisant considérablement le temps de réaction.
                </p>
              </div>

              <div
                class="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold leading-8 text-primary font-serif"
                  >
                    Analyse de données
                  </h3>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 font-sans">
                  Nous analysons les tendances et les statistiques pour
                  améliorer continuellement notre service et identifier les
                  zones à risque élevé de disparition d'animaux.
                </p>
              </div>

              <div
                class="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold leading-8 text-primary font-serif"
                  >
                    Sécurité des données
                  </h3>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 font-sans">
                  Nous utilisons des protocoles de sécurité avancés pour
                  protéger les informations personnelles et garantir la
                  confidentialité des communications entre utilisateurs.
                </p>
              </div>

              <div
                class="flex flex-col rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow"
              >
                <div class="flex items-center gap-x-4">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light"
                  >
                    <svg
                      class="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <h3
                    class="text-lg font-semibold leading-8 text-primary font-serif"
                  >
                    Architecture évolutive
                  </h3>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 font-sans">
                  Notre infrastructure cloud permet une mise à l'échelle rapide
                  pour gérer des millions de signalements et d'utilisateurs sans
                  compromettre les performances.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section CTA -->
        <section class="py-24 sm:py-32 bg-white">
          <div class="container mx-auto px-4">
            <div class="mx-auto max-w-2xl text-center">
              <h2
                class="text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
              >
                Prêt à retrouver votre animal perdu ?
              </h2>
              <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
                Rejoignez notre communauté et utilisez notre technologie pour
                maximiser vos chances de retrouver votre compagnon.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/signalement"
                  class="rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary font-sans"
                >
                  Signaler un animal
                </a>
                <a
                  href="/app-mobile"
                  class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
                >
                  Télécharger l'application <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import GlobeComponent from "../components/GlobeComponent.vue";

onMounted(() => {
  // Ici, nous initialiserons le globe Three.js
  // Ce code sera complété dans un composant séparé
});
</script>
