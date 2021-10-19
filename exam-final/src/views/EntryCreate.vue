<template>
  <div class="page-entry-create">
    <div class="section">
      <p class="title is-2">Create Entry</p>

      <div class="columns">
        <div class="column">
          <b-field label="Slug" label-position="on-border">
            <b-input v-model="slug" />
          </b-field>

          <b-field label="Name" label-position="on-border">
            <b-input v-model="name" />
          </b-field>

          <b-field label="Team Slug" label-position="on-border">
            <b-input v-model="teamSlug" />
          </b-field>

          <b-field label="Team" label-position="on-border">
            <b-input v-model="team" />
          </b-field>
        </div>
        <div class="column">
          <b-field label="Lane" label-position="on-border">
            <b-input v-model.number="lane" type="number" />
          </b-field>

          <b-field label="SB 100" label-position="on-border">
            <b-input v-model="sb100" />
          </b-field>

          <b-field label="SB 200" label-position="on-border">
            <b-input v-model="sb200" />
          </b-field>

          <b-field label="PB 100" label-position="on-border">
            <b-input v-model="pb100" />
          </b-field>

          <b-field label="PB 200" label-position="on-border">
            <b-input v-model="pb200" />
          </b-field>
        </div>
      </div>

      <b-button @click="save" type="is-primary" size="is-large" expanded>Save Entry</b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Entry } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AthleteCreate extends Vue {
  slug = 'ajila-del-ponte'
  name = 'Ajila del Ponte'
  teamSlug = 'other'
  team = 'Other'
  lane = 8
  sb100 = '10.91'
  sb200 = '-'
  pb100 = '10.91'
  pb200 = '23.02'

  async save (): Promise<void> {
    const { slug, name, teamSlug, team, lane, sb100, sb200, pb100, pb200 } = this
    const entry: Entry = { slug, name, teamSlug, team, lane, sb100, sb200, pb100, pb200 }
    await this.$store.dispatch('create-entry', entry)
    this.$router.push({ name: 'EntryDetails', params: { entrySlug: slug } })
  }
}
</script>
