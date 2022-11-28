import { computed, ref } from "vue";

import achieve1 from "@/achieves/1.png";
import achieve2 from "@/achieves/2.png";
import achieve3 from "@/achieves/3.png";
import achieve4 from "@/achieves/4.png";
import achieve5 from "@/achieves/5.png";

export const useAchievements = () => {
  const allAchieves = ref([achieve1, achieve2, achieve3, achieve4, achieve5]);
  const totalAchievements = computed(() => allAchieves.value.length);

  const memoriesMinimum = 10;

  const memoryAchieves = computed(() =>
    allAchieves.value.slice(
      0,
      Math.max(memoriesMinimum, Math.round((allAchieves.value.length - 1) / 2))
    )
  );
  const memoryOpenedAchieves = ref([]);
  const puzzleAchieves = computed(() =>
    allAchieves.value.slice(
      memoryAchieves.value.length,
      allAchieves.value.length - 1
    )
  );
  const puzzleOpenedAchieves = ref([]);

  const openedAchieves = computed(() =>
    memoryOpenedAchieves.value.concat(puzzleOpenedAchieves.value)
  );

  return {
    allAchieves,
    openedAchieves,
    totalAchievements,
    memoryAchieves,
    memoryOpenedAchieves,
    puzzleAchieves,
    puzzleOpenedAchieves,
  };
};
