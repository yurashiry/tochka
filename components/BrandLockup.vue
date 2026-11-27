<template>
  <span class="brand" :class="{ 'brand--light': tone === 'light' }">
    <img
      class="brand__mark"
      :src="tone === 'light' ? images.markLight : images.mark"
      alt=""
      width="320"
      height="319"
    />
    <span class="brand__lockup">
      <span class="brand__name">Точка памяти</span>
      <span class="brand__tagline">Всегда рядом</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { images } from '../content'

withDefaults(defineProps<{ tone?: 'dark' | 'light' }>(), { tone: 'dark' })
</script>
