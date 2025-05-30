<script setup lang="ts">
import { nextTick, provide, reactive } from 'vue';

const notification = reactive({
  show: false,
  status: "",
  message: ""
})

let notificationTimer = setTimeout(() => {}, 0)

function removeNotification(timer: number) {
  clearTimeout(timer)
  notification.show = false
}

async function showNotification(status: string, message: string) {
  removeNotification(notificationTimer)

  await nextTick()

  notification.status = status
  notification.message = message
  notification.show = true

  notificationTimer = setTimeout(() => {
    removeNotification(notificationTimer)
  }, 3000)
}

provide("notification", showNotification)

</script>

<template>
  <slot></slot>
    <div v-if="notification.show" class="notification">
      <div :class="notification.status"></div>
      <p>{{ notification.message }}</p>
  </div>
</template>

<style src="../assets/notification.css"></style>
