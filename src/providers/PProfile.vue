<script setup lang="ts">
import { provide, ref } from 'vue';

const profile = ref("profile content")

provide("profile", profile)

</script>

<template>
  <slot></slot>
</template>
