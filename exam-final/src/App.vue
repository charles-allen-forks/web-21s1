<template>
  <div>
    <b-navbar type="is-primary" wrapper-class="container">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
          <img
            src="/images/sports/rhythmic.png"
            style="filter: invert(1)"
            class="mr-1"
          />
          <span class="is-size-4">BEC Olympics</span>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item tag="router-link" :to="{ name: 'TeamList' }">
          Teams
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'TeamDetails', params: { teamSlug: 'usa' } }"
        >
          Team: USA
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'TeamCreate' }">
          Create Team
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
