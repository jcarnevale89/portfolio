<template lang="pug">
div(class="fixed w-full z-10 flex items-center p-4")
  button(
    type="button"
    class="rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    @click="toggleNavigation"
  )
   Icon(
    name="charm:menu-hamburger"
    class="h-8 w-8"
    aria-hidden="true"
  )


TransitionRoot(
  as="template"
  :show="isOpen"
)
  Dialog(
    as="div"
    class="relative z-10"
    @close="toggleNavigation"
  )
    TransitionChild(
      as="template"
      enter="ease-in-out duration-500"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="ease-in-out duration-500"
      leave-from="opacity-100"
      leave-to="opacity-0"
    )
      div(class="fixed inset-0 bg-black bg-opacity-40 transition-opacity")

    div(class="fixed inset-0 overflow-hidden")
      div(class="absolute inset-0 overflow-hidden")
        div(class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10")
          TransitionChild(
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          )
            DialogPanel(class="pointer-events-auto relative w-screen max-w-sm")
              TransitionChild(
                as="template"
                enter="ease-in-out duration-500"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-500"
                leave-from="opacity-100"
                leave-to="opacity-0"
              )
                div(class="absolute right-0 top-0 -mr-8 flex pl-2 pt-4 sm:-mr-10 sm:pl-4")
                  button(
                    type="button"
                    class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    @click="toggleNavigation"
                  )
                    span(class="sr-only") Close panel
                    Icon(
                      name="ic:baseline-close"
                      class="h-6 w-6"
                      aria-hidden="true"
                    )

              div(class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl")
                div(class="px-4 sm:px-6")
                  DialogTitle(class="text-base font-semibold leading-6 text-gray-900") Panel title

                div(class="relative mt-6 flex-1 px-4 sm:px-6")
                  ul(class="space-y-2")
                    li
                      NuxtLink(to="/") Home
                    li
                      NuxtLink(to="/configurator") Configurator Example

</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";

const route = useRoute();

watch(
  () => route.path,
  () => {
    toggleNavigation();
  }
);

const isOpen = ref(false);

function toggleNavigation() {
  isOpen.value = !isOpen.value;
}

// onMounted(toggleNavigation);
</script>
