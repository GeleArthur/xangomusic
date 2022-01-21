<template>
  <topBar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import topBar from "./components/TopBar.vue";

export default defineComponent({
  name: "App",
  components: {
    topBar,
  },
});
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #f2dbaf;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
}
</style>
