import type { PlaylistAPI, PlaylistItemAPI } from '@/types/youtubeAPI'
import { youtubeReq } from '..'
import type { Category, Video } from '@/types'

const PLAYLISTS_URL = '/playlists'
const PLAYLIST_ITEM_URL = '/playlistItems'
const CHANNEL_ID = 'UCCZpm6436NiU__lcBAlEZmQ'

const PLAYLISTS_PARAMS: { [key: string]: string | number } = {
  part: 'snippet,contentDetails',
  maxResults: 50
}

const getAllCategories = async () => {
  const params = `&channelId=${CHANNEL_ID}&${Object.keys(PLAYLISTS_PARAMS)
    .map((key) => `${key}=${PLAYLISTS_PARAMS[key]}`)
    .join('&')}`

  const rawReq = await youtubeReq<PlaylistAPI>(PLAYLISTS_URL, params)
  const categories = rawReq.items.map((rawItem) => {
    const category: Category = {
      id: rawItem.id,
      name: rawItem.snippet.title,
      thumbUrl: rawItem.snippet.thumbnails.high.url,
      videosCount: rawItem.contentDetails.itemCount
    }
    return category
  })
  return categories
}

const getCategoryById = async (categoryId: string) => {
  const params = `&playlistId=${categoryId}&${Object.keys(PLAYLISTS_PARAMS)
    .map((key) => `${key}=${PLAYLISTS_PARAMS[key]}`)
    .join('&')}`

  const rawReq = await youtubeReq<PlaylistItemAPI>(PLAYLIST_ITEM_URL, params)
  const videos = rawReq.items.map((rawItem) => {
    const thumbUrl = rawItem.snippet.thumbnails.high.url
    const video: Video = {
      id: rawItem.snippet.resourceId.videoId,
      publishedAt: rawItem.snippet.publishedAt,
      name: rawItem.snippet.title,
      thumbUrl: thumbUrl,
      img: rawItem.snippet.thumbnails.maxres?.url ?? thumbUrl,
      categoryId: categoryId
    }
    return video
  })
  return videos
}

export const videosService = {
  getAllCategories,
  getCategoryById
}
