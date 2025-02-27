<template>
  <MainLayout>
    <div class="bg-white min-h-screen">
      <PetList status="lost" />
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import PetList from "../components/PetList.vue";
</script>
