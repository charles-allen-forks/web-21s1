<template>
  <div class="page-team-create">
    <div class="section">
      <p class="title is-2">Create Team</p>

      <div class="columns">
        <div class="column py-2">
          <b-field label="Slug" label-position="on-border">
            <b-input v-model="slug" />
          </b-field>

          <b-field label="Name" label-position="on-border">
            <b-input v-model="name" />
          </b-field>

          <b-field label="Rank" label-position="on-border">
            <b-input v-model.number="rank" />
          </b-field>

          <b-field label="Introduction" label-position="on-border">
            <b-input type="textarea" v-model="introduction" />
          </b-field>
        </div>
        <div class="column py-2">
          <b-field label="1st-place medals" label-position="on-border">
            <b-input v-model.number="countFirst" />
          </b-field>

          <b-field label="2nd-place medals" label-position="on-border">
            <b-input v-model.number="countSecond" />
          </b-field>

          <b-field label="3rd-place medals" label-position="on-border">
            <b-input v-model.number="countThird" />
          </b-field>

          <b-field label="Total medals" label-position="on-border">
            <b-input v-model.number="countTotal" />
          </b-field>
        </div>
      </div>

      <b-button @click="save" type="is-primary" size="is-large" expanded>
        Save Team
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Team } from '@/store/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TeamCreate extends Vue {
  slug = 'thailand'
  name = 'Thailand'
  rank = 59
  countFirst = 1
  countSecond = 0
  countThird = 1
  countTotal = 2
  introduction = 'Thailand excels at combat sports and weightlifting'

  async save (): Promise<void> {
    const { slug, name, rank, countFirst, countSecond, countThird, countTotal, introduction } = this
    const team: Team = { slug, name, rank, countFirst, countSecond, countThird, countTotal, introduction }
    await this.$store.dispatch('create-team', team)
    this.$router.push({ name: 'TeamDetails', params: { teamSlug: slug } })
  }
}
</script>
