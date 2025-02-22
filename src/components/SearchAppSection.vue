<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Animal Search App
        </h2>
        <h3 class="text-xl text-gray-600 mb-4">
          La Plateforme de Centralisation<br />
          de Signalement d'Animaux Trouvés et Perdus
        </h3>
        <p class="text-gray-600 mb-8">
          Animal Search est une application smartphone GRATUITE qui a pour but
          de signaler tout animal égaré, blessé ou décédé aperçu sur la voie
          publique, grâce à des photos géolocalisées.
        </p>
        <p class="text-gray-600">
          Afin de s'assurer que l'animal perdu soit pris en charge dans les
          meilleurs délais, cette plateforme de centralisation permet non
          seulement aux utilisateurs de se contacter entre eux, mais aussi de
          contacter les vétérinaires, refuges et services communaux de voirie se
          trouvant à proximité de l'endroit où l'animal a été localisé.
        </p>
      </div>
      <div class="relative max-w-2xl mx-auto">
        <div
          class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl"
        >
          <div class="bg-black relative">
            <img
              src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?q=80&w=800&auto=format&fit=crop"
              alt="Vidéo de présentation"
              class="w-full h-full object-cover opacity-50"
            />
            <!-- Bouton de lecture -->
            <div class="absolute inset-0 flex items-center justify-center">
              <button
                class="text-white bg-red-600 rounded-full p-4 hover:bg-red-700 transition duration-300"
              >
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
}
.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
