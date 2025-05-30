<script setup lang="ts">
import { provide, reactive, watch } from 'vue';
import type { IProfile } from '../lib/interfaces/IProfile';

const profileStorage = localStorage.getItem("profile")

const initProfile = profileStorage ? JSON.parse(profileStorage) : {
  name: "",
  salary: 0,
  investmentIntention: 0.2,
  targets: [],
  fixedExpenses: []
} as IProfile

const profile = reactive<IProfile>(initProfile)

provide("profile", profile)

watch(profile, () => {
  localStorage.setItem("profile", JSON.stringify(profile))
})

</script>

<template>
  <slot></slot>
</template>
