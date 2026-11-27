<template>
  <svg class="plate-svg" viewBox="0 0 200 300" role="img" aria-label="Квадратная металлическая табличка в форме свечи с QR-кодом">
    <defs>
      <linearGradient id="tp-metal" x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0" stop-color="#F8F4EC" />
        <stop offset="0.26" stop-color="#E6E0D3" />
        <stop offset="0.54" stop-color="#CFC9BB" />
        <stop offset="0.76" stop-color="#DFD9CC" />
        <stop offset="1" stop-color="#B6B0A2" />
      </linearGradient>
      <linearGradient id="tp-sheen" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.55" />
        <stop offset="0.45" stop-color="#FFFFFF" stop-opacity="0" />
        <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.18" />
      </linearGradient>
      <linearGradient id="tp-flame" x1="0.2" y1="1" x2="0.7" y2="0">
        <stop offset="0" stop-color="#D07E1C" />
        <stop offset="0.35" stop-color="#EAAE4E" />
        <stop offset="0.7" stop-color="#F8D98F" />
        <stop offset="1" stop-color="#FFF2CE" />
      </linearGradient>
      <radialGradient id="tp-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#F0C273" stop-opacity="0.45" />
        <stop offset="1" stop-color="#F0C273" stop-opacity="0" />
      </radialGradient>
    </defs>

    <ellipse cx="100" cy="100" rx="58" ry="92" fill="url(#tp-glow)" />

    <path
      d="M100 8 C108 36 118 58 123 82 C127 102 126 124 122 142 C110 146 90 146 78 142 C74 124 73 102 77 82 C82 58 92 36 100 8 Z"
      fill="url(#tp-flame)"
    />
    <path
      d="M100 78 C96 94 91 108 91 120 C91 132 95 139 100 143 C105 139 109 132 109 120 C109 108 104 94 100 78 Z"
      fill="#FFF8E6"
      opacity="0.55"
    />

    <rect x="30" y="140" width="140" height="140" rx="6" fill="url(#tp-metal)" />
    <rect x="30" y="140" width="140" height="140" rx="6" fill="url(#tp-sheen)" />
    <rect x="31" y="141" width="138" height="138" rx="5" fill="none" stroke="#8E887A" stroke-width="1" />
    <rect x="34.5" y="144.5" width="131" height="131" rx="4" fill="none" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="1" />

    <image :href="images.qrInk" x="46" y="156" width="108" height="108" />
  </svg>
</template>

<script setup lang="ts">
import { images } from '../content'
</script>
