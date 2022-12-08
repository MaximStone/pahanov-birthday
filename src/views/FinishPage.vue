<template>
  <div>
    <h1 style="margin-bottom: 30px">Открытые награды</h1>
    <div class="achieves-container">
      <div v-for="(item, idx) in achievesDisplayArray" class="achieve-box">
        <template v-if="item.opened">
          <div class="download-box" @click="downloadThePictureHandler(item)">СКАЧАТЬ</div>
          <img :src="item.small" style="width: 100%; height: 100%" />
        </template>
        <svg class="not-opened" v-else style="width: 100%; height: 100%">
          <image
            :xlink:href="item.small"
            width="100%"
            height="100%"
            x="0"
            y="0"
          ></image>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAchievements, achieveMap } from "@/logic/opened";
import { computed } from "vue";
import type { AchieveModel } from "@/logic/types";
const { openedAchieves, downloadTheBigPicture } = useAchievements();
const allAchievesMapArray = Array.from(achieveMap.values());
const achievesDisplayArray = computed(() => {
  return allAchievesMapArray.map((item: AchieveModel) => {
    return {
      ...item,
      opened: openedAchieves.value
        .map((openedItem: AchieveModel) => openedItem.name)
        .includes(item.name),
    };
  });
});
const downloadThePictureHandler = (item: AchieveModel) => {
  downloadTheBigPicture(item as AchieveModel)
}
</script>
<style>
.achieves-container {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 150px 150px;
  grid-auto-rows: 150px;
}
.achieve-box {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffffff;
  box-shadow: 0 0 10px #2f2f2f;
}
.not-opened {
  filter: blur(10px) grayscale(1);
}

.download-box {
  background: rgba(200, 240, 250, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: none;
  cursor: pointer;
  font-weight: bold;
  color: #003f52;
}

.achieve-box:hover .download-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1475px) {
  .achieves-container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 200px 200px 200px;
    grid-auto-rows: 200px;
  }
}
</style>
