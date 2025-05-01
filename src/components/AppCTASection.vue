<template>
  <section class="relative isolate overflow-hidden py-24 sm:py-32">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_bottom,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
          <linearGradient id="grid-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.3" />
            <stop offset="80%" stop-color="currentColor" stop-opacity="0.05" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
          </linearGradient>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-white">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          style="stroke: url(#grid-gradient)"
        />
      </svg>
    </div>

    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
        >
          Téléchargez l'application dès maintenant
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
          Rejoignez notre communauté et aidez-nous à réunir les animaux perdus
          avec leurs propriétaires. Ensemble, nous pouvons faire la différence.
        </p>
        <div
          class="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
        >
          <router-link
            to="/how-it-works"
            class="flex items-center justify-center rounded-full bg-primary px-5 py-3 text-white shadow-sm hover:bg-primary-dark"
          >
            <svg
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            Comment ça marche
          </router-link>

          <a
            href="#"
            class="flex items-center justify-center rounded-full bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-800"
          >
            <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.5646,12.5575 C17.5599,10.1539 19.5059,9.0072 19.5816,8.9587 C18.2643,7.1297 16.2891,6.9092 15.5723,6.8994 C13.9122,6.7344 12.3032,7.8699 11.4614,7.8699 C10.6,7.8699 9.3057,6.9144 7.8869,6.9438 C5.9941,6.9731 4.2285,8.0363 3.2481,9.7153 C1.2288,13.1357 2.7656,18.2964 4.6967,21.1843 C5.6771,22.5972 6.8164,24.1885 8.3057,24.1299 C9.7559,24.0664 10.3037,23.1885 12.0547,23.1885 C13.7861,23.1885 14.3037,24.1299 15.8135,24.0908 C17.3672,24.0664 18.3379,22.6534 19.2793,21.2258 C20.4088,19.5762 20.8672,17.9653 20.8867,17.8894 C20.8477,17.8747 17.5694,16.5791 17.5646,12.5575"
              ></path>
              <path
                d="M14.7461,4.1299 C15.5674,3.1348 16.1152,1.7612 15.9492,0.3633 C14.8066,0.4121 13.4053,1.1592 12.5547,2.1348 C11.8037,2.9902 11.1484,4.4033 11.3349,5.7573 C12.6191,5.8457 13.8955,5.1152 14.7461,4.1299"
              ></path>
            </svg>
            App Store
          </a>
          <a
            href="#"
            class="flex items-center justify-center rounded-full bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              class="h-6 w-6 mr-2"
              viewBox="0 0 50 50"
              style="fill: #ffffff"
            >
              <path
                d="M 7.125 2 L 28.78125 23.5 L 34.71875 17.5625 L 8.46875 2.40625 C 8.03125 2.152344 7.5625 2.011719 7.125 2 Z M 5.3125 3 C 5.117188 3.347656 5 3.757813 5 4.21875 L 5 46 C 5 46.335938 5.070313 46.636719 5.1875 46.90625 L 27.34375 24.90625 Z M 36.53125 18.59375 L 30.1875 24.90625 L 36.53125 31.1875 L 44.28125 26.75 C 45.382813 26.113281 45.539063 25.304688 45.53125 24.875 C 45.519531 24.164063 45.070313 23.5 44.3125 23.09375 C 43.652344 22.738281 38.75 19.882813 36.53125 18.59375 Z M 28.78125 26.3125 L 6.9375 47.96875 C 7.300781 47.949219 7.695313 47.871094 8.0625 47.65625 C 8.917969 47.160156 26.21875 37.15625 26.21875 37.15625 L 34.75 32.25 Z"
              ></path>
            </svg>
            Google Play
          </a>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="text-center">
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white border border-primary"
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
                  d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                />
              </svg>
            </div>
            <h3
              class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
            >
              100% Gratuit
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
              Application gratuite avec des fonctionnalités premium optionnelles
            </p>
          </div>

          <div class="text-center">
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white border border-primary"
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
              Fiable
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
              Des milliers d'animaux déjà retrouvés grâce à notre application
            </p>
          </div>

          <div class="text-center">
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white border border-primary"
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
              class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
            >
              Rapide
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
              Notifications instantanées et géolocalisation précise
            </p>
          </div>

          <div class="text-center">
            <div
              class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white border border-primary"
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <h3
              class="mt-3 text-base font-semibold leading-7 text-primary font-serif"
            >
              Communauté
            </h3>
            <p class="mt-2 text-sm leading-6 text-gray-600 font-sans">
              Une communauté active et solidaire pour vous aider
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour cette section
</script>
