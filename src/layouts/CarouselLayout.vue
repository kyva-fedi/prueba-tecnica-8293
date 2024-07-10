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
    <template #addons>
      <Navigation />
      <Pagination v-if="props.controls" />
    </template>
  </Carousel>
</template>

<style lang="sass">
@import '@/styles/vars'

.carousel__next, .carousel__prev
	display: none
	margin: 0

// Mobile and Tablet
@media screen and (max-width: $tablet-breakpoint)
.carousel__next, .carousel__prev
	display: inline
</style>
