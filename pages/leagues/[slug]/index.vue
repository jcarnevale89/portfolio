<template lang="pug">
div
  div jake
  pre {{ isEditing }}
  pre {{ data }}
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData('league-data', () => queryContent(`/leagues/${route.params.slug}`).findOne())

const isEditing = computed(() => !!route.query.edit)
</script>
