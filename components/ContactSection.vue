<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container contact__grid">
      <div class="contact__text" data-reveal>
        <p class="eyebrow">Заявка</p>
        <h2 id="contact-title" class="title">Расскажите о человеке</h2>
        <p class="lead">
          Не нужно готовить фотографии и тексты заранее. Достаточно оставить
          контакт — мы созвонимся, познакомимся и спокойно всё обсудим.
        </p>
        <a class="contact__phone" :href="brand.phoneHref">
          <span class="contact__phone-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
              <path d="M6.5 3.5h2.2c.5 0 .9.3 1 .8l.8 3.1c.1.4 0 .8-.3 1.1L8.7 10a11.6 11.6 0 0 0 5.3 5.3l1.5-1.5c.3-.3.7-.4 1.1-.3l3.1.8c.5.1.8.5.8 1v2.2c0 1.1-.9 2-2 2C10.7 19.5 4.5 13.3 4.5 5.5c0-1.1.9-2 2-2Z" stroke-linejoin="round" />
            </svg>
          </span>
          <span>
            <span class="contact__phone-label">Позвонить</span>
            <span class="contact__phone-number">{{ brand.phone }}</span>
          </span>
        </a>

        <ul class="contact__list">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            Первый разговор ни к чему не обязывает
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            Поможем собрать материалы и написать биографию
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
            Отвечаем в течение дня, без рассылок и звонков «просто так»
          </li>
        </ul>
        <p class="examples__note" style="margin-top: 26px">
          Если вам удобнее в мессенджере — напишите об этом в комментарии,
          и мы ответим там.
        </p>
      </div>

      <div class="form-card" data-reveal>
        <div v-if="state === 'done'" class="form-success" role="status">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12.2 2.6 2.6L16 9.4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h4>Спасибо, заявка у нас</h4>
          <p>Мы свяжемся с вами в течение дня и обо всём договоримся.</p>
        </div>

        <form v-else novalidate @submit.prevent="submit">
          <h3>Оставить заявку</h3>
          <p class="form-card__sub">Заполните то, что удобно. Остальное обсудим при разговоре.</p>

          <div class="field">
            <label for="req-name">Как к вам обращаться</label>
            <input id="req-name" v-model="form.name" type="text" name="name" autocomplete="name" placeholder="Имя" maxlength="120" />
          </div>

          <div class="form-row">
            <div class="field">
              <label for="req-contact">Телефон или мессенджер</label>
              <input id="req-contact" v-model="form.contact" type="text" name="contact" autocomplete="tel" placeholder="+7 900 000-00-00 или @username" maxlength="200" />
            </div>
            <div class="field">
              <label for="req-email">Email <span style="text-transform: none; letter-spacing: 0">— необязательно</span></label>
              <input id="req-email" v-model="form.email" type="email" name="email" autocomplete="email" placeholder="name@example.com" maxlength="200" />
            </div>
          </div>

          <div class="field">
            <label for="req-interest">Что интересует</label>
            <select id="req-interest" v-model="form.interest" name="interest">
              <option value="base">Базовый — 4 900 ₽</option>
              <option value="extended">Расширенный — 9 500 ₽</option>
              <option value="living">Живая история — 15 000 ₽</option>
              <option value="advice">Пока не знаю — нужен совет</option>
            </select>
          </div>

          <div class="field">
            <label for="req-message">Комментарий <span style="text-transform: none; letter-spacing: 0">— необязательно</span></label>
            <textarea id="req-message" v-model="form.message" name="message" placeholder="Коротко о человеке или о том, что важно учесть" maxlength="2000"></textarea>
          </div>

          <div class="honeypot" aria-hidden="true">
            <label for="req-company">Компания</label>
            <input id="req-company" v-model="form.company" type="text" name="company" tabindex="-1" autocomplete="off" />
          </div>

          <label class="consent">
            <input v-model="form.consent" type="checkbox" name="consent" />
            <span>
              Согласен(на) на обработку персональных данных в соответствии
              с <a href="/privacy" target="_blank" rel="noopener">политикой конфиденциальности</a>
            </span>
          </label>

          <button class="btn btn--gold" type="submit" :disabled="state === 'sending'">
            {{ state === 'sending' ? 'Отправляем…' : 'Отправить заявку' }}
          </button>

          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { brand } from '../content'
import { requestCreateRoute } from '../request'

const form = reactive({
  name: '',
  contact: '',
  email: '',
  interest: 'base',
  message: '',
  consent: false,
  company: '',
})

const state = ref<'idle' | 'sending' | 'done' | 'error'>('idle')

function onChooseTariff(event: Event) {
  const value = (event as CustomEvent<string>).detail
  if (value === 'base' || value === 'extended' || value === 'living') {
    form.interest = value
  }
}

onMounted(() => window.addEventListener('tp:choose-tariff', onChooseTariff))
onBeforeUnmount(() => window.removeEventListener('tp:choose-tariff', onChooseTariff))
const error = ref('')

async function submit() {
  error.value = ''
  if (!form.name.trim() || form.contact.trim().length < 2) {
    error.value = 'Пожалуйста, укажите имя и контакт для связи.'
    return
  }
  if (!form.consent) {
    error.value = 'Отметьте согласие на обработку персональных данных.'
    return
  }
  state.value = 'sending'
  try {
    const result = await requestCreateRoute.run(ctx, {
      name: form.name.trim(),
      contact: form.contact.trim(),
      email: form.email.trim() || undefined,
      interest: form.interest as 'base' | 'extended' | 'living' | 'advice',
      message: form.message.trim() || undefined,
      consent: true,
      company: form.company,
    })
    if (!result.ok) throw new Error(result.error ?? 'failed')
    state.value = 'done'
  } catch {
    state.value = 'error'
    error.value = 'Не получилось отправить заявку. Попробуйте ещё раз через минуту.'
  }
}
</script>
