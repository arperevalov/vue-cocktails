<script setup lang="ts">
import { computed, onMounted } from 'vue';
import useNavStore from '../store/nav';
import RestoreButton from './RestoreButton.vue';
import useLocalStorageDeletedCocktails from '../composables/useLocalStorageDeletedCocktails';

const { getItems, hideItem, setRemovedValues } = useNavStore();
const { getStorageItems } = useLocalStorageDeletedCocktails();

const items = computed(() => getItems());

const onRemoveButtonClick = (id: string, name: string) => {
    const confirmation = confirm(`Вы точно хотите удалить ${name}?`);
    if (confirmation) {
        hideItem(id);
    }
}

onMounted(() => {
    const values = getStorageItems();
    setRemovedValues(values);
})
</script>

<template>
    <header class="header">
        <div v-for="item, index in items">
            <template v-if="item.visible">
                <RouterLink :to="index === 0 ? `/` : `/cocktail/${item.id}`" class="header__link" active-class="active">
                    {{ item.name }}
                </RouterLink>

                <button @click="() => { onRemoveButtonClick(item.id, item.name) }" type="button">
                    Удалить
                </button>
            </template>
        </div>
        <RouterLink to="/404" class="header__link" active-class="active">
            404
        </RouterLink>
        <RestoreButton />
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
