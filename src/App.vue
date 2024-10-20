<template>
  <div id="app">
    <img alt="LPM logo" src="./assets/lpm1.png" />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
img {
  margin-bottom: -33px;
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  #app {
    margin-top: 5px;
    padding: 0 20px;
  }

  img {
    width: 80%;
    margin-bottom: -20px;
  }
}
</style>
