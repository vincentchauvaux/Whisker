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
              class="flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-800"
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
              class="flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                class="h-6 w-6 mr-2"
                height="100"
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
          <slot name="app-link"></slot>
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
