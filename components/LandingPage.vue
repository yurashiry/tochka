<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <FeaturesSection />
    <HowSection />
    <CandleSection />
    <ExamplesSection />
    <SvoSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import SiteHeader from './SiteHeader.vue'
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import HowSection from './HowSection.vue'
import CandleSection from './CandleSection.vue'
import ExamplesSection from './ExamplesSection.vue'
import SvoSection from './SvoSection.vue'
import PricingSection from './PricingSection.vue'
import FaqSection from './FaqSection.vue'
import ContactSection from './ContactSection.vue'
import SiteFooter from './SiteFooter.vue'

let observer: IntersectionObserver | null = null

onMounted(() => {
  const root = document.documentElement
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced || typeof IntersectionObserver === 'undefined') {
    targets.forEach(el => el.classList.add('is-visible'))
    return
  }

  root.classList.add('reveal-ready')
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    }
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 })

  targets.forEach(el => observer?.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>
