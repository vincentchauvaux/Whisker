<template>
  <section
    class="bg-gradient-to-r from-primary-light to-secondary-light relative overflow-hidden min-h-screen flex items-center"
  >
    <div class="container mx-auto px-4 py-32 relative z-10">
      <div class="max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-bold text-primary mb-6">
          Trouver ou perdu,<br />
          Vous êtes au bon endroit !
        </h1>
        <p class="text-2xl text-primary-dark mb-12">Contacter nous !</p>
        <div class="flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            class="flex items-center bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <img
              src="/google-play.svg"
              alt="Google Play"
              class="h-8 w-8 mr-3"
            />
            <span class="text-primary text-lg">
              Télécharger sur<br />
              <span class="font-semibold group-hover:text-primary-dark"
                >Google Play</span
              >
            </span>
          </a>
          <a
            href="#"
            class="flex items-center bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <img src="/app-store.svg" alt="App Store" class="h-8 w-8 mr-3" />
            <span class="text-primary text-lg">
              Télécharger sur<br />
              <span class="font-semibold group-hover:text-primary-dark"
                >App Store</span
              >
            </span>
          </a>
        </div>
      </div>
    </div>
    <div
      class="absolute right-0 bottom-0 w-1/2 transform translate-x-1/4 transition-transform duration-300 ease-out"
      :style="{
        transform: `translate3d(0, ${scrollY * 0.15}px, 0) translate(25%)`,
      }"
    >
      <img
        src="/mockup/mokup-phone.png"
        alt="Application mobile mockup"
        class="w-full h-auto max-w-2xl drop-shadow-2xl"
      />
    </div>
    <div class="absolute bottom-0 left-0 right-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L120,37.3C240,43,480,53,720,58.7C960,64,1200,64,1320,64L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.section {
  perspective: 1000px;
}
</style>
