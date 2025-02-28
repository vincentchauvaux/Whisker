<template>
  <section class="py-24 sm:py-32 bg-white">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-2xl lg:text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-secondary font-sans">
          FAQ
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-primary font-serif sm:text-4xl"
        >
          Questions fréquemment posées
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
          Vous avez des questions sur notre application ? Consultez notre FAQ
          pour trouver des réponses aux questions les plus courantes.
        </p>
      </div>

      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <div class="pt-6">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between text-left text-primary font-serif"
                aria-controls="faq-0"
                aria-expanded="false"
              >
                <span class="text-base font-semibold leading-7"
                  >Comment signaler un animal perdu ou trouvé ?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    class="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12 font-sans">
              <p class="text-base leading-7 text-gray-600">
                Pour signaler un animal perdu ou trouvé, ouvrez l'application et
                cliquez sur le bouton "Signaler" en bas de l'écran. Suivez
                ensuite les instructions pour ajouter des photos, la
                localisation et les détails de l'animal. Votre signalement sera
                immédiatement visible par les utilisateurs à proximité.
              </p>
            </dd>
          </div>

          <div class="pt-6">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between text-left text-primary font-serif"
                aria-controls="faq-1"
                aria-expanded="false"
              >
                <span class="text-base font-semibold leading-7"
                  >L'application est-elle vraiment gratuite ?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    class="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12 font-sans">
              <p class="text-base leading-7 text-gray-600">
                Oui, l'application de base est entièrement gratuite et vous
                permet de signaler des animaux perdus ou trouvés. Nous proposons
                également une version premium avec des fonctionnalités avancées
                comme les notifications prioritaires et la géolocalisation
                avancée pour 4,99€ par mois.
              </p>
            </dd>
          </div>

          <div class="pt-6">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between text-left text-primary font-serif"
                aria-controls="faq-2"
                aria-expanded="false"
              >
                <span class="text-base font-semibold leading-7"
                  >Comment fonctionne la géolocalisation ?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    class="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12 font-sans">
              <p class="text-base leading-7 text-gray-600">
                Notre système de géolocalisation utilise le GPS de votre
                téléphone pour localiser précisément où un animal a été aperçu
                ou perdu. Ces données sont ensuite affichées sur une carte
                interactive dans l'application, permettant aux utilisateurs de
                voir tous les signalements à proximité.
              </p>
            </dd>
          </div>

          <div class="pt-6">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between text-left text-primary font-serif"
                aria-controls="faq-3"
                aria-expanded="false"
              >
                <span class="text-base font-semibold leading-7"
                  >Comment contacter le propriétaire d'un animal trouvé ?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    class="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12 font-sans">
              <p class="text-base leading-7 text-gray-600">
                Lorsque vous trouvez un animal correspondant à un signalement,
                vous pouvez contacter le propriétaire directement via
                l'application en cliquant sur le bouton "Contacter" sur la fiche
                de l'animal. Vous pouvez échanger des messages et des photos
                pour confirmer qu'il s'agit bien du même animal.
              </p>
            </dd>
          </div>

          <div class="pt-6">
            <dt>
              <button
                type="button"
                class="flex w-full items-start justify-between text-left text-primary font-serif"
                aria-controls="faq-4"
                aria-expanded="false"
              >
                <span class="text-base font-semibold leading-7"
                  >L'application fonctionne-t-elle partout en France ?</span
                >
                <span class="ml-6 flex h-7 items-center">
                  <svg
                    class="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12 font-sans">
              <p class="text-base leading-7 text-gray-600">
                Oui, notre application fonctionne dans toute la France. Nous
                avons des partenariats avec de nombreux refuges, vétérinaires et
                services communaux à travers le pays pour maximiser les chances
                de retrouver les animaux perdus.
              </p>
            </dd>
          </div>
        </dl>
      </div>

      <div class="mt-16 text-center">
        <p class="text-base text-gray-600 font-sans">
          Vous avez d'autres questions ? N'hésitez pas à nous contacter.
        </p>
        <a
          href="#"
          class="mt-6 inline-block rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary font-sans"
        >
          Contactez-nous
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour cette section
</script>
