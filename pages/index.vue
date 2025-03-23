<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
    <UContainer>
        <ContentRenderer v-if="home" :value="home" />
        <div v-else>Home not found</div>
        <hr />
        The text on this page is licensed under CC-BY-SA 4.0
    </UContainer>
</template>