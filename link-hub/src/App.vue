<template>
  <port>
    <docker Title="Google" link="http://www.google.pl" />
    <docker Title="Facebook" link="http://www.facebook.pl" />
  </port>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Docker from './components/Docker.vue';
import Port from './components/Port.vue';

@Options({
  components: {
    Docker,
    Port
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">

body {
  font-family:'Gill Sans', sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
  //background: url("Res/Image/cargo_ship.jpg");
  background-color: cadetblue;
  background-size: cover;
  overflow:hidden;
}

</style>
