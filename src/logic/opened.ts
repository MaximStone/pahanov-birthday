import { computed, ref } from "vue";

import achieve0 from "@/achieves/0.jpg";
import fachieve0 from "@/achieves/full/0.jpg";

import achieve01 from "@/achieves/01.jpg";
import fachieve01 from "@/achieves/full/01.jpg";

import achieve02 from "@/achieves/02.jpg";
import fachieve02 from "@/achieves/full/02.jpg";

import achieve03 from "@/achieves/03.jpg";
import fachieve03 from "@/achieves/full/03.jpg";

import achieve04 from "@/achieves/04.jpg";
import fachieve04 from "@/achieves/full/04.jpg";

import achieve05 from "@/achieves/05.jpg";
import fachieve05 from "@/achieves/full/05.jpg";

import achieve06 from "@/achieves/06.jpg";
import fachieve06 from "@/achieves/full/06.jpg";

import achieve1 from "@/achieves/1.jpg";
import fachieve1 from "@/achieves/full/1.jpg";

import achieve11 from "@/achieves/11.jpg";
import fachieve11 from "@/achieves/full/11.jpg";

import achieve12 from "@/achieves/12.jpg";
import fachieve12 from "@/achieves/full/12.jpg";

import achieve13 from "@/achieves/13.jpg";
import fachieve13 from "@/achieves/full/13.jpg";

import achieve14 from "@/achieves/14.jpg";
import fachieve14 from "@/achieves/full/14.jpg";

import achieve15 from "@/achieves/15.jpg";
import fachieve15 from "@/achieves/full/15.jpg";

import achieve16 from "@/achieves/16.jpg";
import fachieve16 from "@/achieves/full/16.jpg";

import achieve2 from "@/achieves/2.jpg";
import fachieve2 from "@/achieves/full/2.jpg";

import achieve21 from "@/achieves/21.jpg";
import fachieve21 from "@/achieves/full/21.jpg";

import achieve22 from "@/achieves/22.jpg";
import fachieve22 from "@/achieves/full/22.jpg";

import achieve23 from "@/achieves/23.jpg";
import fachieve23 from "@/achieves/full/23.jpg";

import achieve24 from "@/achieves/24.jpg";
import fachieve24 from "@/achieves/full/24.jpg";

import achieve25 from "@/achieves/25.jpg";
import fachieve25 from "@/achieves/full/25.jpg";

import achieve26 from "@/achieves/26.jpg";
import fachieve26 from "@/achieves/full/26.jpg";

import achieve27 from "@/achieves/27.jpg";
import fachieve27 from "@/achieves/full/27.jpg";

import achieve28 from "@/achieves/28.jpg";
import fachieve28 from "@/achieves/full/28.jpg";

import achieve29 from "@/achieves/29.jpg";
import fachieve29 from "@/achieves/full/29.jpg";

import achieve210 from "@/achieves/210.jpg";
import fachieve210 from "@/achieves/full/210.jpg";

import achieve211 from "@/achieves/211.jpg";
import fachieve211 from "@/achieves/full/211.jpg";

import achieve212 from "@/achieves/212.jpg";
import fachieve212 from "@/achieves/full/212.jpg";

import achieve3 from "@/achieves/3.jpg";
import fachieve3 from "@/achieves/full/3.jpg";

import achieve31 from "@/achieves/31.jpg";
import fachieve31 from "@/achieves/full/31.jpg";

import achieve32 from "@/achieves/32.jpg";
import fachieve32 from "@/achieves/full/32.jpg";

import achieve33 from "@/achieves/33.jpg";
import fachieve33 from "@/achieves/full/33.jpg";

import achieve34 from "@/achieves/34.jpg";
import fachieve34 from "@/achieves/full/34.jpg";

import achieve35 from "@/achieves/35.jpg";
import fachieve35 from "@/achieves/full/35.jpg";

import achieve36 from "@/achieves/36.jpg";
import fachieve36 from "@/achieves/full/36.jpg";

import achieve37 from "@/achieves/37.jpg";
import fachieve37 from "@/achieves/full/37.jpg";

import achieve38 from "@/achieves/38.jpg";
import fachieve38 from "@/achieves/full/38.jpg";

import achieve39 from "@/achieves/39.jpg";
import fachieve39 from "@/achieves/full/39.jpg";

import achieve345 from "@/achieves/345.jpg";
import fachieve345 from "@/achieves/full/345.jpg";

import achieve456 from "@/achieves/456.jpg";
import fachieve456 from "@/achieves/full/456.jpg";

import achieve654 from "@/achieves/654.jpg";
import fachieve654 from "@/achieves/full/654.jpg";

import achieve6454 from "@/achieves/6454.jpg";
import fachieve6454 from "@/achieves/full/6454.jpg";

import achieve34234 from "@/achieves/34234.jpg";
import fachieve34234 from "@/achieves/full/34234.jpg";

import achieve987624 from "@/achieves/987624.jpg";
import fachieve987624 from "@/achieves/full/987624.jpg";
import { useStorage } from "@vueuse/core";

