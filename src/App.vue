<template>
  <div id="app">
    <LeftSideBar></LeftSideBar>
    <GoodsList></GoodsList>
  </div>
</template>

<script>
import LeftSideBar from './components/left-side-bar.vue'
import GoodsList from './components/goods-list'


export default {
  name: 'App',
  components: { 
    LeftSideBar,
    GoodsList
  }
}
</script>

<style>
#app {
  height: 95vh;
  width: 95vw;
  float: center;
  overflow: auto;
  display: grid;
  text-align: center;
  grid-template-columns: minmax(400px, 25%) 1fr;
  background-color: rgba(49, 49, 70, 0.5);
}
</style>
