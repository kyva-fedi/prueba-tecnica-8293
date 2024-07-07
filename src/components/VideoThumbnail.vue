<script setup lang="ts">
import PlayIcon from './Icons/PlayIcon.vue'
import PlayingIcon from './Icons/PlayingIcon.vue'

const props = withDefaults(defineProps<{ color?: 'primary' | 'secondary'; disabled: boolean }>(), {
  color: 'primary',
  disabled: false
})
</script>

<template>
  <div
    class="video-thumbnail"
    :class="{ disabled: props.disabled, secondary: props.color === 'secondary' }"
  >
    <slot />
    <div class="dark-overlay" />
    <PlayIcon color="var(--primary)" />
    <PlayingIcon v-if="props.disabled" />
  </div>
</template>

<style lang="sass">
.video-thumbnail
	overflow: hidden
	border-radius: 10px
	border: 4px solid var(--primary-dark)
	background: var(--primary-soft)
	// width: 380px
	height: 220px
	display: flex
	justify-content: center
	align-items: center
	position: relative
	transition: all 0.2s ease-in-out

	.dark-overlay
		position: absolute
		background: var(--dark-overlay)
		width: 100%
		height: 100%
		opacity: 0
		transition: all 0.2s ease-in-out

	img
		width: 100%
		height: 135%
		object-fit: cover
		transition: all 0.4s ease-out

	.play-icon
		opacity: 0
		transform: translate(-50%, calc(-50% + 40px)) rotate(-25deg)

	&:hover
		width: 340px
		img
			width: 108%
			height: 118%
		.play-icon
			opacity: 1
			transform: translate(-50%, -50%) rotate(0deg)
		.dark-overlay
			opacity: 1

	&.secondary
		border-color: var(--secondary-dark)

	&.disabled
		border-color: grey
		width: 380px
		cursor: auto

		img
			width: 100%
			height: 135%

		.play-icon
			opacity: 0

		.dark-overlay
			opacity: 1
</style>
