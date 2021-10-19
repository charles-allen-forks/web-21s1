<template>
  <div class="page-team-list">
    <div class="section">
      <p class="title is-2">Teams</p>
      <ul>
        <li v-for="team in teams" :key="team.slug">
          <router-link :to="{ name: 'TeamDetails', params: { teamSlug: team.slug } }">
            <span>{{ team.name }}</span>
            <img :src="`/images/teams/${team.slug}.png`" alt="team.name" class="ml-2" style="height: 16px" />
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
