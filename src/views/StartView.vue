<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Slide } from 'vue3-carousel'
import CategoryItem from '../components/CategoryItem.vue'
import CarouselLayout from '../layouts/CarouselLayout.vue'

import { ref } from 'vue'
const user = ref({
  name: 'Laura'
})

import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()
</script>

<template>
  <div class="start-view">
    <h2>
      {{ $t('hello') }}, <span class="name">{{ user.name }}</span
      ><br />
      {{ $t('whatYouWantToLearn') }}
    </h2>
    <div class="categories-carousel">
      <CarouselLayout :controls="false">
        <Slide class="category" v-for="category in videosStore.categoriesList" :key="category.id">
          <CategoryItem v-bind="category" />
        </Slide>
      </CarouselLayout>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.start-view
	flex: 1
	display: flex
	flex-direction: column
	padding-bottom: 80px
	z-index: 4
	margin-top: 14vh

h2
	text-align: center
	.name
		text-transform: capitalize
		color: var(--primary-dark)

.categories-carousel
	padding: 40px 0
	flex: 1
	display: flex
	flex-direction: column
	justify-content: center

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
	.start-view
		margin-top: 0px
		padding-bottom: 0px

		h2
			padding: 8px 24px
			font-size: 42px

	.categories-carousel
		padding-top: 48px
</style>
