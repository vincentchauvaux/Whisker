<template>
  <div class="relative pet-slider-container">
    <swiper
      :modules="[SwiperNavigation, SwiperPagination, SwiperAutoplay]"
      :slides-per-view="1"
      :space-between="16"
      :pagination="{ clickable: true }"
      :navigation="true"
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
});

const SwiperNavigation = Navigation;
const SwiperPagination = Pagination;
const SwiperAutoplay = Autoplay;

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
  padding: 0 50px;
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

.pet-slider :deep(.swiper-button-next),
.pet-slider :deep(.swiper-button-prev) {
  color: #f26052; /* Couleur secondary */
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.pet-slider :deep(.swiper-button-next) {
  right: 0;
}

.pet-slider :deep(.swiper-button-prev) {
  left: 0;
}

.pet-slider :deep(.swiper-button-next)::after,
.pet-slider :deep(.swiper-button-prev)::after {
  font-size: 18px;
  font-weight: bold;
}

.pet-slider :deep(.swiper-pagination-bullet) {
  background-color: #f26052; /* Couleur secondary */
  opacity: 0.5;
}

.pet-slider :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>
