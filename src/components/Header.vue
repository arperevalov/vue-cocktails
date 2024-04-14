<script setup lang="ts">
import { computed } from 'vue';
import useNavStore from '../store/nav';

const { getItems, hideItem, restoreItems } = useNavStore();

const items = computed(() => getItems());

const onRemoveButtonClick = (id: string) => {
    hideItem(id);
}
</script>

<template>
    <header class="header">
        <div v-for="item in items">
            <template v-if="item.visible">
                <RouterLink :to="item.id" class="header__link" active-class="active">
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
