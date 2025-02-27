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
      <swiper-slide v-for="pet in pets" :key="pet.id">
        <div
          class="bg-white rounded-xl shadow-lg overflow-hidden h-full group transform transition-transform duration-300 hover:scale-[1.02] flex flex-col"
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

              <div class="flex flex-wrap gap-2 mt-auto">
                <span
                  v-for="(tag, index) in pet.tags"
                  :key="index"
                  class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-sans"
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
</script>

<style scoped>
.pet-slider-container {
  position: relative;
  padding: 0 50px;
}

.pet-slider {
  padding-bottom: 50px;
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
