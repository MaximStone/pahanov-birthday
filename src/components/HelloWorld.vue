<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
    <h3>
      Играй в игры и получай награды<sup>*</sup>!
    </h3>
    <br />
    <span><sup>*</sup>Каждая сыгранная игра открывает по 1 награде. Награда это изображение, которое ты можешь скачать.</span>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  text-align: center;
}
@media (min-width: 1475px) {
  .greetings {
    text-align: left
  }
}

</style>
