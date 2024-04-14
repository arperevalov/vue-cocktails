<script setup lang="ts">
import { computed, onMounted } from 'vue';
import useNavStore from '../store/nav';
import useLocalStorageDeletedCocktails from '../composables/useLocalStorageDeletedCocktails';

const { getItems, hideItem, restoreItems, setRemovedValues } = useNavStore();
const { getStorageItems } = useLocalStorageDeletedCocktails();

const items = computed(() => getItems());

const onRemoveButtonClick = (id: string) => {
    hideItem(id);
}

onMounted(() => {
    const values = getStorageItems();
    setRemovedValues(values);
})
</script>

<template>
    <header class="header">
        <div v-for="item in items">
            <template v-if="item.visible">
                <RouterLink :to="`/cocktail/${item.id}`" class="header__link" active-class="active">
                    {{ item.name }}
                </RouterLink>

                <button @click="() => { onRemoveButtonClick(item.id) }" type="button">
                    Удалить
                </button>
            </template>
        </div>
        <RouterLink to="/404" class="header__link" active-class="active">
            404
        </RouterLink>
        <button @click="restoreItems" type="button">
            Восстановить удаленные
        </button>
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
