<template lang="pug">
  .hero.w-screen.h-screen.relative
    .gradient.opacity-75.absolute.inset-0
    img.relative.mx-auto.pt-4(src="https://placehold.it/100x100")
    .absolute.inset-0.flex.justify-center.items-center
      h1.text-6xl.text-white.font-bold Hi, I'm Jake.
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
  background-image linear-gradient(150deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)
</style>
