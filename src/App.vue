<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileProvider from "./providers/PProfile.vue";
</script>

<template>
  <ProfileProvider>
    <RouterView />
  </ProfileProvider>
</template>
