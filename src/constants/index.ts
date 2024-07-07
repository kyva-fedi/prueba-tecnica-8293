import type { Category } from '@/types'

const wrapAround = true

export const settings = {
  itemsToShow: 1,
  wrapAround
}

export const breakpoints = {
  804: {
    itemsToShow: 2,
    wrapAround
  },
  1000: {
    itemsToShow: 2.5,
    wrapAround
  },
  1386: {
    itemsToShow: 3.5,
    wrapAround
  },
  // 1300 and up
  1560: {
    itemsToShow: 4,
    wrapAround
  }
}

export const categories: Category[] = [
  {
    id: '21342',
    name: 'Los Animales',
    thumbUrl: 'https://i.ytimg.com/vi/m19w0yoCwnw/hqdefault.jpg',
    videosList: [],
    videosCount: 8
  },
  {
    id: '21342',
    name: 'Las Plantas',
    thumbUrl: 'https://i.ytimg.com/vi/m19w0yoCwnw/hqdefault.jpg',
    videosList: [],
    videosCount: 3
  },
  {
    id: '21342',
    name: 'Canciones',
    thumbUrl: 'https://i.ytimg.com/vi/m19w0yoCwnw/hqdefault.jpg',
    videosList: [],
    videosCount: 2
  },
  {
    id: '21342',
    name: 'Los números',
    thumbUrl: 'https://i.ytimg.com/vi/m19w0yoCwnw/hqdefault.jpg',
    videosList: [],
    videosCount: 5
  },
  {
    id: '21342',
    name: 'El cuerpo humano',
    thumbUrl: 'https://i.ytimg.com/vi/m19w0yoCwnw/hqdefault.jpg',
    videosList: [],
    videosCount: 12
  }
]
