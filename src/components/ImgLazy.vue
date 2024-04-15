<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<{src: string, alt: string}>();

const element = ref();

const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting) {
        element.value.src = props.src;
        observer.disconnect();
    }
}

const observer = new IntersectionObserver(onIntersection);

onMounted(() => {
    observer.observe(element.value);
})

onUnmounted(() => {
    observer.disconnect();
})
</script>

<template>
    <img ref="element">
</template>

<style scoped lang="sass">
</style>