<template lang="pug">
div(class="p-10 bg-slate-400 text-center")
  p configurator will go here

  span.isolate.inline-flex.rounded-md.shadow-sm
    button.relative.inline-flex.items-center.rounded-l-md.bg-white.px-3.py-2.text-sm.font-semibold.text-gray-900.ring-1.ring-inset.ring-gray-300(type='button' class='hover:bg-gray-50 focus:z-10' @click="counter.decrement") -
    button.relative.-ml-px.inline-flex.items-center.bg-white.px-3.py-2.text-sm.font-semibold.text-gray-900.ring-1.ring-inset.ring-gray-300(type='button' class='hover:bg-gray-50 focus:z-10') {{ counter.count }}
    button.relative.-ml-px.inline-flex.items-center.rounded-r-md.bg-white.px-3.py-2.text-sm.font-semibold.text-gray-900.ring-1.ring-inset.ring-gray-300(type='button' class='hover:bg-gray-50 focus:z-10' @click="counter.increment") +

</template>

<script setup lang="ts">
const counter = useCounter();
</script>
