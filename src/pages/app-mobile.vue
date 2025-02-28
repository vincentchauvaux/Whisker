<template>
  <MainLayout>
    <div class="bg-white">
      <main>
        <AppHeroSection />
        <AppFeaturesSection />
        <AppPricingSection />
        <AppTestimonialsSection />
        <AppFAQSection />
        <AppCTASection />
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import AppHeroSection from "../components/AppHeroSection.vue";
import AppFeaturesSection from "../components/AppFeaturesSection.vue";
import AppPricingSection from "../components/AppPricingSection.vue";
import AppTestimonialsSection from "../components/AppTestimonialsSection.vue";
import AppFAQSection from "../components/AppFAQSection.vue";
import AppCTASection from "../components/AppCTASection.vue";
</script>
