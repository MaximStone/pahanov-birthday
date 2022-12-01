import { computed, ref } from "vue";

import achieve0 from "@/achieves/0.jpg";
import achieve01 from "@/achieves/01.jpg";
import achieve02 from "@/achieves/02.jpg";
import achieve03 from "@/achieves/03.jpg";
import achieve04 from "@/achieves/04.jpg";
import achieve05 from "@/achieves/05.jpg";

import achieve1 from "@/achieves/1.jpg";
import achieve11 from "@/achieves/11.jpg";
import achieve12 from "@/achieves/12.jpg";
import achieve13 from "@/achieves/13.jpg";
import achieve14 from "@/achieves/14.jpg";
import achieve15 from "@/achieves/15.jpg";
import achieve16 from "@/achieves/16.jpg";

import achieve2 from "@/achieves/2.jpg";
import achieve21 from "@/achieves/21.jpg";
import achieve22 from "@/achieves/22.jpg";
import achieve23 from "@/achieves/23.jpg";
import achieve24 from "@/achieves/24.jpg";
import achieve25 from "@/achieves/25.jpg";
import achieve26 from "@/achieves/26.jpg";
import achieve27 from "@/achieves/27.jpg";
import achieve28 from "@/achieves/28.jpg";
import achieve29 from "@/achieves/29.jpg";
import achieve210 from "@/achieves/210.jpg";
import achieve211 from "@/achieves/211.jpg";
import achieve212 from "@/achieves/212.jpg";

import achieve3 from "@/achieves/3.jpg";
import achieve31 from "@/achieves/31.jpg";
import achieve32 from "@/achieves/32.jpg";
import achieve33 from "@/achieves/33.jpg";
import achieve34 from "@/achieves/34.jpg";
import achieve35 from "@/achieves/35.jpg";
import achieve36 from "@/achieves/36.jpg";
import achieve37 from "@/achieves/37.jpg";

export const useAchievements = () => {
  const allAchieves = ref([
    achieve0,
    achieve01,
    achieve02,
    achieve03,
    achieve04,
    achieve05,

    achieve1,
    achieve11,
    achieve12,
    achieve13,
    achieve14,
    achieve15,
    achieve16,

    achieve2,
    achieve21,
    achieve22,
    achieve23,
    achieve24,
    achieve25,
    achieve26,
    achieve27,
    achieve28,
    achieve29,
    achieve210,
    achieve211,
    achieve212,

    achieve3,
    achieve31,
    achieve32,
    achieve33,
    achieve34,
    achieve35,
    achieve36,
    achieve37,
  ]);
  const totalAchievements = computed(() => allAchieves.value.length);

  const memoriesMinimum = 10;

  const memoryAchieves = computed(() =>
    allAchieves.value.slice(
      0,
      Math.max(memoriesMinimum, Math.round((allAchieves.value.length - 1) / 2))
    )
  );
  const memoryOpenedAchieves = ref<string[]>([]);
  const puzzleAchieves = computed(() =>
    allAchieves.value.slice(
      memoryAchieves.value.length,
      allAchieves.value.length - 1
    )
  );
  const puzzleOpenedAchieves = ref<string[]>([]);

  const openedAchieves = computed<string[]>(() =>
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
