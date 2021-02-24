<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>

</script>

<style lang="scss">

@font-face {
    font-family: "Avenir";
    src : url('assets/fonts/avenir_heavy.ttf') format("truetype");
}

  body{
    background-color: $solid-black;
    padding : 0px;
    margin : 0;
    font-family: "Avenir", Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color : white;
}

#app {
  padding : 76px 31px;
}

</style>
