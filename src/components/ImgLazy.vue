<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref } from 'vue';

const props = defineProps<{src: string, alt: string}>();

const element = ref();

const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const { isIntersecting } = entries[0];
    if (isIntersecting) {
        updateSource(props.src)
        observer.disconnect();
    }
}

const updateSource = (source: string) => {
    element.value.src = source;
}

const observer = new IntersectionObserver(onIntersection);

watch(() => [props.src], () => {
    updateSource(props.src);
})

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