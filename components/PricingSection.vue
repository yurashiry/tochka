<template>
  <section id="price" class="section" aria-labelledby="price-title">
    <div class="container">
      <div class="section-head" data-reveal>
        <p class="eyebrow">Стоимость</p>
        <h2 id="price-title" class="title">Три тарифа — одна память</h2>
        <p class="lead">
          Во всех тарифах есть страница памяти и QR-табличка в форме свечи.
          Оплата разовая, страница хранится бессрочно, подписок нет.
        </p>
      </div>

      <div class="tariffs">
        <article class="tariff" data-reveal>
          <h3 class="tariff__name">Базовый</h3>
          <p class="tariff__sub">Всё необходимое, чтобы память появилась</p>
          <p class="tariff__price">4 900 <small>₽</small></p>
          <p class="tariff__price-note">разово, без подписок</p>
          <ul class="tariff__list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Страница памяти: биография, фотогалерея, карта, книга соболезнований, виртуальная свеча
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              QR-табличка в форме свечи: металл, лазерная гравировка, крепление
            </li>
          </ul>
          <p class="tariff__term">Срок: 3–7 рабочих дней</p>
          <div class="tariff__cta">
            <a class="btn btn--ghost" href="#contact" @click="choose('base')">Выбрать тариф</a>
          </div>
        </article>

        <article class="tariff" data-reveal>
          <h3 class="tariff__name">Расширенный</h3>
          <p class="tariff__sub">Больше материалов и помощи с историей</p>
          <p class="tariff__price">9 500 <small>₽</small></p>
          <p class="tariff__price-note">разово, без подписок</p>
          <ul class="tariff__list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Всё из базового тарифа
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Помощь с видеоинтервью: шаблон вопросов, рекомендации по съёмке, структура монтажа
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Две дополнительные опции на выбор: больше фотографий, расширенная родословная, аудиозаписи
            </li>
          </ul>
          <p class="tariff__term">Срок зависит от объёма материалов</p>
          <div class="tariff__cta">
            <a class="btn btn--ghost" href="#contact" @click="choose('extended')">Выбрать тариф</a>
          </div>
        </article>

        <article class="tariff tariff--dark" data-reveal>
          <h3 class="tariff__name">Живая история</h3>
          <p class="tariff__sub">Голос, который остаётся рядом</p>
          <p class="tariff__price">15 000 <small>₽</small></p>
          <p class="tariff__price-note">разово, без подписок</p>
          <ul class="tariff__list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Всё из расширенного тарифа
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7" stroke-linecap="round" stroke-linejoin="round" /></svg>
              Нейроаватар: аудиогид по биографии в тембре, близком к родному голосу. Синтез речи на русском — без дипфейка
            </li>
          </ul>
          <p class="tariff__term">Срок зависит от объёма материалов</p>
          <div class="tariff__cta">
            <a class="btn btn--gold" href="#contact" @click="choose('living')">Выбрать тариф</a>
          </div>
        </article>
      </div>

      <p class="tariffs__note" data-reveal>
        Не уверены, какой тариф нужен? Начните с разговора — подскажем,
        что подойдёт именно вашей семье.
        <br />
        Для семей погибших участников СВО базовый комплект — бесплатно,
        по программе <a href="#svo">«Бессмертная Свеча»</a>.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
function choose(tariff: 'base' | 'extended' | 'living') {
  window.dispatchEvent(new CustomEvent('tp:choose-tariff', { detail: tariff }))
}
</script>
