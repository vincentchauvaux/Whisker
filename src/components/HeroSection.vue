<template>
  <div class="bg-white">
    <div class="relative isolate pt-24">
      <svg
        class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="69%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="69%" y="-1" class="overflow-visible fill-primary-light">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>

      <div
        class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40"
      >
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div class="flex">
            <div
              class="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              <span class="font-semibold text-primary font-serif">Nouveau</span>
              <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
              <a href="/app-mobile" class="flex items-center gap-x-1 font-sans">
                <span class="absolute inset-0" aria-hidden="true" />
                Application mobile disponible
                <svg
                  class="-mr-2 size-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <h1
            class="mt-10 text-pretty text-4xl font-bold tracking-tight text-primary font-serif sm:text-6xl"
          >
            Trouver ou perdu, Vous êtes au bon endroit !
          </h1>
          <p
            class="mt-8 text-pretty text-lg font-medium text-primary-dark font-sans sm:text-xl/8"
          >
            Notre plateforme innovante combine technologie et compassion pour
            créer un réseau efficace de recherche d'animaux perdus, connectant
            propriétaires, refuges et communautés locales.
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
            <div class="mt-4">
              <router-link
                to="/app-mobile"
                class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
              >
                Découvrir notre application mobile
                <span aria-hidden="true">→</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
          <svg
            viewBox="0 0 366 729"
            role="img"
            class="mx-auto w-[22.875rem] max-w-full drop-shadow-2xl [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.2))_drop-shadow(0_40px_60px_rgba(0,0,0,0.15))]"
          >
            <title>Capture d'écran de l'application</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect width="316" height="684" rx="36" />
              </clipPath>
            </defs>
            <path
              fill="#1B3B44"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
            />
            <path
              fill="#293A42"
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
            />
            <foreignObject
              width="316"
              height="684"
              transform="translate(24 24)"
              clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
              <img
                src="/affiches/affiche-3-720-2.png"
                alt="Capture d'écran de l'application mobile"
                class="w-full h-full object-cover"
              />
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>

    <!-- Modal de connexion -->
    <div
      v-if="showLoginModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 class="text-xl font-bold mb-4 text-primary font-serif">
          Connexion
        </h2>

        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              v-model="loginForm.email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Mot de passe</label
            >
            <input
              type="password"
              id="password"
              v-model="loginForm.password"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <p v-if="loginError" class="text-red-500 text-sm">{{ loginError }}</p>

          <div class="flex justify-between">
            <button
              type="button"
              @click="showLoginModal = false"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark"
            >
              Se connecter
            </button>
          </div>

          <div class="text-center text-sm text-gray-500">
            <a href="/register" class="text-primary hover:text-primary-dark"
              >Créer un compte</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const router = useRouter();
const auth = getAuth();
const isLoggedIn = ref(false);
const showLoginModal = ref(false);
const loginForm = ref({
  email: "",
  password: "",
});
const loginError = ref("");

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const handleCommencer = () => {
  if (isLoggedIn.value) {
    router.push("/pets");
  } else {
    showLoginModal.value = true;
  }
};

const login = async () => {
  try {
    loginError.value = "";
    await signInWithEmailAndPassword(
      auth,
      loginForm.value.email,
      loginForm.value.password
    );
    showLoginModal.value = false;
    router.push("/signalement");
  } catch (error) {
    console.error("Erreur de connexion:", error);
    loginError.value = "Email ou mot de passe incorrect";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Vérifier l'état de l'authentification
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
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
