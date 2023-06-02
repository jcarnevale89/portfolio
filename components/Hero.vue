<template lang="pug">
div(class="bg-gray-900")
  div(class="fixed w-screen h-screen")
    img(
      class="w-screen h-screen object-cover"
      src="/background.jpg"
      alt=''
    )
    div(
      aria-hidden="true"
      class="absolute inset-0 bg-black bg-opacity-75"
    )

    .absolute.inset-0.flex.flex-col.justify-center.items-center.text-center.font-bold.text-white.gap-4
      h1.text-6xl Hi, I'm Jake.
      h2.text-4xl This website is currently under construction
</template>

<script setup lang="ts">
const testing = ref("jake");
const SuperTesting = ref("jake");
const awesomeProduct = ref({
  name: "bakflip",
});
const somethingNewer = ref("hellows");
const jake = ref("hellows");
</script>
