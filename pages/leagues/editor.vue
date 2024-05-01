<template lang="pug">
div
  div(class='container mx-auto py-10 px-4')
    p League

    FormKit(type='form' v-model='leagueData')
      FormKit(type='text' name='name' label='League Name')
      //- FormKit(type="text" name="teams")
      div
        p Teams
        FormKit(type='list' name='teams' dynamic)
          template(#default='{ items, node, value }')
            template(v-for='(item, index) in items' :key='item')
              FormKit(type='group' :index='index')
                div
                  FormKit(type='text' name='name' label='Guest name' placeholder='Guest name')
                  FormKit(type='number' name='age' label='Guest age')
                  button(
                    type='button'
                    @click='() => node.input(value.filter((_, i) => i !== index))'
                    class='border border-blue-600 text-blue-600 p-3'
                  )
                    | - Remove
                  button(
                    type='button'
                    @click='() => node.input(value.concat({}))'
                    class='border border-blue-600 text-blue-600 p-3 mb-4'
                  )
                    | + Add another

    pre {{ leagueData }}
</template>

<script setup lang="ts">
const leagueData = ref({
  name: 'jake',
  teams: [{}],
})

const { data } = await useAsyncData('home', () => queryContent().find())
</script>
