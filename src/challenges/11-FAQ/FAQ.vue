<template>
  <div class="faq-item relative" tabindex="0">
    <div class="faq-item__header flex border-4 border-black">
      <!-- Question mark image -->
      <div class="faq-item__header-image relative shrink-0 bg-black w-24">
        <img
          class="absolute mx-auto inset-x-0 -top-8"
          src="./images/question-collapsed.svg"
          alt=""
        />
      </div>
      <!-- Header text -->
      <div class="faq-item__header-text-wrap py-5 px-6">
        <h3 class="text-2xl font-extrabold">
          Technically, Svelte is a library and SvelteKit is a framework. <br />
          What's the difference?
        </h3>
      </div>
    </div>

    <!-- Content -->
    <div class="faq-item__content bg-neutral-100">
      <button></button>
      <p class="font-semibold text-xl leading-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.

        <br />
        <br />

        Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq-item {
  font-family: "Open Sans", sans-serif;
}
</style>
