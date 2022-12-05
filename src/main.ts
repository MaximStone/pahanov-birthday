import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import { state, useAchievements, achieveMap } from "@/logic/opened";
import Particles from "vue3-particles";

const { memoryOpenedAchieves, puzzleOpenedAchieves } = useAchievements();
state.value.puzzle.forEach((achieveName: string) => {
  const achieveObject = achieveMap.get(achieveName);
  if (achieveObject) puzzleOpenedAchieves.value.push(achieveObject);
});

state.value.memories.forEach((achieveName: string) => {
  const achieveObject = achieveMap.get(achieveName);
  if (achieveObject) memoryOpenedAchieves.value.push(achieveObject);
});

const app = createApp(App);
app.use(router);
app.use(Particles);
app.mount("#app");
