<script setup lang="ts">
import { ref } from 'vue';

const logged = ref(true)
</script>

<template>
  <header>
    <div class="content">
      <h1>
        <RouterLink to="/">Intelli Finance</RouterLink>
      </h1>
      <nav>
        <RouterLink to="/dashboard" v-if="logged">Dashboard</RouterLink>
        <RouterLink to="/login" v-else>Login</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped src="../assets/headerMenu.css" />
