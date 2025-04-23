<script setup lang="ts">
import { onMounted, ref } from 'vue';

const logged = ref(true)

const showMenu = ref(false)

function handleMenu() {
  showMenu.value = !showMenu.value
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    console.log(e)
    const target = e.target as HTMLElement
    const { className } = target
    const { offsetParent } = target

    if (offsetParent == null) return

    if (offsetParent.id != "burguerMenu" && className != "burguerMenu") {
      showMenu.value = false
    }
  })
}
)
</script>

<template>
  <header>
    <div class="content">
      <h1>
        <RouterLink to="/">Intelli Finance</RouterLink>
      </h1>
      <nav>
        <div v-if="logged">
          <div class="burguerMenu" @click="handleMenu">
            Menu

            <div v-if="showMenu" class="menu">
              <ul>
                <li>
                  <RouterLink to="/profile">
                    <v-icon name="md-spacedashboard" />
                    Profile
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/dashboard">
                    <v-icon name="fa-edit" />
                    Dashboard
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/login">
                    <v-icon name="md-logout-round" />
                    Logout
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <RouterLink to="/login" v-else>Login</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped src="../assets/headerMenu.css" />
