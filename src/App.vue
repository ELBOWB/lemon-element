<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto-Regular", "PingFang SC", "Rajdhani-Medium", "Avenir",
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100%;
  background: #f8f8f8;
  box-sizing: border-box;
  position: relative;
  user-select: none;
}
</style>
