<template>
  <div class="container">
    <div class="contents">
      <div class="search">
        <input type="text" placeholder="Search...">
      </div>
      <div class="topBar">
        <a href="News">News</a>
        <a href="Releases">New Release</a>
        <a href="Order">How to Order</a>
        <a href="Distribution">Distribution</a>
        <a href="Contact">Contact</a>
      </div>
    </div>
    <div class="icon">
      <a href="Home"><img src="headerlogo.png" alt="xango logo" /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 9rem;
  background-color: #b22827;

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
.search input[type=text] {
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
  a{
    color: white;
    font-weight: 900;
    text-align: center;
    text-decoration: none;
  }
}
</style>
