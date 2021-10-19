<template>
  <div class="page-sport-details">
    <div v-if="sport" class="section">
      <p class="title is-2">{{ sport.name }}</p>
      <p class="mt-4 has-text-weight-bold">Event count: {{ sport.eventCount }}</p>
      <p class="mt-4">{{ sport.description }}</p>
    </div>
    <div v-else class="section">
      <p class="title is-2">Sport not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportDetails extends Vue {
  get sport (): Sport | undefined {
    return this.$store.getters.sportsBySlug[this.$route.params.sportSlug]
  }
}
</script>
