<template>
  <div class="puzzle-container square">
    <Particles
      v-if="showParticles"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesConfigJson"
    />
    <PuzzleBoard
      :id="`board_${firstNotOpenedAchievement.name}`"
      :autoResize="true"
      :showNumber="showNumber"
      :cols="3"
      :rows="3"
      :src="firstNotOpenedAchievement.small"
      :animation="animation"
      :width="width"
      :height="height"
      @init="onPuzzleBoardInit"
      @start="onPuzzleBoardStart"
      @change="onPuzzleBoardChange"
      @finish="onPuzzleBoardFinish"
    />
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
.square {
  aspect-ratio: 1 / 1;
  width: 100%;
  max-height: 100%;
}

.puzzle-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
  padding: 0;
  z-index: 1;
  background-color: #ddd;
  max-width: 512px;
  margin: 0 0 100px;
}

@media (min-width: 1475px) {
  .puzzle-container {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
    margin: 0;
    padding: 0;
    z-index: 1;
    background-color: #ddd;
  }
}
</style>
<script setup lang="ts">
import PuzzleBoard from "@/components/PuzzleBoard.vue";
import { computed, ref } from "vue";
import { state, useAchievements } from "@/logic/opened";
import type { AchieveModel } from "@/logic/types";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { NConfigProvider, NButton, useOsTheme, darkTheme } from "naive-ui";
import * as particlesConfigJson from "../assets/config.json";
import router from "@/router";

const { puzzleOpenedAchieves, puzzleAchieves, downloadTheBigPicture } =
  useAchievements();

const notOpenedAchievements = computed(() => {
  return puzzleAchieves.value.filter((item: AchieveModel) => {
    return !puzzleOpenedAchieves.value
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

const width = ref(512);
const height = ref(512);
const animation = true;
const showNumber = ref<boolean>(false);

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

const onPuzzleBoardInit = () => {
  currentAchievement.value = firstNotOpenedAchievement.value;
};
const onPuzzleBoardStart = () => {};
const onPuzzleBoardChange = () => {};

const onPuzzleBoardFinish = async () => {
  showNextButton.value =
    puzzleOpenedAchieves.value.length !== puzzleAchieves.value.length;
  showButtons.value = true;
  showParticles.value = true;
  state.value.puzzle.push(firstNotOpenedAchievement.value.name);
};

const nextLevelClickHandler = () => {
  showParticles.value = false;
  showButtons.value = false;
  puzzleOpenedAchieves.value.push(firstNotOpenedAchievement.value);
};

const downloadThePictureHandler = () => {
  downloadTheBigPicture(currentAchievement.value as AchieveModel);
};

const openAchievesDeskHandler = () => {
  puzzleOpenedAchieves.value.push(firstNotOpenedAchievement.value);
  router.push({ name: 'finish' })
}

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>
