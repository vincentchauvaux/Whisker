<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Whisker</span>
          <img class="h-8 w-auto" src="/logo.svg" alt="Whisker Logo" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm/6 font-semibold text-primary hover:text-primary-dark"
        >
          {{ item.name }}
        </a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          class="text-sm/6 font-semibold text-primary hover:text-primary-dark"
        >
          Connexion <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 z-50" />
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Whisker</span>
            <img class="h-8 w-auto" src="/logo.svg" alt="Whisker Logo" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-primary"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Fermer le menu</span>
            <svg
              class="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-primary-light"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-primary hover:bg-primary-light"
              >
                Connexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const navigation = [
  { name: "Accueil", href: "#" },
  { name: "Signaler", href: "#" },
  { name: "Carte", href: "#" },
  { name: "À propos", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>
