<template>
  <div class="page-athlete-details">
    <div v-if="athlete" class="section">
      <p class="title is-2">{{ athlete.name }}</p>
      <p>
        Age:
        <span class="has-text-weight-bold">{{ athlete.age }}</span>
        <br />
        Gender:
        <span class="has-text-weight-bold">{{ athlete.gender }}</span>
      </p>
      <img :src="`/images/athletes/${athlete.slug}.jpg`" alt="athlete.name" class="mt-4" />
    </div>
    <div v-else class="section">
      <p class="title is-2">Athlete not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteDetails extends Vue {
  get athlete (): Athlete | undefined {
    return this.$store.getters.athletesBySlug[this.$route.params.athleteSlug]
  }
}
</script>
