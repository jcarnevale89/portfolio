<template lang="pug">
  .home
    img(
      alt="Vue logo"
      src="../assets/logo.png"
    )
    HelloWorld(msg="Jake's Website Is Under Construction")
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
