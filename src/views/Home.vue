<template>
  <div>
    <world-map></world-map>
  </div>

</template>

<script>
import WorldMap from '@/components/WorldMap.vue';

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    WorldMap,
  },
};
</script>
