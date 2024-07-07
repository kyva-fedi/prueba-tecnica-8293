import './styles/global.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

import App from './App.vue'
import router from './router'
// @ts-ignore-next-line
import VueYtframe from 'vue3-ytframe'

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    en,
    es
  }
})

const app = createApp(App)

app.use(VueYtframe)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
