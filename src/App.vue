<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'

import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()

videosStore.fetchCategories()
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>
