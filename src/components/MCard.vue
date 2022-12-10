<template>
  <div class="card-container" @click="cardClickHandler">
    <div class="shape cuboid-1 cub-1 card-rotate-outside">
      <div class="shape-body card-rotate">
        <div class="face ft">
          <div class="photon-shader">
            <FrontFaceCard
              :imageSrc="frontImage"
              :mask-type="cardId"
              :unique="unique"
            />
          </div>
        </div>
        <div class="face bk">
          <div
            class="photon-shader"
            style="background-color: rgba(0, 0, 0, 0.15)"
          ></div>
          <svg
            x="0"
            y="0"
            viewBox="37 301 60 60"
            style="width: 100%; height: 100%"
          >
            <g>
              <path
                class="back-path"
                stroke="#114659"
                fill="#08313F"
                d="M42.4,357v-52.7h-2.9V357H42.4z M48.2,332.2v-1.6v-1.5v-18.6
			h14.6V326h-8.8v-3.1v-3.1v-3.1H57v3.1v3.1h2.9v-9.3h-8.8v6.2v3.1v6.2h2.9h8.8h2.9V326v-15.5v-3.1h-2.9H48.2h-2.9v3.1v18.6v1.5v1.6
			v6.2v12.4v3.1h2.9h14.6h2.9v-3.1v-12.4v-3.1v-3.1h-2.9h-8.8h-2.9v6.2v3.1v6.2h8.8v-9.3H57v3.1v3.1h-2.9v-3.1v-3.1v-3.1h8.8v3.1
			v12.4H48.2v-12.4V332.2z M86.3,332.2v-1.6v-1.5v-18.6H71.7V326h8.8v-3.1v-3.1v-3.1h-2.9v3.1v3.1h-2.9v-9.3h8.8v6.2v3.1v6.2h-2.9
			h-8.8h-2.9V326v-15.5v-3.1h2.9h14.6h2.9v3.1v18.6v1.5v1.6v6.2v12.4v3.1h-2.9H71.7h-2.9v-3.1v-12.4v-3.1v-3.1h2.9h8.8h2.9v6.2v3.1
			v6.2h-8.8v-9.3h2.9v3.1v3.1h2.9v-3.1v-3.1v-3.1h-8.8v3.1v12.4h14.6v-12.4V332.2z M95.1,357v-52.7h-2.9V357H95.1z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="shade-rotate shade-element shade-blur shade-opacity"></div>
  </div>
</template>

<script lang="ts">
import type { PropType, Ref } from "vue";
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { easeInOutCubic } from "@/logic/easing";
import FrontFaceCard from "@/components/FrontFaceCard.vue";
import type { MemoryCard } from "@/logic/memories";

