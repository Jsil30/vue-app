<script setup lang="ts">
import { useRouter } from 'vue-router'
import LinkButton from '../components/LinkButton.vue'

const router = useRouter()

const facts = [
  { icon: 'mdi-map-marker-outline', label: 'Based in', value: 'San Francisco, CA' },
  { icon: 'mdi-laptop', label: 'Focus', value: 'Product design & frontend' },
  { icon: 'mdi-coffee-outline', label: 'Fuel', value: 'Coffee & curiosity' },
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
                class="back-btn"
                icon
                variant="text"
                size="small"
                aria-label="Back to links"
                @click="router.push('/')"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>

              <v-avatar size="96" class="mb-4 avatar">JS</v-avatar>

              <h1 class="text-h5 font-weight-bold mb-3">About Me</h1>
              <p class="text-medium-emphasis mb-6">
                Hi, I&rsquo;m Jani &mdash; a designer and developer who loves turning ideas into
                polished, human-friendly products. I care about clean interfaces, thoughtful
                details, and building things people genuinely enjoy using.
              </p>

              <v-list class="bg-transparent mb-6" lines="one">
                <v-list-item
                  v-for="fact in facts"
                  :key="fact.label"
                  :prepend-icon="fact.icon"
                  :title="fact.label"
                  :subtitle="fact.value"
                  class="fact rounded-lg mb-2"
                />
              </v-list>

              <LinkButton label="Back to Links" url="/" icon="mdi-link-variant" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.back-btn {
  position: absolute;
  top: 12px;
  left: 12px;
}

.avatar {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #ec4899);
}

.fact {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  text-align: left;
}
</style>
