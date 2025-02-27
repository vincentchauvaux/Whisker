import { createRouter, createWebHistory } from "vue-router";
import PetList from "../components/PetList.vue";
import PetDetails from "../components/PetDetails.vue";
import UserProfile from "../pages/UserProfile.vue";
import { auth } from "../firebase/config";
import Index from "../pages/index.vue";

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
    component: PetList,
    props: {
      status: "lost",
    },
  },
  {
    path: "/found",
    name: "FoundPets",
    component: PetList,
    props: {
      status: "found",
    },
  },
  {
    path: "/pet/:id",
    name: "PetDetails",
    component: PetDetails,
    props: (route) => ({
      petId: route.params.id,
    }),
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
