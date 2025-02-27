<template>
  <MainLayout>
    <div class="bg-white">
      <main>
        <HeroSection />
        <SearchAppSection />
        <FoundFriendsSection />
        <MapSection />
        <LostFriendsSection />
        <SponsorsSection />
        <AboutSection />
        <CTASection />
      </main>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import AboutSection from "../components/AboutSection.vue";
import HeroSection from "../components/HeroSection.vue";
import SearchAppSection from "../components/SearchAppSection.vue";
import FoundFriendsSection from "../components/FoundFriendsSection.vue";
import LostFriendsSection from "../components/LostFriendsSection.vue";
import SponsorsSection from "../components/SponsorsSection.vue";
import CTASection from "../components/CTASection.vue";
import MapSection from "../components/MapSection.vue";
</script>
