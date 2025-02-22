<template>
  <Layout>
    <HeroSection />
    <SearchAppSection />
    <FoundFriendsSection />
    <MapSection />
    <SponsorsSection />
    <LostFriendsSection />
    <CTASection />
  </Layout>
</template>

<script setup>
import Layout from "../layouts/Layout.vue";
import HeroSection from "../components/HeroSection.vue";
import SearchAppSection from "../components/SearchAppSection.vue";
import FoundFriendsSection from "../components/FoundFriendsSection.vue";
import SponsorsSection from "../components/SponsorsSection.vue";
import LostFriendsSection from "../components/LostFriendsSection.vue";
import CTASection from "../components/CTASection.vue";
import MapSection from "../components/MapSection.vue";
</script>
