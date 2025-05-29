<script setup lang="ts"> 
const notifications = ref([])

function addNewNotification(status: string, message:string) {
    notifications.value.push({...status, ...message})
    await nextTick()
}

function RemoveNotification(status: string, message:string) {
    notifications.value.push({...status, ...message})
}


</script>

<template> 
    <slot></slot>
    <div class="notifications">
        <ul v-for="(notification, index) in notifications">
            <li>
                <div class="notification">
                    <div class="statsBar"></div>
                    <p> </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style src="../assets/notification.css"> </style>