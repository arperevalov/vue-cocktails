<script setup lang="ts">
import { useRoute } from 'vue-router';
import useDefaultStore from '../store/default';
import { computed, watch } from 'vue';

const { getCocktail, setCocktail } = useDefaultStore();
const route = useRoute();

setCocktail(route.params.name as string);

const cocktail = computed(() => getCocktail(route.params.name as string));

watch(() => [route.params.name], () => {
    setCocktail(route.params.name as string);
});
</script>

<template>
    <template v-if="cocktail">
        <div>
            <strong>
                {{ cocktail.strDrink }}
            </strong>
        </div>
        <div>
            {{ cocktail.strCategory }}
            {{ cocktail.strAlcoholic }}
            {{ cocktail.strGlass }}
        </div>
        <div>
            <strong>
                List of ingredients
            </strong>
        </div>
        <div v-for="index in 14">
            {{ cocktail[`strIngredient${index}`] }}
            {{ cocktail[`strMeasure${index}`] }}
        </div>
        <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
    </template>
</template>

<style scoped>
</style>
