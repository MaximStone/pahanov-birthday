<template>
  <div class="puzzle-container">
    <puzzle-board
      :autoResize="true"
      :showNumber="showNumber"
      :cols="3"
      :rows="3"
      :src="firstNotOpenedAchievement"
      :animation="animation"
      :width="width"
      :height="height"
      @init="onPuzzleBoardInit"
      @start="onPuzzleBoardStart"
      @change="onPuzzleBoardChange"
      @finish="onPuzzleBoardFinish"
    />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .puzzle-container {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
    width: 512px;
    height: 512px;
    margin: 0;
    padding: 0;
    z-index: 1;
    background-color: #DDD;
    min-width: 512px;
    min-height: 512px;
  }
}
</style>
<script setup lang="ts">
import PuzzleBoard from "@/components/PuzzleBoard.vue";
import { computed, ref } from "vue";
import { useAchievements } from "@/logic/opened";

const { puzzleOpenedAchieves, puzzleAchieves } = useAchievements()

const notOpenedAchievements = computed(() => {
  return puzzleAchieves.value.filter((item: string) => !puzzleOpenedAchieves.value.includes(item))
})

const firstNotOpenedAchievement = computed(() => notOpenedAchievements.value[0])

console.log('firstNotOpenedAchievement', firstNotOpenedAchievement.value)

const width = ref(512)
const height = ref(512)
const animation = true
const showNumber = ref<boolean>(false)

const onPuzzleBoardInit = () => {}
const onPuzzleBoardStart = () => {}
const onPuzzleBoardChange = () => {}
const onPuzzleBoardFinish = () => {
  console.log('finish!')
}
</script>
