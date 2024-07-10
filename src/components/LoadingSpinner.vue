<script setup lang="ts"></script>

<template>
  <div class="loader"></div>
</template>

<style scoped lang="sass">
@import '@/styles/animations'
.loader
	width: 48px
	height: 48px
	border-radius: 50%
	position: relative
	animation: rotate 1s linear infinite

.loader::before
	content: ""
	box-sizing: border-box
	position: absolute
	inset: 0px
	border-radius: 50%
	border: 5px solid var(--font-color)
	animation: prixClipFix 2s linear infinite
</style>
