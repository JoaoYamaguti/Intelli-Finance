<script setup lang="ts">
import HeaderMenu from "../components/HeaderMenu.vue";
</script>

<template>
  <HeaderMenu />
  <div class="container">
    <main>
      <section class="start">
        <h1>Um app inteligente que cuida das suas finanças pessoais</h1>
        <p>O futuro do seu dinheiro começa com inteligência.</p>
        <nav class="btns">
          <RouterLink to="/login">Continuar</RouterLink>
          <RouterLink to="/profile">Começar</RouterLink>
        </nav>
      </section>

      <section class="topics">
        <article>
          <div class="content">
            <h2>Estrategia para gastos e investimentos</h2>
            <p>Siga uma estrategia comprovada para atingir metas de viagens e investimentos e evitar o desespero
              financeiro.</p>
          </div>
          <picture>
            <img src="../assets/github-mark-white.svg" alt="image" loading="lazy" width="300" height="100">
          </picture>
        </article>
        <article>
          <div class="content">
            <h2>Calcule seu velocímetro</h2>
            <p>Uma ótima estratégia para controlar seus gastos no dia a dia é o metodo do "velocímetro", que consiste em
              limita o gasto diario em um certa quantia elvando em consideração suas despesas e investimentos.</p>
          </div>
          <picture>
            <img src="../assets/github-mark-white.svg" alt="image" loading="lazy" width="300" height="100">
          </picture>
        </article>
        <article>
          <div class="content">
            <h2>Defina Metas</h2>
            <p>Defina metas e receber uma estrategia personalizada para cada uma de suas meta.</p>
          </div>
          <picture>
            <img src="../assets/github-mark-white.svg" alt="image" loading="lazy" width="300" height="100">
          </picture>
        </article>
        <article>
          <div class="content">
            <h2>Dicas Financeiras</h2>
            <p>Acompanhe dicas na hora de fazer suas compras para diminuir o desperdicio e o endividamento.</p>
          </div>
          <picture>
            <img src="../assets/github-mark-white.svg" alt="image" loading="lazy" width="300" height="100">
          </picture>
        </article>
      </section>
    </main>
  </div>
  <footer>
    <div class="container">
      <p>
        Developed by
        <a href="https://github.com/JoaoYamaguti" target="_blank">
          <picture>
            <!-- <source srcset="../assets/github-mark-white.svg" media="(prefers-color-scheme: dark)" /> -->
            <img src="../assets/github-mark-white.svg" alt="JoaoYamaguti github profile" width="22" height="22"
              loading="lazy">
          </picture>
          João Yamaguti
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped src="../assets/home.css" />
