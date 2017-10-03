<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header
    }
  }
// 4739824f78e7323bcc48aa5dfd3e51c98dcb2125baf43ef70041635c73bf1f7b
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

