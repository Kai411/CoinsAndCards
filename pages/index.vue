<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Coins & Cards",
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

import { useProductsStore } from "@/stores/product";

const coins = useProductsStore();
</script>

<template>
  <div class="">
    <img
      class="h-[50vh] w-full object-cover"
      src="https://images.unsplash.com/photo-1733528346006-a47bc1648c76?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />
  </div>
  <NuxtLayout name="content">
    <section class="new-arrival mt-[32px]">
      <p class="font-bold font-chakra text-[42px] text-center">New Arrival!</p>
    </section>
    <section class="popular mt-[32px]">
      <p class="font-bold font-chakra text-[42px] text-center">Popular Items</p>
    </section>
  </NuxtLayout>
</template>
