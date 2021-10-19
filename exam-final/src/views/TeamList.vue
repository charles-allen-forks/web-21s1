<template>
  <div class="page-team-list">
    <div class="section">
      <p class="title is-2">Teams</p>
      <ul>
        <li v-for="team in teams" :key="team.slug">
          <img :src="`/images/teams/${team.slug}.png`" alt="team.name" style="height: 16px" />
          <router-link :to="{ name: 'TeamDetails', params: { teamSlug: team.slug } }" class="ml-1">
            {{ team.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Team } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TeamList extends Vue {
  get teams (): Team[] {
    return this.$store.state.teams
      .sort((a: Team, b: Team) => a.name.localeCompare(b.name))
  }
}
</script>
