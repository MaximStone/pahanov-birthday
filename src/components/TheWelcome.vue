<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconMemory from "@/components/icons/IconMemory.vue";
import IconPuzzle from "@/components/icons/IconPuzzle.vue";
import { useAchievements } from "@/logic/opened";
const { memoryAchieves, puzzleAchieves, memoryOpenedAchieves, puzzleOpenedAchieves } = useAchievements()
</script>

<template>

  <WelcomeItem :total="memoryAchieves.length" :achieved="memoryOpenedAchieves.length">
    <template #icon>
      <IconMemory />
    </template>
    <template #heading>Memories game</template>

    Open all cards using identical pairs
  </WelcomeItem>

  <WelcomeItem :total="puzzleAchieves.length" :achieved="puzzleOpenedAchieves.length">
    <template #icon>
      <IconPuzzle />
    </template>
    <template #heading>Puzzle game</template>

    Solve the puzzle to open the achievement
  </WelcomeItem>
</template>
