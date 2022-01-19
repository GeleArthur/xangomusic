<template>
  <div class="concontainertainer">
    <div class="catalogus-container">
      <album :v-for="index in 10" ></album>
    </div>
  </div>
</template>

<script>
import album from './Album.vue';
export default {
  components: { album },};
</script>

<style scoped lang="scss">
.catalogus-container {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  justify-items: center;
  justify-content: center;
  width: auto;
  height: auto;
}
.grid-item {
  background-color: white;
  padding: 10px;

  img {
    margin: 10px;
  }
}
</style>
