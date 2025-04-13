<script setup lang="ts">

</script>

<template>
  <div class="container">
    <main>
      <section class="start">
        <h1>Intelli Finance</h1>
        <p>O futuro do seu dinheiro começa com inteligência</p>
        <nav class="btns">
          <RouterLink to="/login">Continuar</RouterLink>
          <RouterLink to="/login">Começar</RouterLink>
        </nav>
      </section>

      <section class="topics">
        <article>
          <div class="content">
            <h2>Calcule seu velocímetro</h2>
            <p>Uma ótima estratégia para controlar seus gastos no dia a dia é o metodo do "velocímetro", que consiste em
              limita o gasto diario em um certa quantia elvando em consideração suas despesas e investimentos.</p>
          </div>
          <picture>
            <img src="../assets/github-mark-white.svg" alt="image">
          </picture>
        </article>
        <article>
          <div class="content">
            <h2>Defina Metas</h2>
            <p>Defina metas e receber uma estrategia personalizada para cada uma de suas meta.</p>
          </div>
          <picture>
            <img src="../assets/github-mark-white.svg" alt="image">
          </picture>
        </article>
      </section>
    </main>
  </div>
  <footer>
    <div class="container">
      <p>
        Developed by
        <a href="https://github.com/JoaoYamaguti">
          <picture>
            <source srcset="../assets/github-mark-white.svg" media="(prefers-color-scheme: dark)" />
            <img src="../assets/github-mark.svg" alt="JoaoYamaguti github profile" width="22" height="22">
          </picture>
          João Yamaguti
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped src="../assets/home.css" />
