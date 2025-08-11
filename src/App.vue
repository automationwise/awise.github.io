<template>
  <main class="container">
    <section class="hero">
      <h1>AutomationWise</h1>
      <p class="tagline">Project Support & Technical Troubleshooting</p>
      <p class="subline">Based in Louisiana with Tim · Remote & On-Site</p>
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

    <!-- optional helper sections; edit or remove if you’ve got them in MD -->
    <section class="section">
      <h3>How I work</h3>
      <ul class="clean">
        <li>You own the project — I remove blockers.</li>
        <li>Clear scope, fair rate, zero micromanagement.</li>
        <li>Subcontractor or embedded teammate.</li>
        <li>Short bursts or longer engagements.</li>
      </ul>
    </section>

    <section class="section">
      <h3>Bring me in when…</h3>
      <ul class="clean">
        <li>Migration stalled</li>
        <li>Half-built automation needs shipping</li>
        <li>Persistent issue needs sharp eyes</li>
        <li>Team is swamped; need trusted hands</li>
      </ul>
      <div style="margin-top:1rem;">
        <a class="cta" href="mailto:eric@automationwise.com">Book a call</a>
      </div>
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
