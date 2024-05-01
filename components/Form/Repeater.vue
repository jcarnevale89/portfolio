<template lang="pug">
div(class='mb-4')
  p(v-if='label' class='font-bold mb-2 text-sm') {{ label }}
  FormKit(type='list' :name='name' dynamic)
    template(#default='{ items, node, value }')
      div(v-bind='$attrs')
        //- slot(name='preItem')

        template(v-for='(item, index) in items' :key='item')
          FormKit(type='group' :index='index')
            slot(
              name='item'
              :item='item'
              :addItem='addItem.bind(null, node)'
              :deleteItem='deleteItem.bind(null, node, index)'
            )

        slot(name='postItem' :addItem='addItem.bind(null, node)')

      slot(v-if='addLabel || $slots.addItem' name='addItem' :addItem='addItem.bind(null, node)')
        div(class='text-right')
          button(
            type='button'
            class='rounded-md bg-blue-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            @click='addItem(node)'
          ) {{ addLabel }}

      //- pre {{ value }}
</template>

<script setup lang="ts">
import type { FormKitNode } from '@formkit/core'

defineProps<{
  name: string
  label?: string
  addLabel?: string
}>()

defineOptions({
  inheritAttrs: false,
})

function addItem(node: FormKitNode) {
  node.input(node.value?.concat({}))
}

function deleteItem(node: FormKitNode, index: number) {
  node.input(node.value?.filter((_, i) => i !== index))
}
</script>
