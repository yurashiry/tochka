<template>
  <header class="site-header">
    <div class="container header__inner">
      <a class="brand-link" href="/" aria-label="Точка памяти — на главную">
        <BrandLockup />
      </a>
      <nav class="nav" aria-label="Разделы страницы">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      <div class="header__cta">
        <a class="btn btn--gold btn--sm" href="#contact">Оставить заявку</a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BrandLockup from './BrandLockup.vue'
import { nav } from '../content'
</script>
