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
            Animal Search Mobile
          </h1>
          <h2
            class="text-xl font-semibold text-primary-dark font-serif mt-6 mb-4"
          >
            L'application qui réunit les animaux perdus et leurs propriétaires
          </h2>
          <p class="text-lg leading-8 text-gray-600 mb-8 font-sans">
            Animal Search est une application smartphone GRATUITE qui a pour but
            de signaler tout animal égaré, blessé ou décédé aperçu sur la voie
            publique, grâce à des photos géolocalisées.
          </p>
          <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
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
              <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M3.1835,21.9996 C2.7446,21.9996 2.3975,21.6525 2.3975,21.2136 L2.3975,2.7861 C2.3975,2.3472 2.7446,2.0001 3.1835,2.0001 L20.8168,2.0001 C21.2557,2.0001 21.6028,2.3472 21.6028,2.7861 L21.6028,21.2136 C21.6028,21.6525 21.2557,21.9996 20.8168,21.9996 L3.1835,21.9996 Z M12.0001,7.8956 L17.7927,12.0001 L12.0001,16.1046 L6.2076,12.0001 L12.0001,7.8956 Z M8.2519,12.0001 L12.0001,14.6359 L15.7484,12.0001 L12.0001,9.3643 L8.2519,12.0001 Z"
                ></path>
              </svg>
              Google Play
            </a>
            <a
              href="#features"
              class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
            >
              Découvrir les fonctionnalités <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="relative flex items-center justify-center">
          <div class="absolute -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div
              class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary to-secondary opacity-30 animate-blob"
            ></div>
          </div>
          <div
            class="absolute -z-10 transform-gpu blur-3xl animation-delay-2000"
            aria-hidden="true"
          >
            <div
              class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-secondary to-primary-light opacity-30 animate-blob"
            ></div>
          </div>
          <div class="relative w-full max-w-[350px]">
            <div
              class="absolute inset-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary-light to-secondary opacity-30 animate-blob animation-delay-4000"
              ></div>
            </div>
            <img
              src="https://placehold.co/350x700/f8fafc/475569?text=Animal+Search+App"
              alt="Application Animal Search"
              class="w-full h-auto drop-shadow-2xl rounded-[3rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour cette section
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
