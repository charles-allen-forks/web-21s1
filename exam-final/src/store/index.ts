import Vue from 'vue'
import Vuex from 'vuex'
import { fakeData } from '@/store/fake-data'
import { Athlete, Sport, Team } from './types'
import { keyBy } from 'lodash'

export interface OlympicsStore {
  athletes: Athlete[]
  sports: Sport[]
  teams: Team[]
}

Vue.use(Vuex)
const { teams, athletes, sports, events, heats, competitors, records, results, attempts, worldRecords } = fakeData

export default new Vuex.Store<OlympicsStore>({
  state: {
    athletes,
    sports,
    teams
  },
  getters: {
    athletesBySlug: (state) => keyBy(state.athletes, 'slug'),
    athletesById: (_, getters) => getters.athletesBySlug, // alias
    sportsBySlug: (state) => keyBy(state.sports, 'slug'),
    sportsById: (_, getters) => getters.sportsBySlug, // alias
    teamsBySlug: (state) => keyBy(state.teams, 'slug'),
    teamsById: (_, getters) => getters.teamsBySlug // alias
  },
  mutations: {
    'athletes/push': (state, athlete: Athlete) => {
      const index = state.athletes.findIndex(a => a.slug === athlete.slug)
      if (index !== -1) { state.athletes.splice(index, 1, athlete) } else { state.athletes.push(athlete) }
    },
    'sports/push': (state, sport: Sport) => {
      const index = state.sports.findIndex(a => a.slug === sport.slug)
      if (index !== -1) { state.sports.splice(index, 1, sport) } else { state.sports.push(sport) }
    },
    'teams/push': (state, team: Team) => {
      const index = state.teams.findIndex(t => t.slug === team.slug)
      if (index !== -1) { state.teams.splice(index, 1, team) } else { state.teams.push(team) }
    }
  },
  actions: {
    'create-athlete': ({ commit }, athlete: Athlete) => commit('athletes/push', athlete),
    'create-sport': ({ commit }, sport: Sport) => commit('sports/push', sport),
    'create-team': ({ commit }, team: Team) => commit('teams/push', team)
  }
})
