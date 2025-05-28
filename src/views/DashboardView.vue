<script setup lang="ts">
import SpeedometerCanva from '../components/SpeedometerCanva.vue';
import { inject, ref } from 'vue';
import HeaderMenu from '../components/HeaderMenu.vue';
import type { IProfile } from '../lib/interfaces/IProfile';

const profile = inject("profile") as IProfile

const totalExpense = profile.salary - totalFixedExpense()
const totalTarget = 0
const investimentValue = totalExpense * profile.investmentIntention
const totalDayToDay = totalExpense - investimentValue
const speedometer = totalDayToDay / 30
const hour = new Date().getHours()

const welcomeMessage = ref("")

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

function maxValueLabel() {
  return (speedometer + speedometer / 2)
}
</script>

<template>
  <HeaderMenu />
  <div class="container">
    <main>
      <h1>{{ welcomeMessage }}</h1>
      <section class="mainContent">
        <article class="resume">
          <h2>Resumo</h2>
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
                  <span><strong>R$</strong>{{ totalExpense.toFixed(2).replace(".", ",") }}</span>
                </h4>
              </li>
              <li>
                <ul>
                  <li>
                    <h4>
                      Investimentos:
                      <span><strong>R$</strong>{{ investimentValue.toFixed(2).replace(".", ",") }}</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Gastos Diários:
                      <span><strong>R$</strong>{{ totalDayToDay.toFixed(2).replace(".", ",") }}</span>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      Metas:
                      <span><strong>R$</strong>{{ totalTarget.toFixed(2).replace(".", ",") }} </span>
                    </h4>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <h2>Velocímetro</h2>
          <div class="speedometer">
            <span>R$ <strong>{{ speedometer.toFixed(2).split(".")[0] }}</strong>,{{
              speedometer.toFixed(2).split(".")[1] }}</span>
            <SpeedometerCanva :value="speedometer" :max-label="maxValueLabel()" />
            <p>
              Considerando o valor para os gatos diarios.
            </p>
          </div>
        </article>
      </section>
      <section>
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
            <h2>Dicas Gerais de Finanças Pessoais</h2>
            <p>
              Gaste menos do que você ganha. Parece simples, mas é o primeiro passo para a liberdade financeira.
            </p>
            <p>
              Tenha um orçamento mensal. Saber para onde seu dinheiro vai é essencial para controlar sua vida
              financeira.
            </p>
            <p>
              Anote todos os seus gastos — mesmo os pequenos. Eles fazem a diferença no fim do mês!
            </p>
          </div>
        </article>
        <article>
          <div class="content">
            <h3>Investimentos e Poupança</h3>
            <p>Pague-se primeiro: ao receber, já separe uma parte para você economizar.</p>

            <p>Seu dinheiro parado perde valor com o tempo. Considere investir, mesmo que seja pouco.</p>

            <p>Crie uma reserva de emergência com, no mínimo, 3 a 6 meses do seu custo de vida.</p>
          </div>
        </article>
        <article>
          <div class="content">
            <h3>Consumo Consciente</h3>
            <p>
              Antes de comprar, pergunte-se: eu realmente preciso disso agora?
            </p>
            <p>
              Evite compras por impulso. Espere 24h antes de finalizar.
            </p>
            <p>
              Compare preços e busque cupons — economizar é um hábito!
            </p>
          </div>
        </article>
        <article>
          <div class="content">
            <h3>Cartão de Crédito e Dívidas</h3>
            <p>
              Evite usar o limite do cartão como extensão do seu salário.
            </p>
            <p>
              Pague sempre o valor total da fatura, não apenas o mínimo!
            </p>
            <p>
              Se tiver dívidas, priorize as com juros mais altos.
            </p>
          </div>
        </article>
        <article>
          <div class="content">
            <h3>Organização e Planejamento</h3>
            <p>
              Estabeleça metas financeiras realistas e acompanhe seu progresso.
            </p>
            <p>
              Revise seus gastos toda semana. Pequenas mudanças fazem grandes diferenças.
            </p>
            <p>
              Automatize seus pagamentos para evitar multas e juros.
            </p>
          </div>
          <!-- <picture>
            <img src="../assets/github-mark-white.svg" alt="image" loading="lazy" width="300" height="100">
          </picture> -->
        </article>
      </section>
    </main>
  </div>
</template>

<style scoped src="../assets/dashboard.css" />
