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

const achieveMap = new Map<string, { small: string, big: string }>(
  [
    achieve0
    fachieve0
    achieve01
    fachieve01
    achieve02
    fachieve02
    achieve03
    fachieve03
    achieve04
    fachieve04
    achieve05
    fachieve05
    achieve06
    fachieve06
    achieve1 f
    fachieve1
    achieve11
    fachieve11
    achieve12
    fachieve12
    achieve13
    fachieve13
    achieve14
    fachieve14
    achieve15
    fachieve15
    achieve16
    fachieve16
    achieve2 f
    fachieve2
    achieve21
    fachieve21
    achieve22
    fachieve22
    achieve23
    fachieve23
    achieve24
    fachieve24
    achieve25
    fachieve25
    achieve26
    fachieve26
    achieve27
    fachieve27
    achieve28
    fachieve28
    achieve29
    fachieve29
    achieve210
    fachieve21
    achieve211
    fachieve21
    achieve212
    fachieve21
    achieve3 f
    fachieve3
    achieve31
    fachieve31
    achieve32
    fachieve32
    achieve33
    fachieve33
    achieve34
    fachieve34
    achieve35
    fachieve35
    achieve36
    fachieve36
    achieve37
    fachieve37
    achieve38
    fachieve38
    achieve39
    fachieve39
  ]
)

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

