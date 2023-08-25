<template>
  <section class="pomodoro-timer flex items-center justify-center h-screen">
    <div
      class="timer-wrapper relative flex items-center justify-center rounded-full"
    >
      <!-- Ring -->
      <div
        class="ring absolute top-0 left-0"
        :class="{ 'ring--ended': !isTimerRunning }"
      >
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle stroke-width="9px" cx="259" cy="259" r="254"></circle>
        </svg>
      </div>

      <!-- Timer -->
      <div
        class="timer relative flex flex-col items-center justify-center rounded-full text-white"
      >
        <div class="timer__time flex items-center mt-8 mb-5 leading-none">
          <label class="timer__minutes">
            <input
              ref="inputField"
              v-model="minutes"
              :disabled="!isSettingsMode"
              class="timer__input border-b-2 border-dashed bg-transparent text-white text-center leading-none disabled:border-0"
              type="text"
              name="minutes"
              aria-label="minutes"
            />
          </label>
          <div class="timer__colon">:</div>
          <label class="timer__seconds">
            <input
              v-model="seconds"
              :disabled="!isSettingsMode"
              class="timer__input border-b-2 border-dashed bg-transparent text-white text-center leading-none disabled:border-0"
              type="text"
              name="seconds"
              aria-label="seconds"
            />
          </label>
        </div>

        <button
          class="timer__control-btn uppercase mb-6 opacity-80 hover:opacity-100"
          @click="toggleTimer"
        >
          {{ isTimerRunning ? "Pause" : "Start" }}
        </button>
        <button
          class="opacity-50 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed"
          @click="handleSettingsClick"
          :disabled="isTimerRunning"
        >
          <img src="./images/gear.svg" alt="Settings" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, nextTick, computed, watch } from "vue";
import type { Ref } from "vue";

const minutes = ref("00");
const seconds = ref("00");
const originalMinutes = ref("00");
const originalSeconds = ref("00");
const isSettingsMode = ref(false);
const isTimerRunning = ref(false);

const intervalId: Ref<number | undefined> = ref(undefined);
const inputField: Ref<HTMLInputElement | null> = ref(null);

const ringAnimationDuration = computed(() => {
  return `${
    isTimerRunning.value
      ? _getTotalTimeInSeconds(originalMinutes.value, originalSeconds.value)
      : 0
  }s`;
});

const ringAnimationPlayState = computed<"paused" | "running">(() => {
  return isTimerRunning.value ? "running" : "paused";
});

function _transformInputTime(inputTime: string = ""): string {
  return inputTime
    .replaceAll(/[^0-9]/gi, "")
    .trim()
    .padStart(2, "0")
    .slice(-2);
}

function _getTotalTimeInSeconds(minutes: string, seconds: string): number {
  return parseInt(minutes) * 60 + parseInt(seconds);
}

function _stopTimer(): void {
  isTimerRunning.value = false;

  clearInterval(intervalId.value);
}

function _showAlertMessage(message = "Time ended!"): void {
  alert(message);
}

function _updateTime(): void {
  const modifiedMinutes = _transformInputTime(minutes.value);
  const modifiedSeconds = _transformInputTime(seconds.value);

  const totalRemainingTime =
    _getTotalTimeInSeconds(modifiedMinutes, modifiedSeconds) - 1;

  const remainingMinutes = Math.floor(totalRemainingTime / 60);
  const remainingSeconds = totalRemainingTime % 60;

  minutes.value = remainingMinutes.toString().padStart(2, "0");
  seconds.value = remainingSeconds.toString().padStart(2, "0");

  if (totalRemainingTime <= 0) {
    _stopTimer();
    setTimeout(() => {
      _showAlertMessage();

      minutes.value = originalMinutes.value;
      seconds.value = originalSeconds.value;
    }, 100);
  }
}

function handleSettingsClick(): void {
  isSettingsMode.value = !isSettingsMode.value;

  nextTick(() => {
    inputField.value?.focus();
  });
}

function toggleTimer(): void {
  if (isTimerRunning.value) {
    _stopTimer();
  } else {
    // TODO: Fix SVG animation (start running if toggle Start/pause quickly)
    isSettingsMode.value = false;

    if (parseInt(minutes.value) <= 0 && parseInt(seconds.value) <= 0) {
      _showAlertMessage();
    } else {
      isTimerRunning.value = true;

      clearInterval(intervalId.value);
      intervalId.value = setInterval(_updateTime, 1000);
    }
  }
}

watch(isSettingsMode, (newValue) => {
  if (!newValue) {
    minutes.value = _transformInputTime(minutes.value);
    seconds.value = _transformInputTime(seconds.value);

    originalMinutes.value = minutes.value;
    originalSeconds.value = seconds.value;
  }
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Bebas Neue Book";
  font-display: swap;
  src: url("./fonts/bebasneue-book-webfont.woff2") format("woff2");
}

$ringDasharray: 1596;

.pomodoro-timer {
  background-color: #2b2a30;
}

.timer-wrapper {
  width: 518px;
  height: 518px;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
}

.ring {
  stroke: #09a65a;
  stroke-dasharray: $ringDasharray;
  stroke-dashoffset: 0;
  transform: rotate(90deg);
  animation-name: countdown;
  animation-iteration-count: infinite;
  animation-duration: v-bind(ringAnimationDuration);
  animation-timing-function: linear;
  animation-play-state: v-bind(ringAnimationPlayState);

  &--ended {
    stroke: #9d0000;
  }
}

.timer {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    71.4% 71.4% at 51.7% 28.6%,
    #3a393f 0%,
    #17171a 100%
  );
  box-shadow: inset 0 0 114px rgba(0, 0, 0, 0.45);

  &__time {
    font-family: "Bebas Neue Book", sans-serif;
    font-size: 12.25rem;
  }

  &__input {
    width: 150px;
    outline: none;
  }

  &__control-btn {
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.6em;
    background: linear-gradient(180deg, #ffffff 0%, #d5d8e1 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}

@keyframes countdown {
  to {
    stroke-dashoffset: $ringDasharray;
  }
}
</style>
