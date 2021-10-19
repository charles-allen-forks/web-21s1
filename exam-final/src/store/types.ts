export interface Athlete {
  slug: string
  name: string
  teamSlug: string
  team: string
  age: number
  gender: string
}

export interface Team {
  slug: string
  rank: number
  name: string
  countFirst: number
  countSecond: number
  countThird: number
  countTotal: number
  introduction: string
}
