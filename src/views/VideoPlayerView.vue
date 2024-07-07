<script setup lang="ts">
import { useVideosStore } from '@/stores/videos'
import { useRoute, useRouter } from 'vue-router'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import CategoryItem from '../components/CategoryItem.vue'
import VideoPlayer from '../components/VideoPlayer.vue'
import MoreVideos from '../components/MoreVideos.vue'
import { watch } from 'vue'

const route = useRoute()
const router = useRouter()

const videosStore = useVideosStore()

if (typeof route.query.category === 'string') {
  videosStore.fetchCategoryById(route.query.category)
} else {
  router.replace('/')
}

const settings = {
  itemsToShow: 1.5,
  wrapAround: true
}

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    wrapAround: true
  },
  1200: {
    itemsToShow: 3.5,
    wrapAround: true
  },
  // 1300 and up
  1560: {
    itemsToShow: 4,
    wrapAround: true
  }
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
      <div>
        <VideoPlayer :video="videosStore.activeVideo" />
        <div class="video-name">{{ videosStore.activeVideo?.name }}</div>
      </div>
    </div>
    <MoreVideos v-if="videosStore.category" :videos="videosStore.category.videosList!" />
    <section class="all-categories">
      <h2>Todas las categorias</h2>
      <div class="categories-carousel">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="category in videosStore.categoriesList" :key="category.id">
            <CategoryItem v-bind="category" />
          </Slide>
        </Carousel>
      </div>
    </section>
  </div>
</template>

<style scoped lang="sass">
@import '@/styles/vars'

.video-player-view
	padding: 0 0 60px
	margin-top: 8vh

.category-info
	display: flex
	justify-content: center
	// height: 80px

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

	& > div
		max-width: 55vw

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

// Mobile only
@media screen and (max-width: $mobile-breakpoint)
	.video-player-view
		margin-top: 40px

	.category-info
		padding: 24px 8vw
		min-height: 140px
		display: flex
		align-items: center

		h1
			font-size: 32px
			max-width: inherit

	.video-player-section
		margin-top: 10vh
		margin-bottom: 20vh
		padding: 0

		& > div
			max-width: inherit

		.video-name
			font-size: 20px

	section.all-categories
		margin-top: 80px
		padding: 40px 0
</style>
