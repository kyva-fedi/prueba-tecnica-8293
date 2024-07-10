<script setup lang="ts">
import { useVideosStore } from '@/stores/videos'
import { useRoute, useRouter } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'
import { Slide } from 'vue3-carousel'
import CategoryItem from '../components/CategoryItem.vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import MoreVideos from '../components/MoreVideos.vue'
import CarouselLayout from '../layouts/CarouselLayout.vue'
import { watch } from 'vue'

const route = useRoute()
const router = useRouter()

const videosStore = useVideosStore()

if (typeof route.query.category === 'string') {
  videosStore.fetchCategoryById(route.query.category)
} else {
  router.replace('/')
}

watch(route, () => {
  if (typeof route.query.category === 'string') {
    if (typeof route.query.video === 'string') {
      videosStore.setCurrentVideo({ videoId: route.query.video, categoryId: route.query.category })
    } else {
      videosStore.fetchCategoryById(route.query.category)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
})
</script>

<template>
  <div class="video-player-view">
    <div class="category-info">
      <h1>{{ videosStore.category?.name }}</h1>
    </div>
    <div class="video-player-section">
      <div class="video-wrapper">
        <VideoPlayer :video="videosStore.activeVideo" />
        <div class="video-name">{{ videosStore.activeVideo?.name }}</div>
      </div>
    </div>
    <MoreVideos v-if="videosStore.category" :videos="videosStore.category.videosList!" />
    <section class="all-categories">
      <h2>{{ $t('allCategories') }}</h2>
      <div class="categories-carousel">
        <CarouselLayout :controls="false">
          <Slide v-for="category in videosStore.categoriesList" :key="category.id">
            <CategoryItem v-bind="category" />
          </Slide>
        </CarouselLayout>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.video-player-view


.category-info
	display: flex
	justify-content: center

	h1
		font-size: 42px
		max-width: 60vw
		text-align: center

.video-player-section
	margin: 6vh auto
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center

	.video-wrapper
		max-width: 70vw

	.video-name
		font-size: 24px
		margin-top: 24px
		padding: 0 16px

section.all-categories
	margin-top: 120px
	padding: 80px 0

	h2
		text-align: center
		margin-bottom: 40px

// Only xl screen
@media screen and (min-width: $xl-breakpoint)
	.video-player-view
		padding: 0 0 60px
		margin-top: 8vh
	.video-player-section
		.video-wrapper
			width: 65vw
			max-width: 900px
			min-width: 700px

// Mobile and Tablet
@media screen and (max-width: $tablet-breakpoint)
	.video-player-view
		padding: 40px 0
	.category-info
		padding: 24px 8vw
		min-height: 140px
		display: flex
		align-items: center

		h1
			font-size: 32px
			max-width: inherit

	.video-player-section
		margin-top: 6vh
		margin-bottom: 12vh
		padding: 0

		.video-wrapper
			width: 100vw
			max-width: inherit

		.video-name
			font-size: 20px

	section.all-categories
		margin-top: 80px
		padding: 40px 0
</style>
