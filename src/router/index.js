import { createRouter, createWebHistory } from "vue-router";
import PetList from "../components/PetList.vue";
import PetDetails from "../components/PetDetails.vue";
import UserProfile from "../pages/UserProfile.vue";
import { auth } from "../firebase/config";
import Index from "../pages/index.vue";
import PetsIndex from "../pages/pets/index.vue";
import PetDetailsPage from "../pages/pets/[id].vue";
import LostPetsPage from "../pages/lost.vue";
import FoundPetsPage from "../pages/found.vue";
import LostFoundPage from "../pages/lost-found.vue";
import AppMobilePage from "../pages/app-mobile.vue";
import HowItWorksPage from "../pages/how-it-works.vue";
import AdminPage from "../pages/admin.vue";
import StyleGuidePage from "../pages/styleguide.vue";
import WhiskerQuestPage from "../pages/whisker-quest.vue";

// Navigation guard pour les routes protégées
const requireAuth = (to, from, next) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      next();
    } else {
      next("/");
    }
    unsubscribe();
  });
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/lost-found",
    name: "LostFound",
    component: LostFoundPage,
  },
  {
    path: "/lost",
    name: "LostPets",
    redirect: { name: "LostFound", query: { filter: "lost" } },
  },
  {
    path: "/found",
    name: "FoundPets",
    redirect: { name: "LostFound", query: { filter: "found" } },
  },
  {
    path: "/app-mobile",
    name: "AppMobile",
    component: AppMobilePage,
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    component: HowItWorksPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    beforeEnter: requireAuth,
  },
  {
    path: "/signalement",
    name: "SignalementPage",
    component: () => import("../pages/signalement.vue"),
  },
  {
    path: "/pet/:id",
    name: "PetDetails",
    redirect: (to) => {
      return { name: "PetDetailsPage", params: { id: to.params.id } };
    },
  },
  {
    path: "/pets",
    name: "PetsIndex",
    component: PetsIndex,
  },
  {
    path: "/pets/:id",
    name: "PetDetailsPage",
    component: PetDetailsPage,
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    beforeEnter: requireAuth,
  },
  {
    path: "/profile/:id",
    name: "UserProfileById",
    component: UserProfile,
    beforeEnter: requireAuth,
    props: (route) => ({
      userId: route.params.id,
    }),
  },
  {
    path: "/styleguide",
    name: "StyleGuide",
    component: StyleGuidePage,
  },
  {
    path: "/whisker-quest",
    name: "WhiskerQuest",
    component: WhiskerQuestPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
