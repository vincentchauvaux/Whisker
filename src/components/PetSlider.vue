<template>
  <div class="relative px-12">
    <div class="overflow-hidden">
      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }"
        :space-between="16"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :pagination="{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }"
        :loop="true"
        class="pet-swiper pb-12"
      >
        <swiper-slide v-for="pet in pets" :key="pet.id" class="h-full">
          <div
            class="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-[1.02]"
          >
            <div class="relative h-64 flex-shrink-0">
              <img
                :src="pet.image"
                :alt="pet.name"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span
                  :class="[
                    'text-xl font-bold px-6 py-2 rounded-full',
                    pet.status === 'lost'
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white',
                  ]"
                >
                  {{ pet.status === "lost" ? "Perdu" : "Trouvé" }}
                </span>
              </div>
            </div>

            <div class="p-6 flex-grow flex flex-col min-h-[200px]">
              <div class="flex items-center gap-2 mb-4">
                <svg
                  class="w-6 h-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    fill="currentColor"
                  />
                </svg>
                <span class="text-xl font-semibold text-primary">{{
                  pet.location
                }}</span>
              </div>

              <div class="flex flex-col gap-2 mb-4">
                <div class="flex items-center gap-2">
                  <svg
                    class="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span class="text-gray-600">{{ pet.date }}</span>
                </div>
                <span
                  :class="[
                    'px-4 py-1 rounded-full text-sm self-start',
                    pet.status === 'lost'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800',
                  ]"
                >
                  {{ pet.duration }}
                </span>
              </div>

              <div class="flex flex-wrap gap-2 mt-auto">
                <span
                  v-for="tag in pet.tags"
                  :key="tag"
                  class="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- Navigation buttons outside the swiper -->
    <div class="swiper-button-prev !-left-2"></div>
    <div class="swiper-button-next !-right-2"></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  pets: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.pet-swiper {
  padding: 20px 0 48px !important;
  margin-bottom: 0 !important;
}

.swiper,
.swiper-wrapper,
.swiper-slide {
  height: auto !important;
}

.swiper-button-next,
.swiper-button-prev {
  color: theme("colors.primary.DEFAULT") !important;
  background: white;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 20;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 20px !important;
}

.swiper-pagination {
  bottom: 0 !important;
}

.swiper-pagination-bullet {
  background: theme("colors.primary.DEFAULT") !important;
  width: 10px !important;
  height: 10px !important;
  margin: 0 6px !important;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(1.2);
}
</style>
