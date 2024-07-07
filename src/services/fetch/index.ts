// https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails

import { apiUrl, youtube } from '../../config'

const headers = new Headers()
headers.set('Content-Type', 'application/json; charset=UTF-8')

export const getReq = <T>(url: string): Promise<T> =>
  new Promise((resolve) => {
    fetch(`${apiUrl}${url}`, {
      method: 'GET',
      headers: headers
    })
      .then((response) => {
        response.json().then((projects) => {
          resolve(projects)
        })
      })
      .catch((e) => console.log('Custom API Fetch error: ', e))
  })

export const youtubeReq = <T>(url: string, params: string): Promise<T> =>
  new Promise((resolve) => {
    console.log('FetchURL: ', `${youtube.apiUrl}${url}?key=${youtube.authKey}${params}`)
    fetch(`${youtube.apiUrl}${url}?key=${youtube.authKey}${params}`, {
      method: 'GET',
      headers: headers
    })
      .then((response) => {
        response.json().then((projects) => {
          resolve(projects)
        })
      })
      .catch((e) => console.log('Custom API Fetch error: ', e))
  })