export default defineComponent({
  name: "MCard",
  components: { FrontFaceCard },
  props: {
    initiallyOpened: Boolean,
    enabled: Boolean,
    unique: Boolean,
    frontImage: String,
    reactiveState: Object as PropType<MemoryCard>,
    backImage: String,
    cardId: Number,
    sizeMetric: {
      type: String as PropType<"px" | "em">,
      default: () => "px",
    },
    cornerRadius: {
      type: Number,
      default: () => 5,
    },
    width: {
      type: Number,
      default: () => 200,
    },
    height: {
      type: Number,
      default: () => 300,
    },
    openCloseAnimationDuration: {
      type: Number,
      default: () => 800,
    },
    holdAfterTurningDuration: {
      type: Number,
      default: () => 200,
    },
    goBackDuration: {
      type: Number,
      default: () => 300,
    },
  },
  emits: ["open", "open:before", "close"],
  setup(props, { emit }) {
    const MAX_Z_AXIS = 2;
    const D_TIME = 8;

    const isOpened: Ref<boolean> = ref<boolean>(props.initiallyOpened);
    const isMoving: Ref<boolean> = ref<boolean>(false);

    const rotateX: Ref<number> = ref<number>(0);
    const rotateY: Ref<number> = ref<number>(props.initiallyOpened ? 0 : 180);
    const rotateZ: Ref<number> = ref<number>(0);

    const zAxis: Ref<number> = ref<number>(0);

    const turnCard = async () => {
      if (isMoving.value) return;

      const ROTATION_DELAY = props.openCloseAnimationDuration / 3.5;

      let dTimeZ1 = 0;
      let dTimeZ2 = 0;
      let dTimeRotate = 0;
      isMoving.value = true;

      const initRotateY = rotateY.value;

      return new Promise((resolve) => {
        const firstMovementIntervalId = setInterval(() => {
          zAxis.value = easeInOutCubic(
            dTimeZ1,
            0,
            MAX_Z_AXIS,
            props.openCloseAnimationDuration
          );

          if (dTimeZ1 >= ROTATION_DELAY) {
            rotateY.value = easeInOutCubic(
              dTimeRotate,
              initRotateY,
              180,
              props.openCloseAnimationDuration - ROTATION_DELAY
            );
            dTimeRotate += D_TIME;
          }

          if (rotateY.value >= initRotateY + 180) {
            rotateY.value = initRotateY + 180
            clearInterval(firstMovementIntervalId);

            setTimeout(() => {
              const secondMovementIntervalId = setInterval(() => {
                zAxis.value = easeInOutCubic(
                  dTimeZ2,
                  MAX_Z_AXIS,
                  -MAX_Z_AXIS,
                  props.goBackDuration
                );

                if (zAxis.value <= 0) {
                  clearInterval(secondMovementIntervalId);
                  isMoving.value = false;
                  resolve(true);
                }

                dTimeZ2 += D_TIME;
              }, D_TIME);
            }, props.holdAfterTurningDuration);
          }

          dTimeZ1 += D_TIME;
        }, D_TIME);
      });
    };

    const openCard = async () => {
      if (isOpened.value) return;

      emit("open:before", props.reactiveState);

      if (props.reactiveState) {
        props.reactiveState.animated = true;
      }

      await turnCard();

      // animation is finished
      if (props.reactiveState) {
        props.reactiveState.animated = false;
      }

      isOpened.value = true;
      if (props.reactiveState) {
        props.reactiveState.opened = true;
      }

      emit("open", props.reactiveState);
    };

    const closeCard = async () => {
      if (!isOpened.value) return;

      // animation is starting
      if (props.reactiveState) {
        props.reactiveState.animated = true;
      }

      await turnCard(); // animation

      // animation is finished
      if (props.reactiveState) {
        props.reactiveState.animated = true;
      }

      isOpened.value = false;
      if (props.reactiveState) {
        props.reactiveState.opened = false;
      }

      emit("close", props.reactiveState);
    };

    const cardClickHandler = () => {
      if (!props.enabled) return;
      if (isOpened.value) closeCard();
      else openCard();
    };

    watch(props.reactiveState as Record<string, any>, () => {
      // console.log('props.reactiveState changed', props.reactiveState)
      if (isOpened && !props.reactiveState?.opened) closeCard();
      if (!isOpened && props.reactiveState?.opened) openCard();
    });

    return {
      cardClickHandler,
      xRotate: `${rotateX.value}deg`,
      yRotate: `${rotateY.value}deg`,
      zRotate: `${rotateZ.value}deg`,
      backImageUrl: `url(${props.backImage}`,
      rotation: computed(
        () => `rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
      ),
      rotationOutsize: computed(() =>
        zAxis.value > 0 ? `translateZ(${zAxis.value * 50}px)` : "none"
      ),
      rotationShade: computed(() => {
        const scaleValue =
          Math.round(
            Math.abs(Math.cos((rotateY.value * Math.PI) / 180) * 100)
          ) / 100;

        if (scaleValue > 1) {
          `scaleX(${scaleValue})`;
        }

        return "none";
      }),
      opacityShade: computed(
        () => `${Math.max(0, Math.min(1, (10 - zAxis.value) / 10))}`
      ),
      shadeBlur: computed(() =>
        zAxis.value > 0 ? `blur(${zAxis.value * 3}px)` : "none"
      ),
      calculatedWidth: computed(() => `${props.width}${props.sizeMetric}`),
      calculatedHeight: computed(() => `${props.height}${props.sizeMetric}`),
      calculatedBorderRadius: computed(
        () => `${props.cornerRadius}${props.sizeMetric}`
      ),
    };
  },
});
</script>

<style scoped lang="scss">
.shade-element {
  background-color: rgba(0, 0, 0, 0.4);
  width: v-bind(calculatedWidth);
  height: v-bind(calculatedHeight);
  transform-origin: center;
  z-index: -1;
  border-radius: v-bind(calculatedBorderRadius);
}

.shade-blur {
  filter: v-bind(shadeBlur);
}

.shape,
.face,
.face-wrapper,
.shade-element,
.shape-body {
  position: absolute;
}

.shape,
.face,
.face-wrapper,
.shade-element,
.shape-body,
.card-container {
  transform-style: preserve-3d;
}

.shape {
  width: 0;
  height: 0;
  transform-origin: center;
}

.back-path {
  stroke: #114659;
  fill: #08313f;
  transition: stroke 100ms, fill 100ms;
}

.face,
.face-wrapper {
  overflow: hidden;
  transform-origin: 0 0;
  backface-visibility: hidden;
  /* hidden by default, prevent blinking and other weird rendering glitchs */
}

.face {
  background-size: 100% 100% !important;
  background-position: center;
}

.face-wrapper .face {
  left: 100%;
  width: 100%;
  height: 100%;
}

.photon-shader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

[class*="cuboid"] .shape-body {
  width: 100%;
  height: 100%;
}

[class*="cuboid"] .shape-body .ft,
[class*="cuboid"] .shape-body .bk {
  width: 100%;
  height: 100%;
}

[class*="cuboid"] .shape-body .bk {
  left: 100%;
}

/* .cub-1 styles */
.cub-1 {
  transform: translate3D(0em, 0em, 0em) rotateX(0deg) rotateY(0deg)
    rotateZ(0deg);
  opacity: 1;
  width: v-bind(calculatedWidth);
  height: v-bind(calculatedHeight);
}

.cub-1 .shape-body .face {
  background-color: #ffffff;
}

.cub-1 .shape-body .ft {
  transform: translateZ(0em);
  border-radius: v-bind(calculatedBorderRadius);
  width: v-bind(calculatedWidth);
}

.cub-1 .shape-body .bk {
  transform: translateZ(0em) rotateY(180deg);
  background-color: #114659;
  border-radius: v-bind(calculatedBorderRadius);
  width: v-bind(calculatedWidth);
  transition: background-color 100ms;
}
.cub-1 {
  &:hover {
    .shape-body .bk {
      background-color: #15546e;
      .back-path {
        stroke: #145267;
        fill: #0c4457;
      }
    }
  }
}

.card-rotate {
  transform: v-bind(rotation);
}
.shade-opacity {
  opacity: v-bind(opacityShade);
}
.shade-rotate {
  transform: v-bind(rotationShade);
}
.card-rotate-outside {
  transform: v-bind(rotationOutsize);
}
.card-container {
  caret-color: transparent;
  cursor: pointer;
  transition: opacity 500ms;
}
</style>
