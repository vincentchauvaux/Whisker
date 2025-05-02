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

          <div class="mt-4">
            <router-link
              to="/how-it-works"
              class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
            >
              Découvrir les fonctionnalités <span aria-hidden="true">→</span>
            </router-link>
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
let player = null;

const onYouTubeIframeAPIReady = () => {
  player = new YT.Player(videoIframe.value, {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};

const onPlayerReady = () => {
  // La vidéo est prête, on peut maintenant l'observer
  if (videoContainer.value) {
    observer.observe(videoContainer.value);
  }
};

const onPlayerStateChange = (event) => {
  // Gérer les changements d'état de la vidéo si nécessaire
};

onMounted(() => {
  // Charger l'API YouTube
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Configurer l'Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && player) {
          // Démarrer la vidéo quand elle est visible
          player.playVideo();
        } else if (player) {
          // Mettre en pause la vidéo quand elle n'est plus visible
          player.pauseVideo();
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "50px", // Déclencher un peu avant que la vidéo ne soit complètement visible
    }
  );
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
  if (player) {
    player.destroy();
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
