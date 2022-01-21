<template>
  <div class="container">
    <div class="contents">
      <div class="search">
        <form v-on:submit.prevent="nothing">
          <input type="text" placeholder="Search..." id="search" />
        </form>
      </div>
      <div class="topBar">
        <router-link to="/News">News</router-link>
        <router-link to="/Releases">New Release</router-link>
        <router-link to="/Order">How to Order</router-link>
        <router-link to="/Distribution">Distribution</router-link>
        <router-link to="/Contact">Contact</router-link>
      </div>
    </div>
    <div class="icon">
      <router-link to="/">
        <img src="/headerlogo.png" alt="xango logo" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("search").addEventListener("submit", () => {
      
    });
  },

  methods: {
    nothing() {
      this.$router.push("/Music/" + document.getElementById("search").value);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 9rem;
  background-color: #a82e2c;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-areas: "icon contents";
}

.contents {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas: "search" "topBar";
  grid-area: contents;
}
.search {
  grid-area: search;
}

.topBar {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-area: topBar;
}
.search input[type="text"] {
  width: 50%;
  float: left;
  padding: 10px;
  border: white solid 10px;
  border-radius: 30px;
  margin-top: 10px;
  margin-left: 5%;
  font-size: 17px;
}
.icon {
  grid-area: icon;
  height: inherit;

  img {
    text-align: center;
    height: 100%;
    object-fit: contain;
  }
}

.topBar {
  a {
    color: white;
    font-weight: 900;
    text-align: center;
    text-decoration: none;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 10px;
  }
}
</style>
