<template>
  <div id="app" :style="colors">
    <nav>
      <ul>
        <router-link tag="li" to="/hello">Hello</router-link>
        <router-link tag="li" to="/crud">Crud</router-link>
        <router-link tag="li" to="/user-prefs">Prefferences</router-link>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    colors() {
      return this.$store.state.colors
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
/*body {
  overflow: hidden
}*/
.modal-open {
  background-color: #000;
  overflow: hidden
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 10px;
  height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
a {
  color: #00f;
}
</style>