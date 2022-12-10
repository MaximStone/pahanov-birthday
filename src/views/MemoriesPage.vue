<template>
  <div class="memories-game-container">
    <Particles
      v-if="showParticles"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesConfigJson"
    />

    <div id="memoryContainer" class="memory-container">
      <MemoriesBoard
        :key="`name_${currentAchievement?.name || '1'}`"
        :rows="5"
        :columns="5"
        :achieve="currentAchievement"
        :card-width="isMobileScreen ? 50 : 100"
        :card-height="isMobileScreen ? 50 : 100"
        @victory="victoryHandler"
      />
    </div>

    <div v-show="showButtons">
      <NConfigProvider
        :theme="theme"
        style="
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        "
      >
        <NButton @click="downloadThePictureHandler"
          >Скачать в большом размере</NButton
        >
        <NButton @click="openAchievesDeskHandler">К наградам</NButton>
        <NButton v-if="showNextButton" @click="nextLevelClickHandler"
          >Следующий уровень</NButton
        >
      </NConfigProvider>
    </div>
  </div>
</template>

<style>
.memory-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  width: 256px;
  height: 256px;
  margin: 0;
  padding: 0;
  z-index: 1;
  background-color: #ddd;
  min-width: 256px;
  min-height: 256px;
}
.memories-game-container {
  width: 256px;
  height: 256px;
  margin-bottom: 100px;
}

@media (min-width: 550px) {
  .memory-container {
    width: 512px;
    height: 512px;
    z-index: 1;
    min-width: 512px;
    min-height: 512px;
  }
  .memories-game-container {
    width: 512px;
    height: 512px;
  }
}
</style>
<script setup lang="ts">
import { computed, ref } from "vue";
import { state, useAchievements } from "@/logic/opened";
import type { AchieveModel } from "@/logic/types";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { NConfigProvider, NButton, useOsTheme, darkTheme } from "naive-ui";
import MemoriesBoard from "@/components/MemoriesBoard.vue";
import * as particlesConfigJson from "../assets/config.json";
import router from "@/router";


import { useBreakpoints } from '@vueuse/core'
import { MOBILE_MIN_WIDTH, MOBILE_MIN_WIDTH_PX } from "@/constants";

const breakpoints = useBreakpoints({
  mobile: MOBILE_MIN_WIDTH
})

const isMobileScreen = breakpoints.smaller('mobile')

const { memoryOpenedAchieves, memoryAchieves, downloadTheBigPicture } =
  useAchievements();

const notOpenedAchievements = computed(() => {
  return memoryAchieves.value.filter((item: AchieveModel) => {
    return !memoryOpenedAchieves.value
      .map((item: AchieveModel) => item.name)
      .includes(item.name);
  });
});

const firstNotOpenedAchievement = computed(
  () => notOpenedAchievements.value[0]
);

const currentAchievement = ref<AchieveModel | undefined>();
const showButtons = ref<boolean>(false);
const showNextButton = ref<boolean>(false);
const showParticles = ref<boolean>(false);

const engineRef = ref<Engine | undefined>();
const particlesContainerRef = ref<Container | undefined>();

const particlesInit = async (engine: Engine) => {
  engineRef.value = engine;
  if (engineRef.value) {
    await loadFull(engineRef.value);
  }
};

const particlesLoaded = async (container: Container) => {
  particlesContainerRef.value = container;
};

const victoryHandler = async () => {
  showNextButton.value =
    memoryOpenedAchieves.value.length !== memoryAchieves.value.length;
  showButtons.value = true;
  showParticles.value = true;
  state.value.memories.push(firstNotOpenedAchievement.value.name);
};

const nextLevelClickHandler = () => {
  showParticles.value = false;
  showButtons.value = false;
  memoryOpenedAchieves.value.push(firstNotOpenedAchievement.value);
  currentAchievement.value = firstNotOpenedAchievement.value;
};

const downloadThePictureHandler = () => {
  downloadTheBigPicture(currentAchievement.value as AchieveModel);
};

const openAchievesDeskHandler = () => {
  memoryOpenedAchieves.value.push(firstNotOpenedAchievement.value);
  router.push({ name: 'finish' })
}

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));

currentAchievement.value = firstNotOpenedAchievement.value;

MOBILE_MIN_WIDTH_PX;
</script>
