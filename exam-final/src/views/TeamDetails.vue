<template>
  <div class="page-team-details">
    <div v-if="team" class="section">
      <p class="title is-2">{{ team.name }}</p>
      <p class="mt-4 has-text-weight-bold">Rank: {{ team.rank }}</p>
      <p class="mt-4">{{ team.introduction }}</p>
    </div>
    <div v-else class="section">
      <p class="title is-2">Team not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Team } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TeamDetails extends Vue {
  get team (): Team | undefined {
    return this.$store.getters.teamsBySlug[this.$route.params.teamSlug]
  }
}
</script>
