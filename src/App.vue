<template>
  <main class="container">
    <section class="hero">
      <h1>AutomationWise</h1>
      <p class="tagline">Project Support & Technical Troubleshooting</p>
    </section>

    <section class="brief card">
      <Brief />
    </section>

    <footer class="footer">
      <span>© {{ year }} AutomationWise LLC • Louisiana</span>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Brief from './content/brief.md'
const year = computed(() => new Date().getFullYear())
</script>
