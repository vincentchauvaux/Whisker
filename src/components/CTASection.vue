<template>
  <section class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <!-- Motif de fond inversé -->
    <svg
      class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="cta-pattern"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-primary-light/40">
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#cta-pattern)"
      />
    </svg>

    <div class="container mx-auto px-4">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"
      >
        <div class="max-w-xl lg:max-w-lg">
          <h2
            class="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Rejoignez notre équipe !
          </h2>
          <p class="mt-4 text-lg leading-8 text-primary-dark">
            Vous souhaitez contribuer à notre mission de protection des animaux
            ? Nous recherchons des personnes passionnées et motivées pour nous
            aider à développer notre plateforme.
          </p>
          <div class="mt-6 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">Adresse email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary/20 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Entrez votre email"
            />
            <button
              type="submit"
              class="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Je postule
            </button>
          </div>
        </div>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-primary/20">
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
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <dt class="mt-4 font-semibold text-primary">
              Développeur Full-Stack
            </dt>
            <dd class="mt-2 leading-7 text-primary-dark">
              Aidez-nous à améliorer notre plateforme et à développer de
              nouvelles fonctionnalités.
            </dd>
          </div>
          <div class="flex flex-col items-start">
            <div class="rounded-md bg-white/5 p-2 ring-1 ring-primary/20">
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
            <dt class="mt-4 font-semibold text-primary">Community Manager</dt>
            <dd class="mt-2 leading-7 text-primary-dark">
              Gérez notre présence sur les réseaux sociaux et animez notre
              communauté.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
