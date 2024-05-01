<template lang="pug">
div
  div(class='container mx-auto py-10 px-4')
    p Create A League

    LeagueEditor

    pre {{ leagueData }}
</template>

<script setup lang="ts">
const leagueData = ref({
  name: 'jake',
  teams: [{}],
})

const { data } = await useAsyncData('home', () => queryContent().find())
</script>
