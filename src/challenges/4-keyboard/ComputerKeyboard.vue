<template>
  <section class="flex items-center justify-center h-screen bg-neutral-400">
    <div class="keyboard flex flex-col gap-3 p-11 shadow-md bg-gray-100">
      <ul
        v-for="(keyboardRow, keyboardRowIdx) in keyboardKeysByRows"
        :key="keyboardRowIdx"
        class="flex items-center flex-nowrap gap-3 text-2xl"
      >
        <li
          v-for="keyboardKey in keyboardRow"
          :key="keyboardKey.name"
          :data-key-code="keyboardKey.code"
          class="keyboard__key flex items-center justify-center w-16 h-16 py-4 px-5 uppercase rounded-2xl bg-white shadow"
          :class="{
            'grow text-neutral-500': keyboardKey.isSpecial,
            'text-teal-500': !keyboardKey.isSpecial,
            'keyboard__key--highlighted bg-teal-500 !text-white':
              highlightedKey.name === keyboardKey.name,
            'keyboard__key--hit': hitKey?.code === keyboardKey.code,
          }"
        >
          {{ keyboardKey.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import {
  allKeyboardKeys,
  keyboardKeysByRows,
  participatingKeys,
  type Key,
} from "@/challenges/4-keyboard/keys";

let hitKey = ref<Key | undefined>(undefined);
let highlightedKeyIndex = ref(generateRandomIndex());

const highlightedKey = computed(() => {
  return participatingKeys[highlightedKeyIndex.value];
});

function generateRandomIndex(): number {
  return Math.floor(Math.random() * participatingKeys.length);
}

function handleKeyupEvent(event: KeyboardEvent): void {
  if (event.code === highlightedKey.value.code) {
    highlightedKeyIndex.value = generateRandomIndex();
  } else {
    hitKey.value = allKeyboardKeys.find((key) => key.code === event.code);
  }
}

function handleAnimationEndEvent(event: AnimationEvent) {
  (event.target as HTMLElement).classList.remove("keyboard__key--hit");
  hitKey.value = undefined;
}

onMounted(() => {
  document.addEventListener("keyup", handleKeyupEvent);
  document.addEventListener("animationend", handleAnimationEndEvent);
});

onBeforeUnmount(() => {
  document.removeEventListener("keyup", handleKeyupEvent);
  document.removeEventListener("animationend", handleAnimationEndEvent);
});
</script>

<style lang="scss" scoped>
.keyboard {
  width: 1200px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  border-radius: 40px;

  &__key--highlighted {
    animation: jiggle 300ms linear infinite both;
  }

  &__key--hit {
    border: 2px solid rgb(248 113 113);
    background-color: rgb(254 242 242);
    animation: hit 300ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
}

@keyframes jiggle {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes hit {
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