export const state = useStorage(
  "pahanov-bd",
  { memories: [], puzzle: [] },
  localStorage,
  { mergeDefaults: true }
);

export type AchieveModel = { name: string; small: string; big: string };

export const achieveMap = new Map<string, AchieveModel>([
  ["achieve0", { name: "achieve0", small: achieve0, big: fachieve0 }],
  ["achieve01", { name: "achieve01", small: achieve01, big: fachieve01 }],
  ["achieve02", { name: "achieve02", small: achieve02, big: fachieve02 }],
  ["achieve03", { name: "achieve03", small: achieve03, big: fachieve03 }],
  ["achieve04", { name: "achieve04", small: achieve04, big: fachieve04 }],
  ["achieve05", { name: "achieve05", small: achieve05, big: fachieve05 }],
  ["achieve06", { name: "achieve06", small: achieve06, big: fachieve06 }],
  ["achieve1", { name: "achieve1", small: achieve1, big: fachieve1 }],
  ["achieve11", { name: "achieve11", small: achieve11, big: fachieve11 }],
  ["achieve12", { name: "achieve12", small: achieve12, big: fachieve12 }],
  ["achieve13", { name: "achieve13", small: achieve13, big: fachieve13 }],
  ["achieve14", { name: "achieve14", small: achieve14, big: fachieve14 }],
  ["achieve15", { name: "achieve15", small: achieve15, big: fachieve15 }],
  ["achieve16", { name: "achieve16", small: achieve16, big: fachieve16 }],
  ["achieve2", { name: "achieve2", small: achieve2, big: fachieve2 }],
  ["achieve21", { name: "achieve21", small: achieve21, big: fachieve21 }],
  ["achieve22", { name: "achieve22", small: achieve22, big: fachieve22 }],
  ["achieve23", { name: "achieve23", small: achieve23, big: fachieve23 }],
  ["achieve24", { name: "achieve24", small: achieve24, big: fachieve24 }],
  ["achieve25", { name: "achieve25", small: achieve25, big: fachieve25 }],
  ["achieve26", { name: "achieve26", small: achieve26, big: fachieve26 }],
  ["achieve27", { name: "achieve27", small: achieve27, big: fachieve27 }],
  ["achieve28", { name: "achieve28", small: achieve28, big: fachieve28 }],
  ["achieve29", { name: "achieve29", small: achieve29, big: fachieve29 }],
  ["achieve210", { name: "achieve210", small: achieve210, big: fachieve210 }],
  ["achieve211", { name: "achieve211", small: achieve211, big: fachieve211 }],
  ["achieve212", { name: "achieve212", small: achieve212, big: fachieve212 }],
  ["achieve3", { name: "achieve3", small: achieve3, big: fachieve3 }],
  ["achieve31", { name: "achieve31", small: achieve31, big: fachieve31 }],
  ["achieve32", { name: "achieve32", small: achieve32, big: fachieve32 }],
  ["achieve33", { name: "achieve33", small: achieve33, big: fachieve33 }],
  ["achieve34", { name: "achieve34", small: achieve34, big: fachieve34 }],
  ["achieve35", { name: "achieve35", small: achieve35, big: fachieve35 }],
  ["achieve36", { name: "achieve36", small: achieve36, big: fachieve36 }],
  ["achieve37", { name: "achieve37", small: achieve37, big: fachieve37 }],
  ["achieve38", { name: "achieve38", small: achieve38, big: fachieve38 }],
  ["achieve39", { name: "achieve39", small: achieve39, big: fachieve39 }],
  ["achieve345", { name: "achieve345", small: achieve345, big: fachieve345 }],
  ["achieve456", { name: "achieve456", small: achieve456, big: fachieve456 }],
  ["achieve654", { name: "achieve654", small: achieve654, big: fachieve654 }],
  [
    "achieve6454",
    { name: "achieve6454", small: achieve6454, big: fachieve6454 },
  ],
  [
    "achieve34234",
    { name: "achieve34234", small: achieve34234, big: fachieve34234 },
  ],
  [
    "achieve987624",
    { name: "achieve987624", small: achieve987624, big: fachieve987624 },
  ],
]);

export const useAchievements = () => {
  const totalAchievements = computed(() => achieveMap.size);

  const memoriesMinimum = 10;

  const memoryAchieves = computed(() =>
    Array.from(achieveMap.values()).slice(
      0,
      Math.max(memoriesMinimum, Math.round((achieveMap.size - 1) / 2))
    )
  );
  const memoryOpenedAchieves = ref<AchieveModel[]>([]);
  const puzzleAchieves = computed(() =>
    Array.from(achieveMap.values()).slice(
      memoryAchieves.value.length,
      achieveMap.size - 1
    )
  );
  const puzzleOpenedAchieves = ref<AchieveModel[]>([]);

  const openedAchieves = computed<AchieveModel[]>(() =>
    memoryOpenedAchieves.value.concat(puzzleOpenedAchieves.value)
  );

  return {
    openedAchieves,
    totalAchievements,
    memoryAchieves,
    memoryOpenedAchieves,
    puzzleAchieves,
    puzzleOpenedAchieves,
  };
};
