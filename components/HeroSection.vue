<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero__grid">
      <div class="hero__text">
        <p class="eyebrow">Страницы памяти и QR-таблички</p>
        <h1 id="hero-title" class="hero__title">
          Память,<br />
          которая <span class="accent">всегда рядом</span>
        </h1>
        <p class="hero__lead">
          Создаём цифровые страницы памяти и таблички в форме свечи для памятника.
          Родные сканируют QR-код — и открывается жизнь человека: биография,
          фотографии и видео, воспоминания близких, карта захоронения и книга
          соболезнований.
        </p>
        <div class="hero__actions">
          <a class="btn btn--gold" href="#contact">
            Оставить заявку
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
          <a class="btn btn--ghost" href="#examples">Смотреть примеры</a>
        </div>
        <ul class="hero__facts">
          <li>от 4 900 ₽</li>
          <li>Разовая оплата</li>
          <li>Бессрочное хранение</li>
          <li>Без подписок</li>
        </ul>
      </div>

      <div class="hero__visual">
        <div class="scene" aria-hidden="true">
          <div class="scene__halo"></div>
          <div class="scene__ring"></div>
          <div class="phone">
            <img :src="phoneImage" alt="" width="900" height="1600" />
          </div>
          <CandlePlate class="plate-float" />
          <p class="scene__note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M4 8V5.8A1.8 1.8 0 0 1 5.8 4H8M16 4h2.2A1.8 1.8 0 0 1 20 5.8V8M20 16v2.2a1.8 1.8 0 0 1-1.8 1.8H16M8 20H5.8A1.8 1.8 0 0 1 4 18.2V16" stroke-linecap="round" />
              <path d="M8 12h8" stroke-linecap="round" opacity=".5" />
            </svg>
            Наведите камеру — откроется страница памяти
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CandlePlate from './CandlePlate.vue'
import { examples } from '../content'

const phoneImage = examples[1]?.image ?? ''
</script>
