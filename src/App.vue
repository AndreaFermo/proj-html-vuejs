<template>
  <PageHeader :navbarSelections="store.navbarSelections" />
  <PageMain />
  <PageFooter :links="store.usefulLinks" :socialIcons="store.socialIcons" />
</template>
<script >
import { store } from './store.js';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      store
    }
  }
}
</script>
<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables';
</style>
