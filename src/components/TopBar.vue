<template>
  <div class="container">
    <div class="contents">
      <div class="search">SEARCH BAR</div>
      <div class="topBar">
          <div>do</div>
          <div>do</div>
          <div>do</div>
          <div>do</div>
          <div>do</div>
          </div>
    </div>
    <img class="icon" src="xango logo 2012.png" alt="xango logo">
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
.icon {
  grid-area: icon;
  background-color: white;
  display: block;
  height: 100%;
  // width: 100%;
  // padding: 10%;
}
</style>
