<template>
  <div id="app">
    <app-header></app-header>
    <div class="d-flex justify-content-end align-items-center">
      <custom-button>
        Create
        <mdicon name="plus" />
      </custom-button>

    </div>

    

  </div>
</template>

<script>

import AppHeader from '@/components/AppHeader'
import CustomButton from '@/components/CustomButton'

export default {
  name: 'App',
  components: {
      AppHeader, CustomButton
  }

}
</script>

<style lang="scss">
  body{
    background-color: $solid-black;
    padding : 0px;
    margin : 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color : white;
  padding : 76px 31px;

}

.test{
  background-color: $primary-yellow;
}
</style>
