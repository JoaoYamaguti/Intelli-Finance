<script setup lang="ts">
import { inject, reactive } from "vue";
import HeaderMenu from "../components/HeaderMenu.vue";
import type { IExpense, IProfile, ITarget } from "../lib/interfaces/IProfile";

const profile = inject("profile") as IProfile

const target = reactive({}) as ITarget
function addNewTarget() {
  profile.targets.push(target)
}
function removeTarget(index: number) {
  profile.targets.splice(index, 1)
}


const expense = reactive({}) as IExpense
function addNewExpense() {
  profile.expenses.push(expense)
}
function removeExpense(index: number) {
  profile.expenses.splice(index, 1)
}

console.log(profile.name)
</script>

<template>
  <HeaderMenu />
  <div class="container">
    <main>
      <nav>
        <a href="#profile">Perfil</a>
        |
        <a href="#expenses">Despesas Fixas</a>
        |
        <a href="#targets">Metas</a>
      </nav>
      <form>
        <fieldset id="profile">
          <h2>Perfil</h2>
          <label for="name">
            Nome:
            <input v-model="profile.name" type="text" name="name" id="name" required>
          </label>
          <label for="salary">
            Salário:
            <input v-model="profile.salary" type="text" name="salary" id="salary" required>
          </label>
          <label for="investment">
            Qual a porcentagem da quantia restante você gostaria de investir:
            <select v-model="profile.investmentIntention" name="investment" id="investment">
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
            </select>
          </label>
        </fieldset>


        <fieldset id="expenses">
          <h2>Despesas Fixas</h2>
          <form id="newExpense" class="newExpense" @submit.prevent="addNewExpense">
            <label for="">
              <input v-model="expense.description" type="text" name="description" id="description"
                placeholder="Descrição">
            </label>
            <label for="">
              <input v-model="expense.valor" type="number" name="target" id="target" placeholder="R$ 300,00"
                step="0.01">
            </label>
            <button type="submit">
              <v-icon name="hi-plus" />
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Meta</th>
                <th>Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(expense, index) in profile.expenses" :key="index">
                <td data-title="Meta">{{ expense.description }}</td>
                <td data-title="Valor">R$ {{ expense.valor }}</td>
                <td>
                  <button type="button" @click="removeExpense(index)">
                    <v-icon name="la-trash-alt-solid" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
        <fieldset id="targets">
          <h2>Metas</h2>
          <form id="newTarget" class="newTarget" @submit.prevent="addNewTarget">
            <label for="">
              <input v-model="target.description" type="text" name="description" id="description"
                placeholder="Descrição">
            </label>
            <label for="">
              <input v-model="target.years" type="number" name="years" id="years" placeholder="Anos">
            </label>
            <label for="">
              <input v-model="target.valor" type="number" name="target" id="target" placeholder="R$ 10.000,00"
                step="0.01">
            </label>
            <button type="submit"><v-icon name="hi-plus"></v-icon></button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Meta</th>
                <th>Anos</th>
                <th>Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(target, index) in profile.targets" :key="index">
                <td data-title="Meta">{{ target.description }}</td>
                <td data-title="Anos">{{ target.years }}</td>
                <td data-title="Valor">R$ {{ target.valor }}</td>
                <td>
                  <button type="button" @click="removeTarget(index)">
                    <v-icon name="la-trash-alt-solid"></v-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<style scoped src="../assets/profile.css" />
