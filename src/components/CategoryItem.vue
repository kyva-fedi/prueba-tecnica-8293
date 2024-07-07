<script setup lang="ts">
import type { Category } from '@/types'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import VideoThumbnail from './VideoThumbnail.vue'

const router = useRouter()
const props = defineProps<Category>()

const position = ref()

const getPosition = (event: MouseEvent) => {
  position.value = event.clientX
}

function navigateToPlayer(event: MouseEvent) {
  // prevent navigation when scroll/slide
  if (event.clientX === position.value) {
    router.push({ path: '/video-player', query: { category: props.id } })
  }
}
</script>

<template>
  <div class="category-item" @mouseup="navigateToPlayer" @mousedown="getPosition">
    <div class="title">{{ props.name }}</div>
    <VideoThumbnail color="secondary">
      <img :src="props.thumbUrl" alt="" />
    </VideoThumbnail>
    <div class="video-count">{{ props.videosCount }} {{ $t('videos') }}</div>
  </div>
</template>

<style scoped lang="sass">
.category-item
	display: flex
	flex-direction: column
	gap: 16px
	height: 100%
	justify-content: space-between
	align-items: center
	cursor: pointer
	padding: 0 24px

	&:hover
		.category-thumbnail
			img
				width: 108%
				height: 118%
			.play
				opacity: 1
				transform: translate(-50%, -50%) rotate(0deg)
			.dark-overlay
				opacity: 1

	.video-count
		font-size: 24px
		text-align: right
		max-width: 340px
		width: 100%
		padding: 0 16px

	.title
		font-size: 28px
		text-align: center
		color: var(--primary-dark)
		flex: 1
		display: flex
		align-items: flex-end
</style>
