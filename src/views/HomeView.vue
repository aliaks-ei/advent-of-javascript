<template>
  <section class="p-8">
    <h1 class="text-5xl mb-4">Challenges:</h1>

    <ul>
      <li v-for="link in challengeLinks" :key="link.routeName">
        <RouterLink
          class="underline hover:text-amber-500"
          :to="{ name: link.routeName }"
        >
          {{ link.title }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

type ChallengeLinks = {
  routeName: string;
  title: string;
};

const challengeLinks: ChallengeLinks[] = [
  { routeName: "pomodoro", title: "1 - Pomodoro timer" },
  { routeName: "piano", title: "3 - Piano" },
  { routeName: "keyboard", title: "4 - Keyboard (Eyes on screen)" },
];
</script>
