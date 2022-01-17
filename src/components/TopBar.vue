<template>
  <div class="container">
    <div class="contents">
      <div class="search">wow</div>
      <div class="topBar">
          <div>do</div>
          <div>do</div>
          <div>do</div>
          <div>do</div>
          <div>do</div>
          </div>
    </div>
    <div class="icon">10</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  align-items: center;
  text-align: center;
  grid-area: topBar;
}
.icon {
  grid-area: icon;
}
</style>
