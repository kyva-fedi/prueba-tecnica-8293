// Get Categories /api/categories  [?lang=en]
export interface CategoriesList {
  categoriesList: Category[]
}

// Get CategoryById /api/categories/id  [?lang=en]
interface Category {
  id: string
  name: LocalizedStr
  description: LocalizedStr
  videosList: Video[]
  videosTotalCount: number
}

// Get VideosByCategory /api/categories/id/videos [?lang=en]
export interface VideosList {
  videosList: Video[]
  videosTotalCount: number
  categoryId: string
}

// Get VideoById /api/videos/id  [?lang=en]
interface Video {
  id: string
  url: LocalizedStr
  title: LocalizedStr
  publishedAt: string
  categoryId: string
  thumbnail: Thumbnails
}

interface Thumbnails {
  small: Thumbnail
  big: Thumbnail
}

interface Thumbnail {
  url: LocalizedStr
  width: number
  height: number
}

export type Langs = 'es' | 'en' | 'pt' | 'it' // example

type LocalizedStr = string // Depends on [?lang=_Langs_]
