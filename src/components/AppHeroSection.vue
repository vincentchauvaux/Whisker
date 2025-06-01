<template>
  <section class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    <div class="container mx-auto px-4">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center"
      >
        <div>
          <h1
            class="text-pretty text-4xl font-bold tracking-tight text-primary font-serif sm:text-6xl"
          >
            Whikser Mobile
          </h1>
          <h2
            class="text-xl font-semibold text-primary-dark font-serif mt-6 mb-4"
          >
            L'application qui réunit les animaux perdus et leurs propriétaires
          </h2>
          <p class="text-lg leading-8 text-gray-600 mb-8 font-sans">
            Whikser est une application smartphone GRATUITE qui a pour but de
            signaler tout animal égaré, blessé ou décédé aperçu sur la voie
            publique, grâce à des photos géolocalisées.
          </p>
          <div class="mt-10 flex flex-col gap-y-4">
            <div class="flex flex-wrap items-center gap-x-6 gap-y-4">
              <button
                @click="handleDownload('ios')"
                :disabled="isDownloading"
                class="flex items-center justify-center rounded-full bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-800 disabled:opacity-70"
              >
                <svg
                  class="h-6 w-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M17.5646,12.5575 C17.5599,10.1539 19.5059,9.0072 19.5816,8.9587 C18.2643,7.1297 16.2891,6.9092 15.5723,6.8994 C13.9122,6.7344 12.3032,7.8699 11.4614,7.8699 C10.6,7.8699 9.3057,6.9144 7.8869,6.9438 C5.9941,6.9731 4.2285,8.0363 3.2481,9.7153 C1.2288,13.1357 2.7656,18.2964 4.6967,21.1843 C5.6771,22.5972 6.8164,24.1885 8.3057,24.1299 C9.7559,24.0664 10.3037,23.1885 12.0547,23.1885 C13.7861,23.1885 14.3037,24.1299 15.8135,24.0908 C17.3672,24.0664 18.3379,22.6534 19.2793,21.2258 C20.4088,19.5762 20.8672,17.9653 20.8867,17.8894 C20.8477,17.8747 17.5694,16.5791 17.5646,12.5575"
                  ></path>
                  <path
                    d="M14.7461,4.1299 C15.5674,3.1348 16.1152,1.7612 15.9492,0.3633 C14.8066,0.4121 13.4053,1.1592 12.5547,2.1348 C11.8037,2.9902 11.1484,4.4033 11.3349,5.7573 C12.6191,5.8457 13.8955,5.1152 14.7461,4.1299"
                  ></path>
                </svg>
                App Store
              </button>
              <button
                @click="handleDownload('android')"
                :disabled="isDownloading"
                class="flex items-center justify-center rounded-full bg-black px-5 py-3 text-white shadow-sm hover:bg-gray-800 disabled:opacity-70"
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
              </button>
            </div>
            <div>
              <button
                @click="scrollToSection('features')"
                class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
              >
                Découvrir les fonctionnalités <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-center">
          <div class="absolute -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div
              :class="[blobClasses.base]"
              class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary to-secondary opacity-30"
            ></div>
          </div>
          <div
            class="absolute -z-10 transform-gpu blur-3xl"
            :class="[blobClasses.delay2s]"
            aria-hidden="true"
          >
            <div
              :class="[blobClasses.base]"
              class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-secondary to-primary-light opacity-30"
            ></div>
          </div>
          <div class="relative w-full max-w-[350px]">
            <div
              class="absolute inset-0 -z-10 transform-gpu blur-3xl"
              :class="[blobClasses.delay4s]"
              aria-hidden="true"
            >
              <div
                :class="[blobClasses.base]"
                class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary-light to-secondary opacity-30"
              ></div>
            </div>
            <div
              class="phone-container overflow-hidden rounded-[3rem] h-[600px] relative"
            >
              <div
                class="phone-screen animate-scroll"
                :style="phoneScrollStyle"
              >
                <img
                  src="/public/printscreen/home-mob.png"
                  alt="Application Animal Search"
                  class="w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import {
  useScrollAnimation,
  useBlobAnimation,
  useNavigation,
  useAppDownload,
  formatNumber,
} from "../functions";

// Utilisation des hooks d'animation
const { getTransformStyle } = useScrollAnimation({
  scrollSpeed: 0.08,
  maxOffset: 900,
  scrollFactor: 0.15,
});

const { blobClasses } = useBlobAnimation();

// Utilisation des hooks d'interaction
const { scrollToSection } = useNavigation();
const { isDownloading, handleDownload } = useAppDownload();

// Calcul du style de transformation pour l'animation du téléphone
const phoneScrollStyle = computed(() => getTransformStyle());

// Exemple d'utilisation de la fonction formatNumber
const userCount = formatNumber(25000);
const cityCount = formatNumber(150);
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

.phone-container {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 10px solid #293a42;
  position: relative;
  z-index: 1;
}

.phone-screen {
  height: 1000px; /* Plus grand que le conteneur pour permettre le défilement */
  transition: transform 0.05s linear;
}
</style>
