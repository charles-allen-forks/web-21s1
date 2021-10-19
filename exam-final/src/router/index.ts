import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import AthleteList from '@/views/AthleteList.vue'
import AthleteDetails from '@/views/AthleteDetails.vue'
import AthleteCreate from '@/views/AthleteCreate.vue'
import EntryList from '@/views/EntryList.vue'
import EntryDetails from '@/views/EntryDetails.vue'
import EntryCreate from '@/views/EntryCreate.vue'
import ResultList from '@/views/ResultList.vue'
import ResultDetails from '@/views/ResultDetails.vue'
import ResultCreate from '@/views/ResultCreate.vue'
import SportList from '@/views/SportList.vue'
import SportDetails from '@/views/SportDetails.vue'
import SportCreate from '@/views/SportCreate.vue'
import TeamList from '@/views/TeamList.vue'
import TeamDetails from '@/views/TeamDetails.vue'
import TeamCreate from '@/views/TeamCreate.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/athletes',
    name: 'AthleteList',
    component: AthleteList
  },
  {
    path: '/athletes/new',
    name: 'AthleteCreate',
    component: AthleteCreate
  },
  {
    path: '/athletes/:athleteSlug',
    name: 'AthleteDetails',
    component: AthleteDetails
  },
  {
    path: '/entries',
    name: 'EntryList',
    component: EntryList
  },
  {
    path: '/entries/new',
    name: 'EntryCreate',
    component: EntryCreate
  },
  {
    path: '/entries/:entrySlug',
    name: 'EntryDetails',
    component: EntryDetails
  },
  {
    path: '/results',
    name: 'ResultList',
    component: ResultList
  },
  {
    path: '/results/new',
    name: 'ResultCreate',
    component: ResultCreate
  },
  {
    path: '/results/:resultSlug',
    name: 'ResultDetails',
    component: ResultDetails
  },
  {
    path: '/sports',
    name: 'SportList',
    component: SportList
  },
  {
    path: '/sports/new',
    name: 'SportCreate',
    component: SportCreate
  },
  {
    path: '/sports/:sportSlug',
    name: 'SportDetails',
    component: SportDetails
  },
  {
    path: '/teams',
    name: 'TeamList',
    component: TeamList
  },
  {
    path: '/teams/new',
    name: 'TeamCreate',
    component: TeamCreate
  },
  {
    path: '/teams/:teamSlug',
    name: 'TeamDetails',
    component: TeamDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
