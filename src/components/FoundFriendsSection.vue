<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
          Nos Amis trouvés
        </h2>
        <p class="text-xl text-primary-dark">Les derniers signalements</p>
      </div>

      <PetSlider :pets="foundPets" />
    </div>
  </section>
</template>

<script setup>
import PetSlider from "./PetSlider.vue";

const foundPets = [
  {
    id: 1,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop",
    location: "Brugges",
    date: "14/02/24 - 12:45",
    duration: "Trouvé sur la voie publique",
    tags: ["Curieux", "Indemne", "Chat Siamois"],
  },
  {
    id: 2,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=400&auto=format&fit=crop",
    location: "Liège",
    date: "13/02/24 - 15:30",
    duration: "Trouvé sur la voie publique",
    tags: ["Amical", "Indemne", "Chat Européen"],
  },
  {
    id: 3,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=400&auto=format&fit=crop",
    location: "Namur",
    date: "12/02/24 - 09:15",
    duration: "Trouvé sur la voie publique",
    tags: ["Timide", "Indemne", "Chat Siamois"],
  },
  {
    id: 4,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=400&auto=format&fit=crop",
    location: "Charleroi",
    date: "11/02/24 - 16:20",
    duration: "Trouvé sur la voie publique",
    tags: ["Joueur", "Indemne", "Chat Tigré"],
  },
  {
    id: 5,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=400&auto=format&fit=crop",
    location: "Anvers",
    date: "10/02/24 - 11:30",
    duration: "Trouvé sur la voie publique",
    tags: ["Sociable", "Indemne", "Chat Roux"],
  },
  {
    id: 6,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=400&auto=format&fit=crop",
    location: "Gand",
    date: "09/02/24 - 14:15",
    duration: "Trouvé sur la voie publique",
    tags: ["Calme", "Indemne", "Chat Noir"],
  },
];
</script>

<style scoped>
.aspect-w-1 {
  position: relative;
  padding-bottom: 100%;
}
.aspect-w-1 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
