<template>
  <section class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center"
      >
        <div>
          <h2
            class="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            Animal Search App
          </h2>
          <h3 class="text-xl font-semibold text-primary-dark mt-6 mb-4">
            La Plateforme de Centralisation<br />
            de Signalement d'Animaux Trouvés et Perdus
          </h3>
          <p class="text-lg leading-8 text-gray-600 mb-8">
            Animal Search est une application smartphone GRATUITE qui a pour but
            de signaler tout animal égaré, blessé ou décédé aperçu sur la voie
            publique, grâce à des photos géolocalisées.
          </p>
          <p class="text-lg leading-8 text-gray-600">
            Afin de s'assurer que l'animal perdu soit pris en charge dans les
            meilleurs délais, cette plateforme de centralisation permet non
            seulement aux utilisateurs de se contacter entre eux, mais aussi de
            contacter les vétérinaires, refuges et services communaux de voirie
            se trouvant à proximité de l'endroit où l'animal a été localisé.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Télécharger l'app
            </a>
            <a href="#" class="text-sm font-semibold leading-6 text-primary">
              Comment ça marche <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="relative flex items-center rounded-2xl shadow-2xl">
          <div class="w-full rounded-2xl bg-gray-900/5 overflow-hidden">
            <div class="relative w-full pb-[56.25%]">
              <iframe
                class="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/mtTxXP0vvwI?si=V-Nz2qiKb23eIiQO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
