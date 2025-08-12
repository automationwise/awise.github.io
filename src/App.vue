<template>
  <main class="container">
    <section class="hero">
      <h1>AutomationWise</h1>
      <p class="tagline">Project Support & Technical Troubleshooting</p>
      <div style="margin-top:1rem;">
        <a class="cta" href="mailto:eric@automationwise.com">Contact Eric</a>
      </div>

      <div class="badges" aria-label="tooling">
        <span class="badge">Linux/Windows</span>
        <span class="badge">Ansible</span>
        <span class="badge">Python · Bash · PowerShell</span>
        <span class="badge">CI/CD</span>
        <span class="badge">APIs & Integrations</span>
      </div>
    </section>

    <!-- your main copy lives in Markdown -->
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
