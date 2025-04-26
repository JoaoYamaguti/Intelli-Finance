<script setup lang="ts">
import { ref } from 'vue';

const logged = ref(true)

const showMenu = ref(false)

</script>

<template>
  <header>
    <div class="content">
      <h1>
        <RouterLink to="/">Intelli Finance</RouterLink>
      </h1>
      <nav>
        <div v-if="logged">
          <div class="burguerMenu">
            <label>
              <input v-model="showMenu" :true-value="true" :false-value="false" type="checkbox">
              <div></div>
              <div></div>
              <div></div>
            </label>
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
