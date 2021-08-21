<template>
  <Piano />
  <div>
    <p>Baseado no improv code do <a href="https://www.twitch.tv/codinggarden">Coding Garden</a> video <a href="https://www.twitch.tv/videos/1124214913">aqui</a></p>
    </div>
</template>

<script>
import Piano from './components/Piano.vue'

export default {
  name: 'App',
  components: {
    Piano
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
