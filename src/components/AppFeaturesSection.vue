<template>
  <section id="features" class="py-24 sm:py-32 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl lg:text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-secondary font-sans">
          Fonctionnalités
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
        >
          Tout ce dont vous avez besoin pour retrouver votre animal
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
          Notre application a été conçue pour faciliter la recherche et le
          signalement d'animaux perdus ou trouvés. Découvrez toutes les
          fonctionnalités qui vous aideront à retrouver votre compagnon.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div class="flex flex-col">
            <dt
              class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary font-serif"
            >
              <div
                class="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-light"
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
              Géolocalisation précise
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
            >
              <p class="flex-auto">
                Localisez précisément où un animal a été aperçu ou perdu. Notre
                système de cartographie avancé vous permet de visualiser tous
                les signalements à proximité.
              </p>
              <p class="mt-6">
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-secondary font-sans"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>

          <div class="flex flex-col">
            <dt
              class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary font-serif"
            >
              <div
                class="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-light"
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
              Notifications instantanées
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
            >
              <p class="flex-auto">
                Recevez des alertes en temps réel lorsqu'un animal correspondant
                à votre recherche est signalé. Restez informé des nouveaux
                signalements dans votre zone.
              </p>
              <p class="mt-6">
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-secondary font-sans"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>

          <div class="flex flex-col">
            <dt
              class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary font-serif"
            >
              <div
                class="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-light"
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
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>
              Partage de photos
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
            >
              <p class="flex-auto">
                Partagez facilement des photos de votre animal perdu ou d'un
                animal que vous avez trouvé. Les images aident considérablement
                à l'identification.
              </p>
              <p class="mt-6">
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-secondary font-sans"
                >
                  En savoir plus <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        </dl>
      </div>

      <div class="mt-20 lg:mt-32 flex justify-center">
        <a
          href="#pricing"
          class="rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary font-sans"
        >
          Voir nos offres
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour cette section
</script>
