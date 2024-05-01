<template lang="pug">
div
  div(class='container mx-auto py-14 px-4')
    ul(role='list' class='divide-y divide-gray-100')
      template(v-for='item in data' :key='item._id')
        li(class='relative flex justify-between gap-x-6 py-5 group')
          div(class='flex min-w-0 gap-x-4')
            img(
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
              class='h-12 w-12 flex-none rounded-full bg-gray-50'
            )
            div(class='min-w-0 flex-auto')
              p(class='text-sm font-semibold leading-6 text-gray-900')
                NuxtLink(:to='item._path')
                  span(class='absolute inset-x-0 -top-px bottom-0')
                  |
                  | {{ item.title }}
              p(class='mt-1 flex text-xs leading-5 text-gray-500')
                | Last updated 3h ago

          div(class='flex shrink-0 items-center gap-x-4')
            div(class='hidden sm:flex sm:flex-col sm:items-end')
              p(class='text-sm leading-6 text-gray-900 group-hover:underline') View Details

            Icon(name='charm:chevron-right' class='text-gray-400 w-4 h-4 flex-none group-hover:text-gray-900')

  pre {{ data }}
</template>

<script setup lang="ts">
const { data } = await useAsyncData('leagues-home', () => queryContent('/leagues').find())
</script>
