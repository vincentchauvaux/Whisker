<template>
  <section id="pricing" class="py-24 sm:py-32 bg-white">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-secondary font-sans">
          Tarifs
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
        >
          Des offres adaptées à vos besoins
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
          Choisissez l'offre qui vous convient le mieux. Nous proposons des
          options gratuites et premium pour répondre à tous les besoins.
        </p>
      </div>

      <div
        class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
      >
        <!-- Offre Gratuite -->
        <div
          class="rounded-3xl p-8 ring-1 ring-gray-200 lg:rounded-l-3xl lg:rounded-r-none"
        >
          <h3 class="text-lg font-semibold leading-8 text-primary font-serif">
            Gratuit
          </h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 font-sans">
            Parfait pour commencer à utiliser notre application.
          </p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span
              class="text-4xl font-bold tracking-tight text-primary font-serif"
              >0€</span
            >
            <span
              class="text-sm font-semibold leading-6 text-gray-600 font-sans"
              >/mois</span
            >
          </p>
          <a
            href="#"
            class="mt-6 block rounded-full py-2 px-3 text-center text-sm font-semibold leading-6 text-secondary ring-1 ring-inset ring-secondary hover:ring-secondary-dark hover:text-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary font-sans"
          >
            Télécharger gratuitement
          </a>
          <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-600 font-sans">
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Signalement d'animaux perdus
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Recherche d'animaux trouvés
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Géolocalisation basique
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Partage sur les réseaux sociaux
            </li>
          </ul>
        </div>

        <!-- Offre Premium -->
        <div
          class="rounded-3xl p-8 ring-1 ring-gray-200 bg-primary-light lg:rounded-r-3xl lg:rounded-l-none"
        >
          <h3 class="text-lg font-semibold leading-8 text-primary font-serif">
            Premium
          </h3>
          <p class="mt-4 text-sm leading-6 text-gray-600 font-sans">
            Pour une recherche optimale et des fonctionnalités avancées.
          </p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span
              class="text-4xl font-bold tracking-tight text-primary font-serif"
              >4,99€</span
            >
            <span
              class="text-sm font-semibold leading-6 text-gray-600 font-sans"
              >/mois</span
            >
          </p>
          <a
            href="#"
            class="mt-6 block rounded-full bg-secondary py-2 px-3 text-center text-sm font-semibold leading-6 text-white hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary font-sans"
          >
            Essai gratuit de 30 jours
          </a>
          <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-600 font-sans">
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Tout ce qui est inclus dans l'offre gratuite
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Notifications prioritaires
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Géolocalisation avancée
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Alertes personnalisées
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Contact direct avec les refuges
            </li>
            <li class="flex gap-x-3">
              <svg
                class="h-6 w-5 flex-none text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"
                />
              </svg>
              Support prioritaire 24/7
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p class="text-sm text-gray-500 font-sans">
          Tous les prix incluent la TVA. Vous pouvez annuler votre abonnement à
          tout moment.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour cette section
</script>
