<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <main class="main">
    <div class="main__nav">
      <Header />
    </div>
    <div class="main__content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped lang="sass">
.main
  margin: auto
  max-width: 1024px
  width: 100%
  display: flex
  flex-wrap: wrap

  &__nav
    flex: 0 0 auto
    width: 100%

  &__content
    flex:  0 0 auto
    width: 100%

</style>
