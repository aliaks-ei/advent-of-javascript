<template>
  <section
    class="flex flex-col justify-start gap-y-16 h-screen max-w-7xl m-auto p-8 sm:px-16 lg:p-16"
  >
    <FAQ v-for="item in faqItems" :key="item.id" :title="item.title">
      {{ item.content }}
    </FAQ>
  </section>
</template>

<script lang="ts" setup>
import FAQ from "@/challenges/11-FAQ/FAQ.vue";

const faqItems = [
  {
    id: crypto.randomUUID(),
    title: `
      Technically, Svelte is a library and SvelteKit is a framework. <br />
      What's the difference?
    `,
    content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut.
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
      deserunt mollit anim id est laborum.
    `,
  },
  {
    id: crypto.randomUUID(),
    title: "Do you provide a certificate of completion?",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut.
    `,
  },
];
</script>
