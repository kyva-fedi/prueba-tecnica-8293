<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="main-layout">
    <header>
      <RouterLink to="/">
        <img alt="Smile And Learn logo" class="logo" src="@/assets/Smile-and-learn.png" />
      </RouterLink>
      <slot name="header"></slot>
    </header>
    <div class="fixed-circles">
      <img src="@/assets/circle-bubble.svg" />
      <img src="@/assets/circle-bubble.svg" />
      <img src="@/assets/circle-bubble.svg" />
    </div>
    <slot />
    <div class="bottom-waves">
      <img src="@/assets/bottom-waves.svg" />
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.main-layout
	background: #f6f6f6
	height: 100%
	display: flex
	flex-direction: column
header
	padding: 2vh 24px 0
	z-index: 4
	position: fixed
	left: 0px
	top: 0px
	position: relative

.fixed-circles
	img
		position: absolute
		z-index: 0

		&:nth-child(1)
			top: 16px
			right: 180px
		&:nth-child(2)
			width: 310px
			top: -110px
			right: -164px
		&:nth-child(3)
			width: 132px
			left: -76px
			top: 80px

.bottom-waves
	position: relative
	overflow: hidden
	min-height: 80px
	width: 100%

	img
		width: 100%
		left: 0
		top: 0
		position: absolute

// All except desktop
@media screen and (max-width: $desktop-breakpoint)
	header
		img
			width: 80%

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
	header
		position: relative
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
			&:nth-child(3)
				width: 102px
				left: -60px
				top: 140px
</style>
