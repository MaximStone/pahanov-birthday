<template>
  <div class="puzzle-container">
    <Particles
      v-if="showParticles"
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      url="src/assets/config.json"
    />

    <div id="memoryContainer" class="memory-container">
      MEMORY GAME CONTAINER
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
        <NButton @click="downloadThePictureHandler">Скачать в большом размере</NButton>
        <NButton>К наградам</NButton>
        <NButton v-if="showNextButton" @click="nextLevelClickHandler"
          >Следующий уровень</NButton
        >
      </NConfigProvider>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .memory-container {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
    width: 512px;
    height: 512px;
    margin: 0;
    padding: 0;
    z-index: 1;
    background-color: #ddd;
    min-width: 512px;
    min-height: 512px;
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

const { memoryOpenedAchieves, memoryAchieves, downloadTheBigPicture } = useAchievements();

const notOpenedAchievements = computed(() => {
  return memoryAchieves.value.filter(
    (item: AchieveModel) => {
      return !memoryOpenedAchieves.value
        .map((item: AchieveModel) => item.name)
        .includes(item.name)
    }

  );
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
    memoryOpenedAchieves.value.length !== memoryAchieves.value.length;
  showButtons.value = true;
  showParticles.value = true;
  state.value.puzzle.push(firstNotOpenedAchievement.value.name);
};

const nextLevelClickHandler = () => {
  showParticles.value = false;
  showButtons.value = false;
  memoryOpenedAchieves.value.push(firstNotOpenedAchievement.value);
};

const downloadThePictureHandler = () => {
  downloadTheBigPicture(currentAchievement.value as AchieveModel)
}

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>
