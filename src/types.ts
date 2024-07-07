export interface Video {
  id: string
  publishedAt: string
  name: string
  thumbUrl: string
  img: string
  categoryId: string
}

export interface Category {
  id: string
  name: string
  thumbUrl: string
  videosCount: number
  videosList?: Video[]
}
