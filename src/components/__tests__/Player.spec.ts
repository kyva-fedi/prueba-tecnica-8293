import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import VideoThumbnail from '../VideoThumbnail.vue'

describe('VideoThumbnail', () => {
  it('renders playing-icon when disabled', () => {
    const wrapper = mount(VideoThumbnail, { props: { disabled: true } })

    const element = wrapper.find('.playing-icon')
    expect(element.exists()).toBe(true)
  })
  it('don´t renders playing-icon when active', () => {
    const wrapper = mount(VideoThumbnail, { props: { disabled: false } })

    const element = wrapper.find('.playing-icon')
    expect(element.exists()).toBe(false)
  })
})
