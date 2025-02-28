<template>
  <div class="relative pet-slider-container">
    <!-- Bouton précédent personnalisé en dehors du swiper -->
    <div class="custom-swiper-button-prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </div>

    <!-- Conteneur avec overflow:hidden pour masquer les cartes qui dépassent -->
    <div class="swiper-container-mask">
      <swiper
        :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :space-between="16"
        :pagination="{ clickable: true }"
        :navigation="{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }"
        class="pet-slider"
        @reach-end="onReachEnd"
      >
        <swiper-slide v-for="pet in pets" :key="pet.id" class="h-auto">
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden w-full group transform transition-transform duration-300 hover:scale-[1.02] flex flex-col"
          >
            <router-link
              :to="{ name: 'PetDetailsPage', params: { id: pet.id } }"
              class="h-full flex flex-col"
            >
              <div class="relative h-64 flex-shrink-0">
                <img
                  :src="pet.image"
                  :alt="pet.name"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div class="absolute top-4 left-4">
                  <span
                    :class="[
                      'px-4 py-2 rounded-full text-sm self-start font-sans',
                      pet.status === 'lost'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-green-100 text-green-800',
                    ]"
                  >
                    {{ pet.duration }}
                  </span>
                </div>
              </div>

              <div class="p-6 flex-grow flex flex-col">
                <div class="flex items-center gap-2 mb-4">
                  <svg
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="font-medium text-primary font-serif">
                    {{ pet.location }}
                  </span>
                </div>

                <h3 class="text-xl font-bold text-gray-900 mb-2 font-serif">
                  {{ pet.name }}
                </h3>

                <div class="flex items-center gap-2 mb-4">
                  <svg
                    class="w-5 h-5 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-600 font-sans">{{ pet.date }}</span>
                </div>

                <div class="flex flex-wrap gap-2 mb-auto">
                  <span
                    v-for="(tag, index) in pet.tags"
                    :key="index"
                    :class="[
                      'px-3 py-1 rounded-full text-sm font-sans',
                      getTagColorClass(tag),
                    ]"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- Bouton suivant personnalisé en dehors du swiper -->
    <div class="custom-swiper-button-next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>

    <div v-if="loading" class="text-center py-4">
      <div
        class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto"
      ></div>
      <p class="mt-2 text-sm text-gray-600 font-sans">Chargement...</p>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  pets: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  hasMore: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["load-more"]);

const SwiperNavigation = Navigation;
const SwiperPagination = Pagination;
const SwiperAutoplay = Autoplay;

// Fonction pour charger plus d'animaux lorsqu'on atteint la fin du slider
const onReachEnd = () => {
  if (props.hasMore && !props.loading) {
    emit("load-more");
  }
};

// Fonction pour attribuer une couleur à chaque tag
const getTagColorClass = (tag) => {
  const tagLower = tag.toLowerCase();

  // Couleurs pour les races ou types
  if (tagLower.includes("européen") || tagLower.includes("europeen")) {
    return "bg-blue-100 text-blue-800";
  }
  if (tagLower.includes("siamois") || tagLower.includes("siamese")) {
    return "bg-purple-100 text-purple-800";
  }
  if (tagLower.includes("bengal")) {
    return "bg-amber-100 text-amber-800";
  }
  if (tagLower.includes("persan") || tagLower.includes("persian")) {
    return "bg-pink-100 text-pink-800";
  }

  // Couleurs pour les caractéristiques physiques
  if (tagLower.includes("noir") || tagLower.includes("black")) {
    return "bg-gray-800 text-white";
  }
  if (tagLower.includes("blanc") || tagLower.includes("white")) {
    return "bg-gray-100 text-gray-800 border border-gray-300";
  }
  if (
    tagLower.includes("roux") ||
    tagLower.includes("orange") ||
    tagLower.includes("ginger")
  ) {
    return "bg-orange-100 text-orange-800";
  }
  if (tagLower.includes("gris") || tagLower.includes("gray")) {
    return "bg-slate-200 text-slate-800";
  }
  if (tagLower.includes("tigré") || tagLower.includes("tabby")) {
    return "bg-amber-50 text-amber-800";
  }
  if (tagLower.includes("tacheté") || tagLower.includes("spotted")) {
    return "bg-lime-100 text-lime-800";
  }
  if (tagLower.includes("chartreux")) {
    return "bg-blue-200 text-blue-800";
  }

  // Couleurs pour l'âge
  if (tagLower.includes("chaton") || tagLower.includes("kitten")) {
    return "bg-pink-100 text-pink-800";
  }
  if (tagLower.includes("adulte") || tagLower.includes("adult")) {
    return "bg-teal-100 text-teal-800";
  }
  if (tagLower.includes("senior")) {
    return "bg-violet-100 text-violet-800";
  }

  // Couleur par défaut pour les autres tags
  return "bg-emerald-100 text-emerald-800";
};
</script>

<style scoped>
.pet-slider-container {
  position: relative;
  padding: 0 60px; /* Augmenté pour laisser de la place aux boutons */
}

/* Conteneur avec masque pour cacher les slides qui dépassent */
.swiper-container-mask {
  overflow: hidden;
  border-radius: 12px; /* Arrondir les coins du conteneur */
}

.pet-slider {
  padding-bottom: 50px;
}

/* Assurer une hauteur égale pour toutes les slides */
.pet-slider :deep(.swiper-slide) {
  height: auto;
  display: flex;
}

.pet-slider :deep(.swiper-wrapper) {
  align-items: stretch;
}

/* Styles pour les boutons de navigation personnalisés */
.custom-swiper-button-next,
.custom-swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f26052; /* Couleur secondary */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.custom-swiper-button-next:hover,
.custom-swiper-button-prev:hover {
  background-color: #f8f8f8;
}

.custom-swiper-button-next {
  right: 10px;
}

.custom-swiper-button-prev {
  left: 10px;
}

.pet-slider :deep(.swiper-pagination-bullet) {
  background-color: #f26052; /* Couleur secondary */
  opacity: 0.5;
}

.pet-slider :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>
