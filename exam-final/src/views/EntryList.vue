<template>
  <div class="page-entry-list">
    <div class="section">
      <p class="title is-2">Entries</p>
      <ul>
        <li v-for="entry in entries" :key="entry.slug">
          <span>[{{ entry.lane }}]</span>
          <router-link :to="{ name: 'EntryDetails', params: { entrySlug: entry.slug } }">
            <span class="ml-2">{{ entry.name }}</span>
            <img :src="`/images/teams/${entry.teamSlug}.png`" alt="entry.team" class="ml-2" style="height: 16px" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EntryList extends Vue {
  get entries (): Entry[] {
    return this.$store.state.entries
      .sort((a: Entry, b: Entry) => a.lane - b.lane)
  }
}
</script>
