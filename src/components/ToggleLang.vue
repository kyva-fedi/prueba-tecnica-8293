<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<template>
  <button
    class="toggle-lang"
    aria-label="Switch lang"
    @click="() => (locale = locale === 'es' ? 'en' : 'es')"
  >
    {{ locale }}
  </button>
</template>

<style scoped lang="sass">
.toggle-lang
	color: var(--font-color)
	text-transform: uppercase
	font-size: 23px
	padding-top: 2px
</style>
