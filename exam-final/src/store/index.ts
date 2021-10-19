import Vue from 'vue'
import Vuex from 'vuex'
import { fakeData } from '@/store/fake-data'
import { Team } from './types'
import { keyBy } from 'lodash'

interface OlympicsStore {
  teams: Team[]
}

Vue.use(Vuex)
const { teams, athletes, sports, events, heats, competitors, records, results, attempts, worldRecords } = fakeData

export default new Vuex.Store<OlympicsStore>({
  state: { teams },
  getters: {
    teamsBySlug: (state) => keyBy(state.teams, 'slug'),
    teamsById: (_, getters) => getters.teamsBySlug // alias
  },
  mutations: {
    'teams/push': (state, team: Team) => {
      const index = state.teams.findIndex(t => t.slug === team.slug)
      if (index !== -1) { state.teams.splice(index, 1, team) } else { state.teams.push(team) }
    }
  },
  actions: {
    'create-team': ({ commit }, team: Team) => commit('teams/push', team)
  }
})
