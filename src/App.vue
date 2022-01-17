<template>
  <topBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import topBar from "./components/TopBar.vue"

export default defineComponent({
  name: 'App',
  components: {
    topBar
  }
});
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
  background-color: #F2DBAF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
