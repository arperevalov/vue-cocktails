<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useDefaultStore from '../store/default';
import { computed, watch } from 'vue';
import useNavStore from '../store/nav';

const { getCocktail, setCocktail } = useDefaultStore();
const { getItems } = useNavStore();
const router = useRouter();
const route = useRoute();

const navItems = getItems();

const setCocktailAction = () => {
    const value = route.params.name as string ?? navItems[0].id;
    setCocktail(value)
    .catch(() => {
        router.push('/404');
    });
}

setCocktailAction();

const cocktail = computed(() => getCocktail(route.params.name as string ?? navItems[0].id));

watch(() => [route.params.name], () => {
    setCocktailAction();
});

</script>

<template>
    <div class="cocktail" v-if="cocktail">
        <div class="cocktail__content">
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
        </div>
        <img class="cocktail__image" :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink">
    </div>
</template>

<style scoped lang="sass">
    .cocktail
        display: flex
        flex-wrap: wrap

        &__content,
        &__image
            flex: 0 0 auto
            width: 100%            
</style>
