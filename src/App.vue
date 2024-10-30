<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
html,body,#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
