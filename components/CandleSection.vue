<template>
  <section id="candle" class="section section--night" aria-labelledby="candle-title">
    <div class="container candle__grid">
      <div class="candle__copy" data-reveal>
        <p class="eyebrow">Табличка в форме свечи</p>
        <h2 id="candle-title" class="title">Свеча — символ вне&nbsp;конфессий</h2>
        <p class="lead">
          Свеча не принадлежит какой-то одной конфессии. Это общий для людей
          знак памяти: его понимают и верующие, и те, кто далёк от церкви.
          Табличка-свеча не навязывает обряд — она просто говорит: здесь помнят.
        </p>
        <ul class="ticks">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            Подходит верующим и неверующим — не требует обряда и ритуала
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            Крепится на памятник или рядом с ним — без питания, обслуживания и ухода
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            QR-код открывает страницу с любого телефона, без приложений и регистрации
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            Материал и размер подбираем под конкретный памятник
          </li>
        </ul>
        <p class="candle__quote">Свечу зажигают, чтобы помнить.<br />Теперь она ещё и открывает историю.</p>
      </div>

      <div class="candle__scene" data-reveal>
        <div class="candle__halo"></div>
        <div class="stele">
          <CandlePlate class="stele__plate" />
        </div>
        <div class="plinth"></div>
        <div class="candle__ground"></div>
        <p class="candle__caption">Табличка-свеча с QR-кодом на памятнике</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CandlePlate from './CandlePlate.vue'
</script>
