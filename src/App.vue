<script setup lang="ts">
import { RouterView } from 'vue-router'
import ViewLayout from './layouts/ViewLayout.vue'

import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()

videosStore.fetchCategories()
</script>

<template>
  <ViewLayout>
    <RouterView />
  </ViewLayout>
</template>
