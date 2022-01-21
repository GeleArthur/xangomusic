<template>
  <div class="FBcontainer">
    <h1>Facebook</h1>
    <iframe
      class="iframe-fb"
      width="350"
      height="700"
      style="border: 1px solid black; overflow: hidden"
      scrolling="yes"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media"
      src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/XangoMusic&tabs=timeline&width=350px&height=700px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.FBcontainer {
  width: min-content;
  margin-top: 10px;
  background: white;
  padding: 10px;
  padding-top: 0px;

  h1{
    margin: 0px;
    font-weight: 900;
    color: #b22827;
  }
}
</style>
