<template>
  <main>
    <topNavbar></topNavbar>
    <div style="margin-top: 56.5px">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import topNavbar from "./components/topNavbar.vue";
export default {
  name: "App",
  components: {
    topNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
