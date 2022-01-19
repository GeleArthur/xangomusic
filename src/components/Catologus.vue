<template>
 <div class="catalogus-container">
  <div class="grid-item"><img src=""></div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
 </div>
</template>

<script>
export default {

}
</script>

<style>
.catalogus-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto;
  grid-gap: 10px;
  padding: 10px;
  margin-left: 5%;
  margin-right: 5%;
}
.catalogus-container > div {
  background-color: white;
  text-align: center;
  font-size: 30px;
}
</style>