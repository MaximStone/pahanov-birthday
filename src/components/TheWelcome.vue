<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconMemory from "@/components/icons/IconMemory.vue";
import IconPuzzle from "@/components/icons/IconPuzzle.vue";
import { useAchievements } from "@/logic/opened";
import router from "@/router";
const { memoryAchieves, puzzleAchieves, memoryOpenedAchieves, puzzleOpenedAchieves, totalAchievements, openedAchieves } = useAchievements()

const memoriesClickHandler = () => {
  router.push({ name: 'memories' })
}

const puzzleClickHandler = () => {
  router.push({ name: 'puzzle' })
}

const finishPageClickHandler = () => {
  router.push({ name: 'finish' })
}
</script>

<template>

  <WelcomeItem :total="memoryAchieves.length" :achieved="memoryOpenedAchieves.length" @click="memoriesClickHandler">
    <template #icon>
      <span style="font-size: 25px; font-weight: bold">M</span>
    </template>
    <template #heading>Меморис</template>

    Открой награду найдя все одинаковые пары
  </WelcomeItem>

  <WelcomeItem :total="puzzleAchieves.length" :achieved="puzzleOpenedAchieves.length" @click="puzzleClickHandler">
    <template #icon>
      <IconPuzzle />
    </template>
    <template #heading>Пазл</template>

    Собери слайдер пазл
  </WelcomeItem>

  <WelcomeItem :total="totalAchievements" :achieved="openedAchieves.length" @click="finishPageClickHandler">
    <template #icon>
      <IconMemory />
    </template>
    <template #heading>Галерея наград</template>

    Скачай любую открытую награду
  </WelcomeItem>
</template>
