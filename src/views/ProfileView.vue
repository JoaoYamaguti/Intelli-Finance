<script setup lang="ts">
import { inject, reactive, onMounted, onBeforeUnmount } from "vue";
import HeaderMenu from "../components/HeaderMenu.vue";
import type { IFixedExpense, IProfile, ITarget } from "../lib/interfaces/IProfile";
import { onBeforeRouteLeave } from "vue-router";

const profile = inject("profile") as IProfile
const notification = inject<(status:string, message:string) => Promise<void>>("notification")
const editedProfile = reactive({ ...profile })

const target = reactive({}) as ITarget
function addNewTarget() {
  editedProfile.targets.push({ ...target })
}
function removeTarget(index: number) {
  editedProfile.targets.splice(index, 1)
}

const fixedExpense = reactive({}) as IFixedExpense
function addNewExpense() {
  editedProfile.fixedExpenses.push({ ...fixedExpense })
}
function removeExpense(index: number) {
  editedProfile.fixedExpenses.splice(index, 1)
}

function profileEdited() {
  return JSON.stringify(profile) != JSON.stringify(editedProfile)
}

function saveEditedProfile() {
  if (!profileEdited()) {
    if (notification) notification("error", "Não há edições")
    return
  }

  profile.name = editedProfile.name
  profile.salary = editedProfile.salary
  profile.investmentIntention = editedProfile.investmentIntention
  profile.fixedExpenses = editedProfile.fixedExpenses
  profile.targets = editedProfile.targets

  if(notification) notification("ok", "Edições Salvas")
}

const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  if (profileEdited()) {
    event.preventDefault()
  }
}

onMounted(() => {
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleBeforeUnload)
})

onBeforeRouteLeave(() => {
  if (profileEdited()) {
    const answer = confirm("Você realmente quer sair sem salvar?")
    return answer
  }
})
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
            <input v-model="editedProfile.name" type="text" name="name" id="name" required>
          </label>
          <label for="salary">
            Salário:
            <input v-model="editedProfile.salary" type="number" name="salary" id="salary" required>
          </label>
          <label for="investment">
            Investimento:
            <select v-model="editedProfile.investmentIntention" name="investment" id="investment">
              <option value="0.2">20%</option>
              <option value="0.3">30%</option>
              <option value="0.4">40%</option>
            </select>
          </label>
        </fieldset>


        <fieldset id="expenses">
          <h2>Despesas Fixas</h2>
          <form id="newExpense" class="newExpense" @submit.prevent="addNewExpense">
            <label for="">
              <input v-model="fixedExpense.description" type="text" name="description" id="description"
                placeholder="Descrição">
            </label>
            <label for="">
              <input v-model="fixedExpense.valor" type="number" name="target" id="target" placeholder="R$ 300,00"
                step="0.01">
            </label>
            <button type="submit">
              <v-icon name="hi-plus" />
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Despesa Fixa</th>
                <th>Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(expense, index) in editedProfile.fixedExpenses" :key="index">
                <td data-title="Despesa Fixa">{{ expense.description }}</td>
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
              <tr v-for="(target, index) in editedProfile.targets" :key="index">
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
  <footer>
    <button type="button" @click="saveEditedProfile">Salvar Perfil</button>
  </footer>
</template>

<style scoped src="../assets/profile.css" />
