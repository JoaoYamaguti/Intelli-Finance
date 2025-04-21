<script setup lang="ts">
import { inject, ref } from 'vue';
import HeaderMenu from '../components/HeaderMenu.vue';
import type { IProfile } from '../lib/interfaces/IProfile';

const profile = inject("profile") as IProfile
const welcomeMessage = ref("")

const hour = new Date().getHours()

if (hour >= 6 && hour < 12) {
  welcomeMessage.value = `Olá, ${profile.name.split(" ")[0]}. Bom dia!`
} else if (hour >= 12 && hour < 18) {
  welcomeMessage.value = `Olá, ${profile.name.split(" ")[0]}. Boa tarde!`
} else {
  welcomeMessage.value = `Olá, ${profile.name.split(" ")[0]}. Boa noite!`
}

function totalFixedExpense(): number {
  let total = 0
  profile.fixedExpenses.forEach((t) => (total = total + t.valor))
  return total
}
function totalExpense(): number {
  return (profile.salary - totalFixedExpense())
}
function totalTarget() {
  return 0
}

function investimentValue(): number {
  return (totalExpense() * profile.investmentIntention)
}

function totalDayToDay(): number {
  return (totalExpense() - investimentValue())
}

function velocimeter(): number {
  return (totalDayToDay() / 30)
}
</script>

<template>
  <HeaderMenu />
  <div class="container">
    <main>
      <h1>{{ welcomeMessage }}</h1>
      <section>
        <h2>Resumo</h2>
        <article class="resume">
          <div class="values">
            <h3>Salário Líquido:
              <span><strong>R$</strong>{{ profile.salary.toFixed(2).replace(".", ",") }}</span>
            </h3>
            <ul>
              <li>
                <h4>
                  Despesas Fixas:
                  <span><strong>R$</strong>{{ totalFixedExpense().toFixed(2).replace(".", ",") }}</span>
                </h4>
              </li>
              <li>
                <h4>
                  Despesas Variaveis:
                  <span><strong>R$</strong>{{ totalExpense().toFixed(2).replace(".", ",") }}</span>
                </h4>
              </li>
              <li>
                <ul>
                  <li>
                    <h4>
                      Investimentos:
                      <span><strong>R$</strong>{{ investimentValue().toFixed(2).replace(".", ",") }}</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Gastos diários:
                      <span><strong>R$</strong>{{ totalDayToDay().toFixed(2).replace(".", ",") }}</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Metas:
                      <span><strong>R$</strong>{{ totalTarget().toFixed(2).replace(".", ",") }} </span>
                    </h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="velocimeter">
            <p>
              Considerando o valor: R${{ totalDayToDay().toFixed(2).replace(".", ",") }} para os gatos diarios:
              <br>
              Seu velocímetro é
            </p>
            <span>R$ <strong>{{ velocimeter().toFixed(2).split(".")[0] }}</strong>,{{
              velocimeter().toString().split(".")[1] }}</span>
          </div>
        </article>
        <article class="targets"></article>
        <article class="details"></article>
      </section>
      <section class="editProfile">
        <p>Você gostaria de editar o seu perfil</p>
        <RouterLink to="/profile">Editar Perfil</RouterLink>
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
</template>

<style scoped src="../assets/dashboard.css" />
