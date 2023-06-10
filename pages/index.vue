<script setup lang="ts">
const route = useRoute();
</script>

<template lang="pug">
div
  Hero

  div
    h1 Nuxt Routing set up successfully!
    p Current route: {{ route.path }}
    a(href="https://nuxt.com/docs/getting-started/routing" target="_blank") Learn more about Nuxt Routingfdasfdsa

</template>
