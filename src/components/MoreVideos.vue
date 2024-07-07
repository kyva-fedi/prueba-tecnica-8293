<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import VideoItem from '../components/VideoItem.vue'
import type { Video } from '@/types'
import { ref, watch } from 'vue'
import { useVideosStore } from '@/stores/videos'

const props = defineProps<{ videos: Video[] }>()
const videosStore = useVideosStore()

const moreThanFour = ref(props.videos.length > 4)

const wrapAround = true

const settings = {
  itemsToShow: 1,
  wrapAround
}

const breakpoints = {
  804: {
    itemsToShow: 2,
    wrapAround
  },
  1000: {
    itemsToShow: 2.5,
    wrapAround
  },
  1386: {
    itemsToShow: 3.5,
    wrapAround
  },
  // 1300 and up
  1560: {
    itemsToShow: 4,
    wrapAround
  }
}

watch(props, () => {
  moreThanFour.value = props.videos.length > 4
})

console.log('videos', props.videos)
</script>

<template>
  <div class="more-videos">
    <Carousel v-if="moreThanFour && props.videos" :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="video in props.videos" :key="video.id">
        <VideoItem v-bind="video" :disabled="videosStore.activeVideo?.id === video.id" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div v-else class="small-carousel">
      <VideoItem
        v-for="video in props.videos"
        :key="video.id"
        v-bind="video"
        :disabled="videosStore.activeVideo?.id === video.id"
      />
    </div>
  </div>
</template>

<style lang="sass">
@import '@/styles/vars'

.small-carousel
	display: flex
	justify-content: center
	padding: 0 40px
	gap: 24px
	margin: auto

	.video-item
		width: 420px

.more-videos
	.carousel__next, .carousel__prev
		display: none

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
	.more-videos
		.carousel__next, .carousel__prev
			display: inline
</style>
