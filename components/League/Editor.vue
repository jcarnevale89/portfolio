<template lang="pug">
//- ClientOnly
FormKit(type='form' :value='league' @submit='update')
  template(#default='{ value }')
    FormKit(type='text' name='name' label='League Name' validation='required:trim')

    FormRepeater(name='teams' label='Teams' class='grid grid-cols-3 gap-6')
      template(#item='{ deleteItem: deleteTeam }')
        div(class='relative border border-neutral-400 p-4 rounded-lg')
          button(
            type='button'
            @click='deleteTeam'
            class='absolute top-0 right-0 -mt-3 -mr-3 rounded-full bg-slate-500 flex justify-center items-center'
          )
            Icon(name='charm:cross' class='mx-auto h-6 w-6 text-white')

          FormKit(type='text' name='name' label='Name' placeholder='Name' validation='required:trim')

          FormRepeater(name='players' label='Players' addLabel='Add player')
            template(#item='{ deleteItem: deletePlayer }')
              FormKit(
                type='text'
                name='name'
                placeholder='Name'
                validation='required:trim'
                suffix-icon='trash'
                @suffix-icon-click='deletePlayer'
                :sections-schema='{ suffixIcon: { $el: "button", attrs: { type: "button" } } }'
              )

      template(#postItem='{ addItem }')
        button(
          type='button'
          class='relative block w-full rounded-lg border-2 border-dashed border-neutral-300 p-12 text-center hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          @click='addItem'
        )
          Icon(name='fluent:people-team-20-regular' class='mx-auto h-12 w-12 text-gray-400')
          span(class='mt-2 block text-sm font-semibold text-gray-900') Create a new team

    FormRepeater(name='games' label='Games' class='grid grid-cols-3 gap-6')
      template(#item='{ deleteItem: deleteTeam }')
        div(class='relative border border-neutral-400 p-4 rounded-lg')
          button(
            type='button'
            @click='deleteTeam'
            class='absolute top-0 right-0 -mt-3 -mr-3 rounded-full bg-slate-500 flex justify-center items-center'
          )
            Icon(name='charm:cross' class='mx-auto h-6 w-6 text-white')

          FormKit(type='text' name='name' label='Name' placeholder='Name' validation='required:trim')

          FormRepeater(name='players' label='Players' addLabel='Add player')
            template(#item='{ deleteItem: deletePlayer }')
              FormKit(
                type='text'
                name='name'
                placeholder='Name'
                validation='required:trim'
                suffix-icon='trash'
                @suffix-icon-click='deletePlayer'
                :sections-schema='{ suffixIcon: { $el: "button", attrs: { type: "button" } } }'
              )

      template(#postItem='{ addItem }')
        button(
          type='button'
          class='relative block w-full rounded-lg border-2 border-dashed border-neutral-300 p-12 text-center hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          @click='addItem'
        )
          Icon(name='material-symbols-light:sports-hockey' class='mx-auto h-14 w-14 text-gray-400')
          span(class='mt-2 block text-sm font-semibold text-gray-900') Create a new team
</template>

<script setup lang="ts">
const { league } = defineProps<{
  league?: any
}>()

function generateUUID() {
  return crypto.randomUUID()
}

function update(data) {
  // createId here if ID doesn't exist
  console.log(data)
}
</script>
