<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <a href="/" aria-label="Точка памяти — на главную"><BrandLockup tone="light" /></a>
          <p>
            Цифровые страницы памяти и QR-таблички в форме свечи.
            Чтобы помнить и находить дорогу к тем, кто дорог.
          </p>
        </div>

        <div class="footer__col">
          <h4>Разделы</h4>
          <ul>
            <li v-for="item in nav" :key="item.href"><a :href="item.href">{{ item.label }}</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <h4>Ещё</h4>
          <ul>
            <li><a href="#examples">Примеры страниц</a></li>
            <li><a href="#price">Стоимость</a></li>
            <li><a href="#contact">Оставить заявку</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <h4>Контакты</h4>
          <ul>
            <li v-if="brand.phone"><a :href="brand.phoneHref">{{ brand.phone }}</a></li>
            <li v-if="brand.email"><a :href="`mailto:${brand.email}`">{{ brand.email }}</a></li>
            <li v-if="brand.telegram"><a :href="brand.telegramHref" target="_blank" rel="noopener">Telegram</a></li>
            <li><a href="#contact">Написать через форму</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© 2026 «Точка памяти» · ИП Соколов А. В. · ИНН 77344179</span>
        <span><a href="/privacy">Политика конфиденциальности</a></span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BrandLockup from './BrandLockup.vue'
import { brand, nav } from '../content'
</script>
