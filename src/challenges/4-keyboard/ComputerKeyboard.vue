<template>
  <section class="flex items-center justify-center h-screen">
    <div class="flex flex-col gap-3 keyboard p-11 bg-gray-100">
      <ul
        v-for="(keyboardRow, keyboardRowIdx) in keyboardKeysByRows"
        :key="keyboardRowIdx"
        class="flex items-center flex-nowrap gap-3 text-2xl"
      >
        <li
          v-for="keyboardKey in keyboardRow"
          :key="keyboardKey.name"
          :class="{
            'grow uppercase text-neutral-500': keyboardKey.isSpecial,
            'text-teal-500': !keyboardKey.isSpecial,
          }"
          class="flex items-center justify-center w-16 h-16 py-4 px-5 rounded-2xl bg-white shadow"
        >
          {{ keyboardKey.name }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import keyboardKeysByRows from "@/challenges/4-keyboard/keys";
</script>

<style lang="scss" scoped>
.keyboard {
  width: 1200px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  border-radius: 40px;
}
</style>
