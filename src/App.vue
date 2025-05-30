<script setup lang="ts">
import { RouterView } from 'vue-router'
import ProfileProvider from "./providers/ProfileProvider.vue";
import NotificationProvider from './providers/NotificationProvider.vue';
</script>

<template>
  <NotificationProvider>
    <ProfileProvider>
      <RouterView />
    </ProfileProvider>
  </NotificationProvider>
</template>
