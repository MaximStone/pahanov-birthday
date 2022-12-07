<template>
  <div>
    <h1>Открытые награды</h1>
    <div class="achieves-container">
      <div v-for="(item, idx) in achievesDisplayArray" class="achieve-box">
        <template v-if="item.opened">
          <div class="download-box" @click="downloadThePictureHandler(item)">СКАЧАТЬ</div>
          <img :src="item.small" style="width: 200px; height: 200px" />
        </template>
        <svg class="not-opened" v-else width="200" height="200">
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
  grid-gap: 20px;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: auto auto auto;
}
.achieve-box {
  position: relative;
  width: 200px;
  height: 200px;
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
  padding-top: 75px;
  padding-left: 65px;
  font-weight: bold;
  color: #003f52;
}

.achieve-box:hover .download-box {
  display: block;
}
</style>
