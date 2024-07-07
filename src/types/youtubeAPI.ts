export interface YoutubeAPI {
  kind: string
  etag: string
}

export interface PlaylistAPI extends YoutubeAPI {
  nextPageToken: string
  pageInfo: PageInfo
  items: Playlist[]
}

interface Playlist extends YoutubeAPI {
  id: string
  snippet: Snippet
  contentDetails: PlaylistContentDetails
}

export interface PlaylistItemAPI extends YoutubeAPI {
  items: PlaylistItem[]
}

interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

interface PlaylistItem extends YoutubeAPI {
  id: string
  snippet: PlaylistItemSnippet
  contentDetails: VideoContentDetails
}

interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  localized: Localized
}

interface PlaylistItemSnippet extends Snippet {
  resourceId: {
    videoId: string
  }
}

interface Thumbnails {
  default: Thumbnail
  medium: Thumbnail
  high: Thumbnail
  standard?: Thumbnail
  maxres?: Thumbnail
}

interface Thumbnail {
  url: string
  width: number
  height: number
}

interface Localized {
  title: string
  description: string
}

interface PlaylistContentDetails {
  itemCount: number
}

interface VideoContentDetails {
  videoId: string
  videoPublishedAt: string
}

export interface YoutubePlayer {
  playVideo: () => void
  stopVideo: () => void
}
