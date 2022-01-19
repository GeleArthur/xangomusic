<template>
 <topBar />

  <!-- <div class="main">
    <div>hdsjkh</div>
    <facebook-feed />
  </div> -->
<catologus />
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Catologus from "./components/Catologus.vue";
import FacebookFeed from "./components/FacebookFeed.vue";
import topBar from "./components/TopBar.vue";

export default defineComponent({
  name: "App",
  components: {
    topBar,
    FacebookFeed,
    Catologus,
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
