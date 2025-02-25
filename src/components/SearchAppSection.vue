<template>
  <section class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="container mx-auto px-4">
      <div
        class="mx-auto grid max-w-2xl gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center"
      >
        <div>
          <h2
            class="text-pretty text-4xl font-bold tracking-tight text-primary font-serif sm:text-6xl"
          >
            Retrouvez votre animal perdu
          </h2>
          <h3
            class="text-xl font-semibold text-primary-dark font-serif mt-6 mb-4"
          >
            La Plateforme de Centralisation<br />
            de Signalement d'Animaux Trouvés et Perdus
          </h3>
          <p class="text-lg leading-8 text-gray-600 mb-8 font-sans">
            Animal Search est une application smartphone GRATUITE qui a pour but
            de signaler tout animal égaré, blessé ou décédé aperçu sur la voie
            publique, grâce à des photos géolocalisées.
          </p>
          <p class="text-lg leading-8 text-gray-600 font-sans">
            Afin de s'assurer que l'animal perdu soit pris en charge dans les
            meilleurs délais, cette plateforme de centralisation permet non
            seulement aux utilisateurs de se contacter entre eux, mais aussi de
            contacter les vétérinaires, refuges et services communaux de voirie
            se trouvant à proximité de l'endroit où l'animal a été localisé.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              class="rounded-full bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary font-sans"
            >
              Télécharger l'app
            </a>
            <a
              href="#"
              class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
            >
              Comment ça marche <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="relative flex items-center rounded-2xl shadow-2xl">
          <div class="w-full rounded-2xl bg-gray-900/5 overflow-hidden">
            <div class="relative w-full pb-[56.25%]" ref="videoContainer">
              <iframe
                ref="videoIframe"
                class="absolute top-0 left-0 w-full h-full rounded-2xl"
                :src="`https://www.youtube.com/embed/i31ZeWeOHgY?si=FI7qMi9RY-rmp7NH&mute=1&loop=1&playlist=i31ZeWeOHgY&enablejsapi=1`"
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

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videoContainer = ref(null);
const videoIframe = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Démarrer la vidéo quand elle est visible
          const player = videoIframe.value;
          player.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        } else {
          // Mettre en pause la vidéo quand elle n'est plus visible
          const player = videoIframe.value;
          player.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      });
    },
    {
      threshold: 0.5, // Déclencher quand 50% de la vidéo est visible
    }
  );

  if (videoContainer.value) {
    observer.observe(videoContainer.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

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
