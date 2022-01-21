<template>
  <div class="album">
    <img :src="data.image" />
    <div>{{ data.title }}</div>
    <div>{{ data.artist }}</div>
    <div>{{ data.country }}</div>
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style scoped>

.album{
  background-color: white;
  margin: 10px;
  padding: 10px;
}

</style>
