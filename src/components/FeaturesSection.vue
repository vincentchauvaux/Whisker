<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <Heading tag="h2" size="2xl" class="text-center">
          Une solution complète pour retrouver votre animal
        </Heading>
        <p class="mt-6 text-lg leading-8 text-gray-600 font-sans">
          Notre plateforme combine technologie et compassion pour créer un
          réseau efficace de recherche d'animaux perdus.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <Card
            v-for="feature in features"
            :key="feature.name"
            hover
            padding="md"
          >
            <dt
              class="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary-dark font-sans"
            >
              <component
                :is="feature.icon"
                class="h-5 w-5 flex-none text-primary"
                aria-hidden="true"
              />
              {{ feature.name }}
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 font-sans"
            >
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <Button variant="outline" size="sm">
                  En savoir plus
                  <span class="ml-2" aria-hidden="true">→</span>
                </Button>
              </p>
            </dd>
          </Card>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MapIcon, UserGroupIcon, BellIcon } from "@heroicons/vue/24/outline";
import Button from "./ui/Button.vue";
import Card from "./ui/Card.vue";
import Heading from "./ui/Heading.vue";

const features = [
  {
    name: "Recherche géolocalisée",
    description:
      "Utilisez notre système de géolocalisation avancé pour suivre les signalements d'animaux perdus dans votre région.",
    icon: MapIcon,
  },
  {
    name: "Communauté active",
    description:
      "Rejoignez une communauté de passionnés prêts à aider à la recherche d'animaux perdus.",
    icon: UserGroupIcon,
  },
  {
    name: "Alertes en temps réel",
    description:
      "Recevez des notifications instantanées lorsqu'un animal correspondant à votre recherche est signalé.",
    icon: BellIcon,
  },
];
</script>
