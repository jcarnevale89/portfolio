<template lang="pug">
  nav.fixed.z-50.w-full.text-gray-400
    .container.h-20.mx-auto.flex.items-center.justify-between
      div Jake Carnevale
      ul.flex
        li.ml-6(
          v-for="link in links"
          :key="link.text"
        )
          router-link(:to="link.route") {{ link.text }}

</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          text: 'About',
          route: { name: 'about' },
        },
        {
          text: 'Testing',
          route: { name: 'testing' },
        },
        {
          text: 'Contact',
          route: { name: 'contact' },
        },
      ],
    };
  },
};
</script>
