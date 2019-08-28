<template lang="pug">
  .hero.w-screen.h-screen.relative
    .gradient.absolute.inset-0
    .absolute.inset-0.flex.flex-col.justify-center.items-center.text-center.text-white.font-bold
      h1.text-6xl Hi, I'm Jake.
      h2.text-4xl This website is currently under construction
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="stylus">
.hero
  background-image url('../assets/background.jpg')
  background-size cover
  background-position center

.gradient
  background-image linear-gradient(0deg, rgba(0,0,0,.9) 15%, rgba(10,10,10,.55) 100%)

</style>
