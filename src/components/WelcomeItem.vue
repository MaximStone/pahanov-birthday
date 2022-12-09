<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps<{
  total: number,
  achieved: number
}>()
const { total, achieved } = toRefs(props);
</script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
      <br/>
      {{ achieved }} / {{ total }}
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  cursor: pointer;
  text-align: left;
  transition: background-color 200ms;
  padding: 10px;
}

.item:hover {
  background-color: rgba(0, 167, 189, 0.3);
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 50px;
  height: 50px;

  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1475px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
