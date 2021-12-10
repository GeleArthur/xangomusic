<template>
  <div id="app">
    <TopNavBar/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopNavBar from './components/TopNavBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TopNavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
