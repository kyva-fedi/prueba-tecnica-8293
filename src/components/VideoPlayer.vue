<script setup lang="ts">
import type { Video } from '@/types'
import { nextTick, ref, watch } from 'vue'
import PlayIcon from './Icons/PlayIcon.vue'
import { useRoute } from 'vue-router'
import type { YoutubePlayer } from '@/types/youtubeAPI'

const props = defineProps<{ video: Video | undefined }>()

const isVideoPlaying = ref(false)
const yt = ref<YoutubePlayer | null>(null)

const route = useRoute()

const playVideo = () => {
  isVideoPlaying.value = true
  nextTick(() => {
    yt.value?.playVideo()
  })
}

watch(route, () => {
  isVideoPlaying.value = false
  yt.value?.stopVideo()
})
</script>

<template>
  <div class="video-player" @click="playVideo">
    <div v-if="!props.video">Loading...</div>
    <div v-else>
      <div class="youtube-wrapper" :class="{ hidden: !isVideoPlaying }">
        <VueYtframe
          ref="yt"
          :video-id="props.video?.id"
          :player-vars="{ autoplay: 0, listType: 'user_uploads' }"
        />
      </div>
      <div :class="{ hidden: isVideoPlaying }">
        <img :src="props.video?.img" alt="" />
        <PlayIcon color="var(--primary)" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.video-player
	border-radius: 20px
	border: 8px solid var(--secondary-dark)
	background: var(--primary-soft)
	aspect-ratio: 16/9.11
	// height: 60vh
	max-width: 900px
	position: relative
	cursor: pointer
	overflow: hidden
	box-shadow: 0 4px 10px 0 rgba(244, 180, 74, 1)
	margin: auto

	& > div
		width: 100%
		height: 100%
		display: flex
		align-items: center
		justify-content: center

	.youtube-wrapper
		width: 101%
		height: 101%

	img
		width: 101%
		height: 101%
		object-fit: cover
		object-position: center

	.play-icon
		width: 160px

	&:hover
		.play-icon
			width: 180px

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
	.video-player
		border-width: 0px
		border-radius: 0
		box-shadow: 0 0px 10px 0 rgba(244, 180, 74, 1)

		.play-icon
			width: 100px

		&:hover
			.play-icon
				width: 120px
</style>
