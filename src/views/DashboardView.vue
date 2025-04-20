<script setup lang="ts">
import { inject, ref } from 'vue';
import HeaderMenu from '../components/HeaderMenu.vue';
import type { IProfile } from '../lib/interfaces/IProfile';

const profile = inject("profile") as IProfile
const welcomeMessage = ref("")

const hour = new Date().getHours()

if (hour >= 6 && hour < 12) {
  welcomeMessage.value = `Olá, ${profile.name.split(" ")[0]}. Bom dia!`
} else if (hour >= 12 && hour < 18) {
  welcomeMessage.value = `Olá, ${profile.name.split(" ")[0]}. Boa tarde!`
} else {
  welcomeMessage.value = `Olá, ${profile.name.split(" ")[0]}. Boa noite!`
}

</script>

<template>
  <HeaderMenu />
  <div class="container">
    <main>
      <h1>{{ welcomeMessage }}</h1>
    </main>
  </div>
</template>

<style scoped src="../assets/dashboard.css" />
