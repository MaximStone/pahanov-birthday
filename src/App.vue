<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useAchievements } from "@/logic/opened";

const { openedAchieves } = useAchievements();
</script>

<template>
  <div class="app-container">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/birthday.png"
        style="max-width: 250px"
      />

      <div class="wrapper">
        <HelloWorld msg="С днём рождения, Максон!" />

        <nav>
          <RouterLink
            to="/"
          >Главная</RouterLink
          >
          <RouterLink
            v-if="openedAchieves.length > 0"
            to="/congrats"
          >Награды</RouterLink
          >
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 2rem;
}

header {
  text-align: center;
  line-height: 1.5;
  margin-bottom: 50px;
  height: 100%;
  width: 100%;
  position: inherit;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1475px) {
  .app-container {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    height: 440px;
    width: 100%;
    top: 210px;
    position: sticky;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
