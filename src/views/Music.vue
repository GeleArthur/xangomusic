<template>
  <dir class="albumsContainer">
    <album v-for="(item, index) in albums" :key="index" :data="item" />
  </dir>
</template>

<script>
import Album from "@/components/Album.vue";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default {
  components: { Album },
  data() {
    return {
      albums: [],
    };
  },

  mounted() {
    this.AddFakeData(this.$route.params.land);
  },
  methods: {
    AddFakeData(country) {
      for (let i = 0; i < getRandomInt(5, 30); i++) {
        this.albums.push({
          title: "sahdjkhja",
          country: country,
          artist: "Arthur and Ruben",
          image: "https://picsum.photos/200",
        });
      }
    },
  },
};
</script>

<style scoped>
.albumsContainer {
  display: flex;
  flex-wrap: wrap;
  /* grid-auto-columns: 1fr 1fr 1fr; */
  /* grid-auto-rows: 1fr 1fr; */
}
</style>
