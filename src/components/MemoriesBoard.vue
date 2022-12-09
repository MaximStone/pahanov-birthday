<template>
  <div class="scene">
    <div class="scene-grid">
      <MCard
        v-for="(item, index) in cardDataArray"
        :key="`card_${item.cardId}_${index}`"
        :id="`card_${item.cardId}_${index}`"
        :style="{ opacity: item.hidden ? 0 : 1 }"
        :height="cardHeight"
        :width="cardWidth"
        :cardId="item.cardId"
        :reactiveState="item"
        :front-image="item.model.small"
        :back-image="frameSvg"
        :open-close-animation-duration="500"
        :enabled="enabledInteractivity && item !== firstOpenedCard"
        @open="openAfterCardHandler(item)"
        @open:before="openBeforeCardHandler(item)"
        @close="closeCardHandler"
      />
    </div>

    <svg
      v-if="!!achieve"
      style="
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      "
    >
      <image
        :xlink:href="achieve.small"
        width="100%"
        height="100%"
        x="0"
        y="0"
      ></image>
    </svg>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import type { AchieveModel } from "@/logic/types";
import MCard from "@/components/MCard.vue";
import { achieveMap } from "@/logic/opened";
import { getRandomNumbers, shuffleArray } from "@/logic/memories";
import type { MemoryCard } from "@/logic/memories";

import frameSvg from "@/assets/frame.svg";

const GAP = 4;

export default defineComponent({
  name: "MemoriesBoard",
  components: {
    MCard,
  },
  props: {
    columns: Number as PropType<number>,
    rows: Number as PropType<number>,
    cardWidth: Number as PropType<number>,
    cardHeight: Number as PropType<number>,
    achieve: Object as PropType<AchieveModel>,
  },
  emits: ["victory"],
  setup(props, { emit }) {
    const allAchievements = Array.from(achieveMap.values());
    shuffleArray(allAchievements);
    const itemLength = (props.columns || 1) * (props.rows || 1);
    const selectedAchievementArray = allAchievements.slice(
      0,
      Math.floor(itemLength / 2)
    );
    let randomNums = getRandomNumbers(itemLength, 500);
    shuffleArray(randomNums);

    const enabledInteractivity = ref<boolean>(true);
    const firstOpenedCard = ref<MemoryCard | undefined>();
    const secondOpenedCard = ref<MemoryCard | undefined>();

    let timer = 0;

    const cardDataArray = computed(() => {
      const array1 = selectedAchievementArray.map(
        (item: AchieveModel, index: number) => {
          return reactive({
            cardId: randomNums[index],
            model: item,
            hidden: false,
            matched: false,
            opened: false,
          }) as MemoryCard;
        }
      );
      const array2 = selectedAchievementArray.map(
        (item: AchieveModel, index: number) => {
          return reactive({
            cardId: randomNums[index],
            model: item,
            hidden: false,
            matched: false,
            opened: false,
          }) as MemoryCard;
        }
      );

      const targetArray = array1.concat(array2);
      shuffleArray(targetArray);

      return targetArray as MemoryCard[];
    });

    onMounted(() => {
      randomNums = getRandomNumbers(itemLength, 500);
      shuffleArray(randomNums);
    });

    const closeCardHandler = (item: MemoryCard) => {
      if (firstOpenedCard.value === item) {
        firstOpenedCard.value = undefined;
      }

      if (secondOpenedCard.value === item) {
        secondOpenedCard.value = undefined;
      }

      enabledInteractivity.value = !(
        firstOpenedCard.value && secondOpenedCard.value
      );
    };

    const openBeforeCardHandler = (card: MemoryCard) => {
      if (typeof firstOpenedCard.value === "undefined") {
        firstOpenedCard.value = cardDataArray.value.find(
          (item: MemoryCard) => item === card
        );
      } else {
        secondOpenedCard.value =
          cardDataArray.value.find(
            (item: MemoryCard) =>
              item === card && item !== firstOpenedCard.value
          ) || undefined;

        enabledInteractivity.value = false;
      }

      if (
        firstOpenedCard.value &&
        secondOpenedCard.value &&
        firstOpenedCard.value.cardId === secondOpenedCard.value.cardId
      ) {
        firstOpenedCard.value.matched = true;
        secondOpenedCard.value.matched = true;
      }
    };

    const openAfterCardHandler = (card: MemoryCard) => {
      if (firstOpenedCard.value === card) return;

      if (timer) clearTimeout(timer);

      if (!(firstOpenedCard.value && secondOpenedCard.value)) return;

      timer = setTimeout(() => {
        if (!(firstOpenedCard.value && secondOpenedCard.value)) return;

        if (firstOpenedCard.value.cardId === secondOpenedCard.value.cardId) {
          firstOpenedCard.value.hidden = true;
          secondOpenedCard.value.hidden = true;
          setTimeout(() => {
            if (cardDataArray.value.every((card: MemoryCard) => card.matched)) {
              emit("victory");
            } else {
              enabledInteractivity.value = true;
            }

            firstOpenedCard.value = undefined;
            secondOpenedCard.value = undefined;
          }, 500);
        }

        if (firstOpenedCard.value.cardId !== secondOpenedCard.value.cardId) {
          firstOpenedCard.value.opened = false;
          secondOpenedCard.value.opened = false;
        }
      }, 500);
    };

    return {
      openBeforeCardHandler,
      openAfterCardHandler,
      closeCardHandler,
      firstOpenedCard,
      enabledInteractivity,
      GAP,
      cardDataArray,
      frameSvg,
      bindGridColsWidth: computed(
        () => `repeat(${props.columns}, ${props.cardWidth}px)`
      ),
      bindGridRowsHeight: computed(
        () => `repeat(${props.rows}, ${props.cardHeight}px)`
      ),
    };
  },
});
</script>

<style scoped>
.scene {
  width: 256px;
  height: 256px;
}

.scene-grid {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;

  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: v-bind(bindGridColsWidth);
  grid-template-rows: v-bind(bindGridRowsHeight);
}

@media (min-width: 1475px) {
  .scene {
    width: 512px;
    height: 512px;
  }

  .scene-grid {
    grid-gap: 3px;
  }
}
</style>
