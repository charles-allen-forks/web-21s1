import Vue from 'vue'
import Vuex from 'vuex'
import { fakeData } from '@/store/fake-data'
import { Athlete, Team } from './types'
import { keyBy } from 'lodash'

export interface OlympicsStore {
  athletes: Athlete[]
  teams: Team[]
}

Vue.use(Vuex)
const { teams, athletes, sports, events, heats, competitors, records, results, attempts, worldRecords } = fakeData

export default new Vuex.Store<OlympicsStore>({
  state: {
    athletes,
    teams
  },
  getters: {
    athletesBySlug: (state) => keyBy(state.athletes, 'slug'),
    athletesById: (_, getters) => getters.athletesBySlug, // alias
    teamsBySlug: (state) => keyBy(state.teams, 'slug'),
    teamsById: (_, getters) => getters.teamsBySlug // alias
  },
  mutations: {
    'athletes/push': (state, athlete: Athlete) => {
      const index = state.athletes.findIndex(a => a.slug === athlete.slug)
      if (index !== -1) { state.athletes.splice(index, 1, athlete) } else { state.athletes.push(athlete) }
    },
    'teams/push': (state, team: Team) => {
      const index = state.teams.findIndex(t => t.slug === team.slug)
      if (index !== -1) { state.teams.splice(index, 1, team) } else { state.teams.push(team) }
    }
  },
  actions: {
    'create-athlete': ({ commit }, athlete: Athlete) => commit('athletes/push', athlete),
    'create-team': ({ commit }, team: Team) => commit('teams/push', team)
  }
})
