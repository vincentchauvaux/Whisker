<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
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
    location: "Bruges",
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
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=400&auto=format&fit=crop",
    location: "Gand",
    date: "09/02/24 - 14:20",
    duration: "Trouvé sur la voie publique",
    tags: ["Calme", "Indemne", "Chat Persan"],
  },
  {
    id: 7,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=400&auto=format&fit=crop",
    location: "Louvain",
    date: "08/02/24 - 10:15",
    duration: "Trouvé sur la voie publique",
    tags: ["Affectueux", "Indemne", "Chat Angora"],
  },
  {
    id: 8,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=400&auto=format&fit=crop",
    location: "Ostende",
    date: "07/02/24 - 09:45",
    duration: "Trouvé sur la voie publique",
    tags: ["Joueur", "Indemne", "Chat Maine Coon"],
  },
  {
    id: 9,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=400&auto=format&fit=crop",
    location: "Mons",
    date: "06/02/24 - 16:30",
    duration: "Trouvé sur la voie publique",
    tags: ["Sociable", "Indemne", "Chat British"],
  },
  {
    id: 10,
    status: "found",
    image:
      "https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=400&auto=format&fit=crop",
    location: "Hasselt",
    date: "05/02/24 - 13:20",
    duration: "Trouvé sur la voie publique",
    tags: ["Curieux", "Indemne", "Chat Ragdoll"],
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
