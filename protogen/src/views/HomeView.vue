<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '../components/LinkButton.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

const links = [
  { label: 'Portfolio', url: 'https://example.com', icon: 'mdi-briefcase-variant' },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:hello@janisilva.com', icon: 'mdi-email-outline' },
  { label: 'About Me', url: '/about', icon: 'mdi-account-outline' },
]
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6" lg="5">
            <v-card class="mx-auto pa-6 text-center" max-width="480" rounded="xl" elevation="8">
              <v-btn
                class="theme-toggle"
                icon
                variant="text"
                size="small"
                :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                @click="toggleTheme"
              >
                <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
              </v-btn>

              <v-avatar size="96" class="mb-4 avatar">JS</v-avatar>

              <h1 class="text-h5 font-weight-bold mb-1">Jani Silva</h1>
              <p class="text-medium-emphasis mb-6">
                Designer &amp; developer crafting delightful experiences.
              </p>

              <LinkButton
                v-for="link in links"
                :key="link.label"
                :label="link.label"
                :url="link.url"
                :icon="link.icon"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.theme-toggle {
  position: absolute;
  top: 12px;
  right: 12px;
}

.avatar {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #ec4899);
}
</style>
