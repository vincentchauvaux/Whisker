<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="[
      scrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-[0_8px_15px_-3px_rgba(0,0,0,0.05)]'
        : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between py-6" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5 flex items-center gap-3">
            <span class="sr-only">Whisker</span>
            <img
              class="w-auto transition-all duration-300"
              :class="[
                scrolled
                  ? 'h-8 brightness-100 sepia-[.25] hue-rotate-[310deg] saturate-[.9]'
                  : 'h-12 brightness-100 sepia-[.25] hue-rotate-[310deg] saturate-[.9]',
              ]"
              src="/logo-nb-transparent.png"
              alt="Whisker Logo"
            />
            <div
              class="flex items-baseline gap-1 transition-all duration-300"
              :class="[scrolled ? 'scale-90' : 'scale-100']"
            >
              <span class="font-sans font-bold text-primary">Whisker</span>
              <span class="font-serif text-secondary">Quest</span>
            </div>
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
            class="text-sm/6 font-semibold text-primary hover:text-primary-dark font-sans"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div v-if="user" class="flex items-center gap-4">
            <router-link to="/profile">
              <img
                :src="user.photoURL || '/default-avatar.png'"
                alt="Photo de profil"
                class="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-secondary transition-all"
              />
            </router-link>
            <button
              @click="logout"
              class="text-sm/6 font-semibold text-primary hover:text-primary-dark font-sans"
            >
              Déconnexion
            </button>
          </div>
          <button
            v-else
            @click="showLoginModal = true"
            class="text-sm/6 font-semibold text-primary hover:text-primary-dark font-sans"
          >
            Connexion <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </div>

    <!-- Menu Mobile -->
    <div v-if="mobileMenuOpen" class="lg:hidden">
      <div class="fixed inset-0 z-50" />
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5 flex items-center gap-3">
              <span class="sr-only">Whisker</span>
              <img
                class="w-auto transition-all duration-300 h-8 brightness-100 sepia-[.25] hue-rotate-[310deg] saturate-[.9]"
                src="/logo-nb-transparent.png"
                alt="Whisker Logo"
              />
              <div class="flex items-baseline gap-1">
                <span class="font-sans font-bold text-primary">Whisker</span>
                <span class="font-serif text-secondary">Quest</span>
              </div>
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
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-primary-light font-sans"
                >
                  {{ item.name }}
                </a>
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-primary hover:bg-primary-light font-sans"
                >
                  Connexion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de connexion -->
    <div
      v-if="showLoginModal"
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900 font-serif"
                  id="modal-title"
                >
                  Connexion
                </h3>
                <div class="mt-6 space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Email</label
                    >
                    <input
                      type="email"
                      v-model="loginForm.email"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700"
                      >Mot de passe</label
                    >
                    <input
                      type="password"
                      v-model="loginForm.password"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  <div v-if="loginError" class="text-red-600 text-sm">
                    {{ loginError }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col sm:gap-2"
          >
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-white hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:text-sm"
              @click="login"
            >
              Se connecter
            </button>
            <button
              type="button"
              class="mt-2 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-secondary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:text-sm"
              @click="register"
            >
              Créer un compte
            </button>
            <div class="relative mt-2">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-gray-50 text-gray-500">Ou</span>
              </div>
            </div>
            <button
              type="button"
              @click="signInWithGoogle"
              class="mt-2 w-full inline-flex justify-center items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:text-sm"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuer avec Google
            </button>
            <button
              type="button"
              class="mt-2 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:text-sm"
              @click="showLoginModal = false"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { auth, googleProvider } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Signaler", href: "/report" },
  { name: "Carte", href: "/map" },
  { name: "À propos", href: "/about" },
];

const mobileMenuOpen = ref(false);
const scrolled = ref(false);
const showLoginModal = ref(false);
const loginForm = ref({
  email: "",
  password: "",
});
const loginError = ref("");
const user = ref(null);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Écouter les changements d'état de l'authentification
  auth.onAuthStateChanged((currentUser) => {
    user.value = currentUser;
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const login = async () => {
  try {
    loginError.value = "";
    await signInWithEmailAndPassword(
      auth,
      loginForm.value.email,
      loginForm.value.password
    );
    showLoginModal.value = false;
    router.push("/profile");
  } catch (error) {
    loginError.value = "Email ou mot de passe incorrect";
  }
};

const register = async () => {
  try {
    loginError.value = "";
    await createUserWithEmailAndPassword(
      auth,
      loginForm.value.email,
      loginForm.value.password
    );
    showLoginModal.value = false;
    router.push("/profile");
  } catch (error) {
    loginError.value = "Erreur lors de la création du compte";
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    router.push("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
  }
};

const signInWithGoogle = async () => {
  try {
    loginError.value = "";
    await signInWithPopup(auth, googleProvider);
    showLoginModal.value = false;
    router.push("/profile");
  } catch (error) {
    console.error("Erreur lors de la connexion avec Google:", error);
    loginError.value = "Erreur lors de la connexion avec Google";
  }
};
</script>
