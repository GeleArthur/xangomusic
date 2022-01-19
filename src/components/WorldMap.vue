<template>
  <div class="worldmap">
    <!-- <canvas height="400" width="600" id="worldmap"></canvas> -->
  </div>
</template>

<script lang="ts">
import mapData from "@/assets/WorldMap.json";
import * as d3 from "d3";
import * as topojson from 'topojson';
import Topology from 'topojson'


export default {
  mounted() {
    // let canvas = document.getElementById("worldmap") as HTMLCanvasElement;
    // let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    // ctx.fillStyle = "white"
    // ctx.fillRect(0,0,600,400);

    var path = d3.geoPath().projection(null);
    var svg = d3
      .select(".worldmap")
      .append("svg")
      .attr("width", 600)
      .attr("height", 400);

    // let data = mapData as Topology;

    // topojson.feature(mapData, mapData.objects.countries).geometry

    // d3.json("en.wikipedia.org/w/index.php?title=Template:Graph:Map&action=raw").then((e)=>{
    //   console.log(e)
    //   // svg
    //   // .append("g")
    //   // .selectAll("path")
    //   // // .data(topojson.feature(e, e.objects.states).features)
    // })
  },
};
</script>

<style scoped></style>
