<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ToggleTheme from '../components/ToggleTheme.vue'
</script>

<template>
  <div class="view-layout">
    <header>
      <RouterLink to="/">
        <img alt="Smile And Learn logo" class="logo" src="@/assets/Smile-and-learn.png" />
      </RouterLink>
      <slot name="header"></slot>
      <div class="fixed-circles">
        <img src="@/assets/circle-bubble.svg" />
        <img src="@/assets/circle-bubble.svg" />
        <img src="@/assets/circle-bubble.svg" />
      </div>
      <ToggleTheme />
    </header>
    <slot />
    <div class="bottom-waves">
      <img src="@/assets/bottom-waves.svg" />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.view-layout
	height: 100%
	display: flex
	flex-direction: column

header
	padding: 2vh 24px 0
	position: relative
	display: flex
	justify-content: space-between

	img
		max-width: 257px

.fixed-circles
	img
		position: absolute
		z-index: 0

		&:nth-child(1)
			top: 80px
			right: 88px
		&:nth-child(2)
			width: 310px
			top: -110px
			right: -164px
		&:nth-child(3)
			width: 102px
			left: -60px
			top: 140px

.bottom-waves
	position: relative
	overflow: hidden
	min-height: 80px
	width: 100%
	height: 120px

	img
		width: 120%
		left: 50%
		transform: translateX(-50%)
		top: 40px
		position: absolute

// All except xl screen
@media screen and (max-width: $xl-breakpoint)
	header
		overflow: hidden
		height: 142px


// Only xl screen
@media screen and (min-width: $xl-breakpoint)
	header
		z-index: 4
		position: absolute
		left: 0px
		top: 0px
		width: 100%
		height: 380px
		max-width: 100vw
		min-height: 120px
		overflow: hidden

	.fixed-circles
		heigh: 100%
		img
			&:nth-child(3)
				top: inherit
				width: 132px
				left: -76px
				bottom: 40px

// Mobile and Tablet
@media screen and (max-width: $tablet-breakpoint)
	header
		img
			width: 60%

	.fixed-circles
		img
			&:nth-child(1)
				width: 32px
				top: 12px
				right: 80px
			&:nth-child(2)
				width: 190px
				top: -70px
				right: -124px

	.bottom-waves
		min-height: 120px
		img
			position: absolute
			width: 180%
			left: 50%
			top: auto
			bottom: -24px
			transform: translateX(-50%)
</style>
