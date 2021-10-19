<template>
  <div class="page-athlete-list">
    <div class="section">
      <p class="title is-2">Athletes</p>
      <ul>
        <li v-for="athlete in athletes" :key="athlete.slug">
          <router-link :to="{ name: 'AthleteDetails', params: { athleteSlug: athlete.slug } }">{{ athlete.name }} ({{ athlete.team }})</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Athlete } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteList extends Vue {
  get athletes (): Athlete[] {
    return this.$store.state.athletes
      .sort((a: Athlete, b: Athlete) => a.name.localeCompare(b.name))
  }
}
</script>
