<template>
  <div class="faq-item relative pt-8 pr-14 -mb-24">
    <div class="faq-item__header-wrap">
      <button
        class="faq-item__header relative flex w-full border-4 border-black bg-black z-10"
        @click="isExpanded = !isExpanded"
      >
        <!-- Question mark image -->
        <span class="faq-item__header-image relative shrink-0 bg-black w-24">
          <img
            class="absolute mx-auto inset-x-0 -top-8"
            src="./images/question-collapsed.svg"
            alt=""
          />
        </span>
        <!-- Header text -->
        <h3
          class="faq-item__title grow py-5 px-6 text-2xl text-start break-words font-extrabold bg-white"
          v-html="props.title"
        ></h3>
      </button>
    </div>

    <!-- Content -->
    <div
      class="faq-item__content relative left-14 bottom-24 pt-24 bg-neutral-100 transition-colors"
    >
      <button class="absolute p-2 right-2 top-2" @click="isExpanded = false">
        <img
          v-if="isExpanded"
          class="pt-1 -mb-1"
          src="./images/arrow.svg"
          alt="Open answer"
        />
        <img v-else src="./images/close.svg" alt="Close answer" />
      </button>
      <p class="py-8 px-10 md:py-12 md:px-14 font-semibold text-xl leading-10">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  title?: string;
}>();

const isExpanded = ref(true);
</script>

<style lang="scss" scoped>
.faq-item {
  font-family: "Open Sans", sans-serif;

  &__header-wrap {
    min-height: 112px;
  }

  &__header,
  &__title {
    min-height: inherit;
  }

  &__title {
    word-break: break-word;
  }

  &:hover .faq-item__content {
    background-color: #ffdd00;
  }
}
</style>
