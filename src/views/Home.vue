<template>
  <div class="container">
    <world-map></world-map>
    <facebook-feed></facebook-feed>
  </div>
</template>

<script>
import WorldMap from "@/components/WorldMap.vue";
import FacebookFeed from "@/components/FacebookFeed.vue";

export default {
  name: "Home",
  components: {
    WorldMap,
    FacebookFeed,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 1fr;
  gap: 10px;
}

@media screen and (max-width: 800px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    justify-items: center;
  }
}
</style>
