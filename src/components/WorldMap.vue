<template>
  <div class="contrainer">
    <h1 class="Title">World Map</h1>
    <div class="mapcontainer">
      <svg class="worldmap" ></svg>
    </div>
  </div>
</template>

<script lang="js">
import mapData from "@/assets/WorldMap.json";
import * as d3 from "d3";
import * as topojson from "topojson";
import Topology from "topojson";
import router from '@/router';

export default {
  mounted() {
    const svg = d3
      .select(".worldmap")
      .attr("viewBox", "30,-100,900,500")
      .attr("width", "100%")
      .attr("height", "100%");

    const path = d3.geoPath(d3.geoMercator().scale(120));

    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((data) => {
      const countries = topojson.feature(data, data.objects.countries);
      svg
        .selectAll("path")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", path)
        .on("click", (e) => {
          this.$router.push("/Music/"+e.target.__data__.properties.name)
          console.log(e.target.__data__.properties.name);
        });
    });
  },
};
</script>

<style>
.country:hover {
  fill: red;
}

.country {
  fill: gray;
  stroke: black;
}
</style>

<style scoped lang="scss">
.mapcontainer {
  /* width: auto; */
  /* height: inherit; */
  max-height: inherit;
}

.contrainer {
  /* width: 100%; */
  height: min-content;
  // max-height: 700px;
  background-color: white;
  margin: 10px;
}
h1 {
  margin: 0px;
  text-align: center;
  font-weight: 900;
  color: #A82E2C;
}
</style>
