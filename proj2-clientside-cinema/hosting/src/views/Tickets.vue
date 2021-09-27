<template>
  <div class="tickets">
    <h1 class="title">
      My Tickets
    </h1>

    <div
      v-if="$store.state.tickets"
      class="ticket-list"
    >
      <div
        v-for="ticket in $store.state.tickets"
        :key="ticket.id"
        class="ticket"
      >
        <div>
          <h1 class="title is-size-2 has-text-weight-bold">
            {{ ticket.filmName }} - {{ ticket.timeString }}
          </h1>
          <p>
            {{ ticket.cinemaName }}
            <br>
            Screen {{ ticket.screen }}
            <br>
            Booking date: {{ ticket.createdAt.toDate().toLocaleString() }}
          </p>
        </div>
        <div class="ticket-seats is-size-3">
          <span v-if="ticket.seats.length > 6">
            {{ ticket.seats.slice(0, 4).join(' ') }}
            +{{ ticket.seats.length - 4 }}
          </span>
          <span v-else>
            {{ ticket.seats.join(' ') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Tickets extends Vue { }
</script>

<style lang="scss" scoped>
@import '../main.scss';

.ticket-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 1rem;
}

.ticket {
  border: 1px solid $dark;
  display: grid;
  grid-template-columns: 1fr 8rem;
}

.ticket div {
  padding: 1rem;
}

.ticket-seats {
  font-family: monospace;
  font-size: 1.75rem;
  text-align: right;
  word-wrap: break-word;
}
</style>
