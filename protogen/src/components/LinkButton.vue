<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  url: string
  icon: string
}>()

const isInternal = computed(() => props.url.startsWith('/'))
</script>

<template>
  <v-btn
    :to="isInternal ? url : undefined"
    :href="isInternal ? undefined : url"
    :target="isInternal ? undefined : '_blank'"
    :rel="isInternal ? undefined : 'noopener noreferrer'"
    block
    size="x-large"
    height="56"
    variant="tonal"
    class="link-btn text-none"
    :prepend-icon="icon"
  >
    {{ label }}
  </v-btn>
</template>

<style scoped>
.link-btn {
  margin-bottom: 14px;
}

.link-btn:last-child {
  margin-bottom: 0;
}

.link-btn :deep(.v-btn__prepend) {
  margin-inline: 4px 12px;
}
</style>
