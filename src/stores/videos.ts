import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Category, Video } from '@/types'
import { videosService } from '@/services/fetch/modules/videos'

export const useVideosStore = defineStore('videos', () => {
  const categoriesList = ref<Category[]>([])
  const category = ref<Category>()
  const activeVideo = ref<Video>()
  const fetchLoading = ref(false)

  function fetchCategories() {
    fetchLoading.value = true

    videosService.getAllCategories().then((res) => {
      categoriesList.value = res
      fetchLoading.value = false
    })
  }

  function fetchCategoryById(id: string) {
    console.log('fetching category')
    fetchLoading.value = true

    videosService.getCategoryById(id).then((res) => {
      const actualCategory = categoriesList.value.filter((val) => val.id === id)[0]
      category.value = {
        ...actualCategory,
        videosList: res
      }
      activeVideo.value = res[0]
      fetchLoading.value = false
    })
  }

  function setCurrentVideo({ videoId }: { videoId: string; categoryId: string }) {
    // const actualCategory = categoriesList.value.filter((val) => val.id === id)[0]
    // category.value = {
    //   ...actualCategory,
    //   videosList: res
    // }
    const video = category.value?.videosList?.filter((val) => val.id === videoId)[0]
    if (!video) return
    activeVideo.value = video
  }

  return {
    categoriesList,
    category,
    activeVideo,
    setCurrentVideo,
    fetchCategories,
    fetchCategoryById
  }
})
