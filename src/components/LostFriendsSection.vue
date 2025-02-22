<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
          Nos Amis perdus
        </h2>
        <p class="text-xl text-primary-dark">Aidez-nous à les retrouver</p>
      </div>

      <PetSlider :pets="lostPets" />
    </div>
  </section>
</template>

<script setup>
import PetSlider from "./PetSlider.vue";

const lostPets = [
  {
    id: 1,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=400&auto=format&fit=crop",
    location: "Anvers",
    date: "14/02/24 - 08:30",
    duration: "Perdu depuis 2 jours",
    tags: ["Peureux", "Chat Européen"],
  },
  {
    id: 2,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=400&auto=format&fit=crop",
    location: "Gand",
    date: "13/02/24 - 16:45",
    duration: "Perdu depuis 3 jours",
    tags: ["Sociable", "Chat Persan"],
  },
  {
    id: 3,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=400&auto=format&fit=crop",
    location: "Bruxelles",
    date: "12/02/24 - 10:20",
    duration: "Perdu depuis 4 jours",
    tags: ["Joueur", "Chat Maine Coon"],
  },
  {
    id: 4,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=400&auto=format&fit=crop",
    location: "Louvain",
    date: "11/02/24 - 14:15",
    duration: "Perdu depuis 5 jours",
    tags: ["Timide", "Chat Angora"],
  },
  {
    id: 5,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=400&auto=format&fit=crop",
    location: "Ostende",
    date: "10/02/24 - 09:45",
    duration: "Perdu depuis 6 jours",
    tags: ["Curieux", "Chat British Shorthair"],
  },
  {
    id: 6,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=400&auto=format&fit=crop",
    location: "Malines",
    date: "09/02/24 - 11:30",
    duration: "Perdu depuis 7 jours",
    tags: ["Calme", "Chat Ragdoll"],
  },
  {
    id: 7,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=400&auto=format&fit=crop",
    location: "Courtrai",
    date: "08/02/24 - 15:20",
    duration: "Perdu depuis 8 jours",
    tags: ["Affectueux", "Chat Siamois"],
  },
  {
    id: 8,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=400&auto=format&fit=crop",
    location: "Tournai",
    date: "07/02/24 - 13:10",
    duration: "Perdu depuis 9 jours",
    tags: ["Sociable", "Chat Bengal"],
  },
  {
    id: 9,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?q=80&w=400&auto=format&fit=crop",
    location: "Ypres",
    date: "06/02/24 - 10:45",
    duration: "Perdu depuis 10 jours",
    tags: ["Joueur", "Chat Norvégien"],
  },
  {
    id: 10,
    status: "lost",
    image:
      "https://images.unsplash.com/photo-1506891536236-3e07892564b7?q=80&w=400&auto=format&fit=crop",
    location: "Arlon",
    date: "05/02/24 - 09:30",
    duration: "Perdu depuis 11 jours",
    tags: ["Timide", "Chat Sacré de Birmanie"],
  },
];
</script>
