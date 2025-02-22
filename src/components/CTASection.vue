<template>
  <section
    class="py-20 bg-gradient-to-br from-primary-light via-secondary-light to-secondary relative overflow-hidden"
  >
    <!-- Cercles décoratifs -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 rounded-full transform translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-20 rounded-full transform -translate-x-1/2 translate-y-1/2"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">
          Rejoignez notre équipe !
        </h2>
        <p class="text-xl mb-8 text-primary-dark">
          Vous souhaitez contribuer à notre mission de protection des animaux ?
          Nous recherchons des personnes passionnées et motivées pour nous aider
          à développer notre plateforme.
        </p>
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div
            class="bg-white bg-opacity-60 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-semibold mb-3 text-primary">
              Développeur Full-Stack
            </h3>
            <p class="text-primary-dark">
              Aidez-nous à améliorer notre plateforme
            </p>
          </div>
          <div
            class="bg-white bg-opacity-60 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-semibold mb-3 text-primary">
              Community Manager
            </h3>
            <p class="text-primary-dark">
              Gérez notre présence sur les réseaux sociaux
            </p>
          </div>
          <div
            class="bg-white bg-opacity-60 rounded-xl p-6 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-semibold mb-3 text-primary">
              Chargé de Relations
            </h3>
            <p class="text-primary-dark">
              Développez nos partenariats avec les refuges
            </p>
          </div>
        </div>
        <a
          href="#"
          class="inline-block bg-white px-8 py-4 rounded-full text-lg font-semibold text-primary hover:shadow-xl transition-all duration-300 group"
        >
          <span
            class="group-hover:text-primary-dark transition-colors duration-300"
          >
            Voir nos offres d'emploi
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
