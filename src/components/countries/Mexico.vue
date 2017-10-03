<template>
  <div>
    <pre>
      <code>
        {{ leagueStandings }}
      </code>
    </pre>
  </div>
</template>

<script>
  export default {
    computed: {
      leagueStandings() {
        return this.$store.getters.mexicanData
      }
    },
    created() {
      this.$store.dispatch('fetchMexicanData')
    }
  }
</script>