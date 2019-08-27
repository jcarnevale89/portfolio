<template lang="pug">
  .home
    Hero
    //- .hero.inset-0.flex.items-center.justify-center


    //- img(src="https://placehold.it/1920x1080")
    //- .container.home.mx-auto
    HelloWorld(msg="Jake's Website Is Under Construction")
</template>

<script>
import Hero from '@/components/Hero.vue';
import HelloWorld from '@/components/HelloWorld.vue';
// import Button from '@/components/Button.vue';

export default {
  name: 'home',
  components: {
    Hero,
    HelloWorld,
  },
};
</script>

<style lang="stylus">
</style>
