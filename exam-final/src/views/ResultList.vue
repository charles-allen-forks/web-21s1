<template>
  <div class="page-result-list">
    <div class="section">
      <p class="title is-2">Results</p>
      <ul>
        <li v-for="result in results" :key="result.slug">
          <span>[{{ result.distance }}]</span>
          <span class="ml-1">P{{ result.rank }}</span>
          <router-link :to="{ name: 'ResultDetails', params: { resultSlug: result.slug } }">
            <span class="ml-2">{{ result.name }}</span>
          </router-link>
          <img :src="`/images/records/${result.record}.png`" alt="result.record" class="ml-2 p-0 m-0" style="height: 18px; vertical-align: middle" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Result } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ResultList extends Vue {
  get results (): Result[] {
    return this.$store.state.results
      .sort((a: Result, b: Result) => a.rank - b.rank)
  }
}
</script>
