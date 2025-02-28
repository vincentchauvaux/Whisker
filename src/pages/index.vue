<template>
  <MainLayout>
    <div class="bg-white">
      <main>
        <HeroSection />
        <SearchAppSection>
          <template #app-link>
            <div class="mt-4">
              <router-link
                to="/app-mobile"
                class="text-sm font-semibold leading-6 text-secondary hover:text-secondary-dark font-sans"
              >
                Découvrir notre application mobile
                <span aria-hidden="true">→</span>
              </router-link>
            </div>
          </template>
        </SearchAppSection>
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
