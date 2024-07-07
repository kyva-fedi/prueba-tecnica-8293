<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import CategoryItem from '../components/CategoryItem.vue'
import { ref } from 'vue'
const user = ref({
  name: 'Laura'
})

import { useVideosStore } from '@/stores/videos'

const videosStore = useVideosStore()

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
</script>

<template>
  <div class="start-view">
    <h2>
      {{ $t('hello') }}, <span class="name">{{ user.name }}</span
      ><br />
      ¿Qué quieres aprender hoy?
    </h2>
    <!-- <div class="categories-carousel">
      <div class="wrapper">
        <div class="category" v-for="category in videosStore.categoriesList" :key="category.id">
          <CategoryItem v-bind="category" />
        </div>
      </div>
    </div> -->
    <div class="categories-carousel">
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide class="category" v-for="category in videosStore.categoriesList" :key="category.id">
          <CategoryItem v-bind="category" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<style scoped lang="sass">
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
</style>
