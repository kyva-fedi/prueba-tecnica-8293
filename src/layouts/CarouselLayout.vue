<script setup lang="ts">
import { Carousel, Navigation, Pagination } from 'vue3-carousel'
import { settings, breakpoints } from '../constants'

const props = withDefaults(defineProps<{ controls?: boolean }>(), {
  controls: true
})
</script>

<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <slot />
    <template #addons v-if="props.controls">
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.carousel__next, .carousel__prev
	display: none

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
.carousel__next, .carousel__prev
	display: inline
</style>
