<template>
  <div class="page-team-list">
    <div class="section">
      <p class="title is-2">Sports</p>
      <ul>
        <li v-for="sport in sports" :key="sport.slug">
          <router-link :to="{ name: 'SportDetails', params: { sportSlug: sport.slug } }">
            <span>{{ sport.name }}</span>
            <img :src="`/images/sports/${sport.slug}.png`" alt="sport.name" class="ml-2" style="height: 24px" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Sport } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SportList extends Vue {
  get sports (): Sport[] {
    return this.$store.state.sports
      .sort((a: Sport, b: Sport) => a.name.localeCompare(b.name))
  }
}
</script>
