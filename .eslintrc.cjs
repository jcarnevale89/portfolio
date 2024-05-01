module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    //'plugin:vue/vue3-recommended', // resulted in "ESLint couldn't determine the plugin "vue" uniquely."
    'plugin:vue-pug/vue3-recommended',
    // '@vue/eslint-config-prettier',
    'prettier',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
  },
}
