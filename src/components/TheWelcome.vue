<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconMemory from "@/components/icons/IconMemory.vue";
import IconPuzzle from "@/components/icons/IconPuzzle.vue";
import { useAchievements } from "@/logic/opened";
import router from "@/router";
const { memoryAchieves, puzzleAchieves, memoryOpenedAchieves, puzzleOpenedAchieves, totalAchievements, openedAchieves } = useAchievements()

const memoriesClickHandler = () => {

}

const puzzleClickHandler = () => {
  router.push({ name: 'puzzle' })
}
</script>

<template>

  <WelcomeItem :total="memoryAchieves.length" :achieved="memoryOpenedAchieves.length" @click="memoriesClickHandler">
    <template #icon>
      <IconMemory />
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

  <WelcomeItem :total="totalAchievements" :achieved="openedAchieves.length" @click="puzzleClickHandler">
    <template #icon>
      <IconPuzzle />
    </template>
    <template #heading>Галерея наград</template>

    Скачай любую открытую награду
  </WelcomeItem>
</template>
