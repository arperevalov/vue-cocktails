<script setup lang="ts">
import useNavStore from '../store/nav';

const { restoreItems } = useNavStore();

const onClick = () => {
    restoreItems();
}
</script>

<template>
    <div class="restore-button">
        <button class="restore-button__element" @click="onClick" type="button">
            Восстановить удаленные
        </button>
    </div>
</template>

<style scoped lang="sass">
    .restore-button
        position: fixed
        right: 0
        bottom: 0
        padding: 40px
        pointer-events: none

        &__element
            pointer-events: all
</style>