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
    path: "/lost",
    name: "LostPets",
    component: LostPetsPage,
  },
  {
    path: "/found",
    name: "FoundPets",
    component: FoundPetsPage,
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
