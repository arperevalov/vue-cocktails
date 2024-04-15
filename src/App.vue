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
  margin: 1rem auto
  max-width: 1024px
  width: 100%
  display: flex
  flex-wrap: wrap
  @media screen and (min-width: 768px)
    border: 1px solid black

  &__nav,
  &__content
    flex: 0 0 auto
    width: 100%
    padding: 1rem

  &__nav
    @media screen and (min-width: 768px)
      width: 30%
      border-right: 1px solid black

  &__content
    @media screen and (min-width: 768px)
      width: 70%

</style>
