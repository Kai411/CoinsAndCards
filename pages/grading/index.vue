<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Explore our grading services",
  meta: [
    {
      name: "Coins & Cards: Your Ultimate Destination for Rare Collectibles",
      content:
        "Discover a wide range of coins and trading cards at Coins & Cards. Explore our collection of rare coins, vintage cards, and expert resources to elevate your collecting journey. Join our community today!",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <section class="hero py-[46px] px-[24px] flex flex-col">
    <p class="font-bold text-[42px] font-chakra">Grade with us</p>
    <span class="text-[18px]"
      >We connect you to reputable grading services to ensure your collectibles
      are valued and protected.</span
    >
    <!-- <Button class="w-[fit-content] mt-[24px]">Learn more</Button> -->
  </section>

  <NuxtLayout name="content">
    <section class="pricing mt-[40px]">Coming soon...</section>
  </NuxtLayout>
</template>
