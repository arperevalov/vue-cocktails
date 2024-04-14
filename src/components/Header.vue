<script setup lang="ts">
</script>

<template>
    <header class="header">
        <RouterLink to="/" class="header__link" active-class="active">
            Margarita
        </RouterLink>
        <RouterLink to="/cocktail/mojito" class="header__link" active-class="active">
            Mojito
        </RouterLink>
        <RouterLink to="/cocktail/a1" class="header__link" active-class="active">
            A1
        </RouterLink>
        <RouterLink to="/cocktail/kir" class="header__link" active-class="active">
            Kir
        </RouterLink>
        <RouterLink to="/404" class="header__link" active-class="active">
            404
        </RouterLink>
    </header>
</template>

<style scoped lang="sass">
.header
    display: flex
    flex-direction: column

    &__link
        text-decoration: none
        color: black

        &.active
            font-weight: 600
            color: red
</style>
