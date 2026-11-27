<template>
  <section id="examples" class="section" aria-labelledby="examples-title">
    <div class="container">
      <div class="section-head" data-reveal>
        <p class="eyebrow">Примеры</p>
        <h2 id="examples-title" class="title">Так это выглядит</h2>
        <p class="lead">
          Три страницы, сделанные по заказу родственников. У каждой — свой
          характер, свои фотографии и своя интонация. Имена и снимки
          публикуются с согласия семьи.
        </p>
      </div>

      <div class="examples">
        <article v-for="ex in examples" :key="ex.id" class="example" data-reveal>
          <button
            type="button"
            class="example__frame"
            :aria-label="`Открыть страницу памяти: ${ex.name}`"
            @click="open(ex)"
          >
            <img :src="ex.image" :alt="ex.alt" loading="lazy" width="1100" height="1955" />
            <span class="example__open">
              Открыть страницу
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
          <div class="example__meta">
            <h3 class="example__name">{{ ex.name }}</h3>
            <p class="example__years">{{ ex.years }}</p>
            <p class="example__tag">{{ ex.tag }}</p>
            <p class="example__desc">{{ ex.description }}</p>
          </div>
        </article>
      </div>

      <p class="examples__note" data-reveal>
        По просьбе заказчика некоторые имена и детали могут быть изменены.
        Каждую страницу мы публикуем только после согласия семьи.
      </p>
    </div>

    <div
      v-if="active"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="`Страница памяти: ${active.name}`"
      @click.self="close"
    >
      <div class="lightbox__bar">
        <div>
          <p class="lightbox__title">{{ active.name }}</p>
          <p class="lightbox__sub">{{ active.years }}</p>
        </div>
        <button ref="closeButton" type="button" class="lightbox__close" aria-label="Закрыть" @click="close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class="lightbox__body">
        <img :src="active.image" :alt="active.alt" />
      </div>
      <p class="lightbox__link">
        <a :href="active.image" target="_blank" rel="noopener">Открыть в новой вкладке</a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { examples, type Example } from '../content'

const active = ref<Example | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

function open(example: Example) {
  active.value = example
  document.body.classList.add('is-locked')
  window.addEventListener('keydown', onKeydown)
  nextTick(() => closeButton.value?.focus())
}

function close() {
  active.value = null
  document.body.classList.remove('is-locked')
  window.removeEventListener('keydown', onKeydown)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('is-locked')
})
</script>
