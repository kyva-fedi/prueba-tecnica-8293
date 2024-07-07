<script setup lang="ts">
import type { Video } from '@/types'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import VideoThumbnail from './VideoThumbnail.vue'

const router = useRouter()

interface VideoItemProps extends Video {
  disabled?: boolean
}

const props = defineProps<VideoItemProps>()

const position = ref()

const getPosition = (event: MouseEvent) => {
  position.value = event.clientX
}

function navigateToPlayer(event: MouseEvent) {
  if (props.disabled) return
  // prevent navigation when scroll/slide
  if (event.clientX === position.value) {
    router.push({ path: '/video-player', query: { video: props.id, category: props.categoryId } })
  }
}
</script>

<template>
  <div
    class="video-item"
    :class="{ disabled: props.disabled }"
    @mouseup="navigateToPlayer"
    @mousedown="getPosition"
  >
    <VideoThumbnail :disabled="props.disabled">
      <img :src="props.thumbUrl" alt="" />
    </VideoThumbnail>
    <div class="title">{{ props.name }}</div>
  </div>
</template>

<style lang="sass">
@import '@/styles/vars'

.video-item
	display: flex
	flex-direction: column
	gap: 16px
	// width: 340px
	height: 100%
	justify-content: space-between
	align-items: center
	cursor: pointer
	padding: 0 24px
	padding-bottom: 32px

	.title
		font-size: 28px
		text-align: center
		color: var(--primary-dark)
		flex: 1
		display: flex
		align-items: flex-start

	&.disabled
		.title
			color: grey
			cursor: auto

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
	.video-item
		width: 90%
		// height: auto
		padding-bottom: 12px
		.title
				font-size: 18px
		.video-thumbnail
			width: 100%
			aspect-ratio: 16/9
			height: auto
</style>
