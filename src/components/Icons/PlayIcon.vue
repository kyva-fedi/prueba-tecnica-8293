<script setup lang="ts">
const props = defineProps<{ color: string }>()
</script>

<template>
  <div class="play-icon">
    <svg
      width="183"
      height="209"
      viewBox="0 0 183 209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_3480)">
        <path
          d="M152.341 85.8703C166.072 94.4951 166.072 114.505 152.341 123.13L53.702 185.089C39.0508 194.292 20 183.761 20 166.459L20 42.541C20 25.2392 39.0507 14.7084 53.7019 23.9114L152.341 85.8703Z"
          :fill="props.color"
        />
        <path
          d="M150.214 89.2575C161.448 96.3142 161.448 112.686 150.214 119.742L51.5744 181.701C39.587 189.231 24 180.615 24 166.459L24 42.541C24 28.385 39.5869 19.7689 51.5743 27.2986L150.214 89.2575Z"
          stroke="white"
          stroke-width="8"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_3480"
          x="0"
          y="0.505741"
          width="182.639"
          height="207.988"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.956863 0 0 0 0 0.705882 0 0 0 0 0.290196 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3480" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3480"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<style scoped lang="sass">
.play-icon
	position: absolute
	width: 80px
	aspect-ratio: 1/1
	top: 50%
	left: 50%
	transition: all 0.2s ease-in-out
	transform: translate(-50%, -50%)

	svg
		width: 100%
		height: 100%
</style>
