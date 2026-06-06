<script setup lang="ts">
import { ref } from 'vue'

const theme = ref<'dark' | 'light'>('dark')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
}

const links = [
  { label: 'Portfolio', href: 'https://example.com', icon: '🎨' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: '🏀' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { label: 'Email', href: 'mailto:hello@janisilva.com', icon: '✉️' },
]
</script>

<template>
  <main class="card">
    <button
      class="theme-toggle"
      type="button"
      :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      {{ theme === 'dark' ? '☀️' : '🌙' }}
    </button>

    <div class="avatar" aria-hidden="true">JS</div>

    <h1 class="name">Jani Silva</h1>
    <p class="tagline">Designer &amp; developer crafting delightful experiences.</p>

    <nav class="links">
      <a
        v-for="link in links"
        :key="link.label"
        class="link-button"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-icon">{{ link.icon }}</span>
        <span class="link-label">{{ link.label }}</span>
      </a>
    </nav>
  </main>
</template>

<style scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 480px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 2.5rem 1.75rem;
  text-align: center;
  box-shadow: var(--shadow);
}

.theme-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.theme-toggle:hover {
  transform: rotate(20deg) scale(1.05);
  border-color: var(--color-border-hover);
  background: var(--color-surface-hover);
}

.avatar {
  width: 96px;
  height: 96px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
}

.name {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.4rem;
}

.tagline {
  font-size: 0.95rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.link-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.25rem;
  border-radius: 14px;
  background: var(--color-surface-hover);
  border: 1px solid var(--color-border);
  color: var(--color-heading);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.link-button:hover {
  transform: translateY(-3px);
  border-color: var(--color-border-hover);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}

.link-icon {
  font-size: 1.1rem;
}

.link-label {
  flex: 1;
  text-align: center;
}
</style>
