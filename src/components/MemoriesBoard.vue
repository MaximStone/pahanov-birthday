<template>
  <div class="scene">
    <MCard
      v-for="(item, index) in cardDataArray"
      :key="`card_${item.cardId}`"
      :height="CARD_HEIGHT"
      :width="CARD_WIDTH"
      :cardId="item.cardId"
      :style="{
        top: `${(CARD_HEIGHT + GAP) * ((index + 1) % 3) + 50}px`,
        left: `${(CARD_WIDTH + GAP) * Math.ceil(index / 3)}px`,
      }"
      :front-image="item.model.small"
      :back-image="frameSvg"
      :open-close-animation-duration="500"
    />
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent, onMounted } from "vue";
import type { AchieveModel } from "@/logic/types";
import MCard from "@/components/MCard.vue";
import { achieveMap } from "@/logic/opened";
import { getRandomNumbers, shuffleArray } from "@/logic/memories";

import frameSvg from "@/assets/frame.svg";

const CARD_WIDTH = 100;
const CARD_HEIGHT = 100;
const GAP = 10;
let cardIds: number[] = [];

export default defineComponent({
  name: "MemoriesBoard",
  components: {
    MCard,
  },
  props: {
    columns: Number as PropType<number>,
    rows: Number as PropType<number>,
    achieve: Object as PropType<AchieveModel>,
  },
  setup(props) {
    const allAchievements = Array.from(achieveMap.values());
    shuffleArray(allAchievements);
    const itemLength = (props.columns || 1) * (props.rows || 1);
    const selectedAchievementArray = allAchievements.slice(0, Math.round(itemLength / 2));
    let randomNums = getRandomNumbers(itemLength, 500)

    const cardDataArray = computed(() => {
      shuffleArray(randomNums);
      const array = selectedAchievementArray.map((item: AchieveModel, index: number) => {
        return {
          cardId: randomNums[index],
          model: item
        }
      })

      const targetArray = array.concat(array)
      shuffleArray(targetArray)

      return targetArray
    })

    onMounted(() => {
      randomNums = getRandomNumbers(itemLength, 500)
    });

    return {
      CARD_WIDTH,
      CARD_HEIGHT,
      GAP,
      cardDataArray,
      frameSvg
    };
  },
});
</script>

<style scoped>
.scene {
  perspective: 1000px;
  position: absolute;
  transform-style: preserve-3d;

  width: 50em;
  height: 50em;
  top: 50%;
  left: 50%;
  margin: -25em 0 0 -25em;
  background-color: #809a80;
}
</style>
