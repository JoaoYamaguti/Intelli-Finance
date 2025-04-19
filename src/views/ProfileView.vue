<script setup lang="ts">
import { inject } from "vue";
import HeaderMenu from "../components/HeaderMenu.vue";

const profile = inject("profile")
</script>

<template>
  <HeaderMenu />
  <div class="container">
    <main>
      <nav>
        <a href="#profile">Perfil</a>

        <a href="#targets">Metas</a>

        <a href="#expenses">Despesas Fixas</a>
      </nav>
      <form>
        <fieldset id="profile">
          <h2>Perfil</h2>
          <label for="name">
            Nome:
            <input type="text" name="name" id="name" required>
          </label>
          <label for="salary">
            Salário:
            <input type="text" name="salary" id="salary" required>
          </label>
          <label for="investment">
            Qual a porcentagem da quantia restante você gostaria de investir:
            <select name="" id="">
              <option value="20" selected>20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
            </select>
          </label>
        </fieldset>
        <fieldset id="targets">
          <h2>Metas</h2>

          <div class="newTarget">
            <input type="text" name="description" id="description" placeholder="Descrição">
            <input type="number" name="target" id="target" placeholder="R$ 10.000,00" step="0.01">
            <button type="button">+</button>
          </div>
          <ul>
            <li>
              <h3>Viagem para a Disney</h3>
              <span>R$ 30.000,00</span>
            </li>
          </ul>
          <p class="limiter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nobis voluptates
            necessitatibus pariatur blanditiis deleniti perspiciatis, tempore ipsum. Ex similique fugiat inventore natus
            impedit ea eaque beatae reiciendis neque iusto.</p>
        </fieldset>
        <fieldset id="expenses">
          <h2>Despesas Fixas</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore culpa ea inventore
          harum delectus error tempore fugit aspernatur saepe, quaerat ipsam facere at enim ducimus quisquam nostrum
          laboriosam! Saepe, natus?
        </fieldset>
      </form>
    </main>
  </div>
</template>

<style scoped src="../assets/profile.css" />
