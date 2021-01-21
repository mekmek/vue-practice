<template>
  <div id="app">
    <show-hello-world msg="Hellow World！！"/>
  </div>
</template>

<script>
import ShowHelloWorld from './components/ShowHelloWorld.vue'

export default {
  name: 'App',
  components: {
    ShowHelloWorld
  }
}
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
