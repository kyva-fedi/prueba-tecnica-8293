<script setup lang="ts">
import type { Video } from '@/types'
import VideoItem from '../components/VideoItem.vue'
import { Slide } from 'vue3-carousel'
import CarouselLayout from '../layouts/CarouselLayout.vue'
import { ref, watch } from 'vue'
import { useVideosStore } from '@/stores/videos'

const props = defineProps<{ videos: Video[] }>()
const videosStore = useVideosStore()

const moreThanFour = ref(props.videos.length > 4)

watch(props, () => {
  moreThanFour.value = props.videos.length > 4
})

console.log('videos', props.videos)
</script>

<template>
  <div class="more-videos">
    <CarouselLayout v-if="moreThanFour && props.videos">
      <Slide v-for="video in props.videos" :key="video.id">
        <VideoItem v-bind="video" :disabled="videosStore.activeVideo?.id === video.id" />
      </Slide>
    </CarouselLayout>
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

.more-videos
	overflow: hidden

.small-carousel
	display: flex
	justify-content: center
	padding: 0 40px
	gap: 24px
	margin: auto

	.video-item
		width: 420px

// All except xl screen
@media screen and (max-width: $xl-breakpoint)
	.small-carousel
		flex-direction: column
		padding: 0 6vw

		.video-item
			width: 100%
</style>
