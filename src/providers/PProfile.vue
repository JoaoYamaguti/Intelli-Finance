<script setup lang="ts">
import type { IProfile } from '@/lib/interfaces/IProfile';
import { provide, reactive, watch } from 'vue';

const profileStorage = localStorage.getItem("profile")

const initProfile = profileStorage ? JSON.parse(profileStorage) : {}

const profile = reactive<IProfile>(initProfile as IProfile)

provide("profile", profile)

watch(profile, () => {
  localStorage.setItem("profile", JSON.stringify(profile))
})

</script>

<template>
  <slot></slot>
</template>
