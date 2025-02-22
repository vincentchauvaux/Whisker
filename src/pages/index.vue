<template>
  <div class="bg-white">
    <Header />
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
    <Footer />
  </div>
</template>

<script setup>
import Layout from "../layouts/Layout.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import AboutSection from "../components/AboutSection.vue";
import HeroSection from "../components/HeroSection.vue";
import SearchAppSection from "../components/SearchAppSection.vue";
import FoundFriendsSection from "../components/FoundFriendsSection.vue";
import SponsorsSection from "../components/SponsorsSection.vue";
import LostFriendsSection from "../components/LostFriendsSection.vue";
import CTASection from "../components/CTASection.vue";
import MapSection from "../components/MapSection.vue";
</script>
