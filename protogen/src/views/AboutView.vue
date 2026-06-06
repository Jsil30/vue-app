<script setup lang="ts">
import { RouterLink } from 'vue-router'

const facts = [
  { icon: '📍', label: 'Based in', value: 'San Francisco, CA' },
  { icon: '💻', label: 'Focus', value: 'Product design & frontend' },
  { icon: '☕', label: 'Fuel', value: 'Coffee & curiosity' },
]
</script>

<template>
  <main class="card">
    <RouterLink to="/" class="back-link" aria-label="Back to links">←</RouterLink>

    <div class="avatar" aria-hidden="true">JS</div>

    <h1 class="name">About Me</h1>
    <p class="intro">
      Hi, I&rsquo;m Jani &mdash; a designer and developer who loves turning ideas into
      polished, human-friendly products. I care about clean interfaces, thoughtful
      details, and building things people genuinely enjoy using.
    </p>

    <ul class="facts">
      <li v-for="fact in facts" :key="fact.label" class="fact">
        <span class="fact-icon">{{ fact.icon }}</span>
        <span class="fact-label">{{ fact.label }}</span>
        <span class="fact-value">{{ fact.value }}</span>
      </li>
    </ul>

    <RouterLink to="/" class="link-button">
      <span class="link-icon">🔗</span>
      <span class="link-label">Back to Links</span>
    </RouterLink>
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

.back-link {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--color-heading);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.back-link:hover {
  transform: translateX(-3px);
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
  margin-bottom: 0.75rem;
}

.intro {
  font-size: 0.95rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.facts {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
  text-align: left;
}

.fact {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.1rem;
  border-radius: 14px;
  background: var(--color-surface-hover);
  border: 1px solid var(--color-border);
}

.fact-icon {
  font-size: 1.1rem;
}

.fact-label {
  font-weight: 500;
  color: var(--color-heading);
}

.fact-value {
  flex: 1;
  text-align: right;
  color: var(--color-muted);
  font-size: 0.9rem;
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
