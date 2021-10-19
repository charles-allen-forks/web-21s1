<template>
  <div class="page-entry-details">
    <div v-if="entry" class="section">
      <p class="title is-2">{{ entry.name }}</p>
      <p class="subtitle mt-4 mb-2">Season Best (SB)</p>
      <p>
        100m in {{ entry.sb100 }}
        <br />
        200m in {{ entry.sb200 }}
      </p>
      <p class="subtitle mt-4 mb-2">Personal Best (PB)</p>
      <p>
        100m in {{ entry.pb100 }}
        <br />
        200m in {{ entry.pb200 }}
      </p>
    </div>
    <div v-else class="section">
      <p class="title is-2">Entry not found</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EntryDetails extends Vue {
  get entry (): Entry | undefined {
    return this.$store.getters.entriesBySlug[this.$route.params.entrySlug]
  }
}
</script>
