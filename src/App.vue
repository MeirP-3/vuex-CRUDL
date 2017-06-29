<template>
  <div id="app">
  <div class="experiment">
    <button @click="create">create item</button>
    <!--<button @click="filterUnder5">filter under 5</button>
    <button @click="resetFilter">reset filter</button>-->
    <button @click="update">Arbitrary update first</button>
    </div>
    <hr>
    <ul>
        <li v-for="item in items" :key="item.id">
          {{item}}
        <button class="delete" @click="deleteItem(item)">delete</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  CREATE,
  UPDATE,
  DELETE
} from './store/consts'

export default {
  name: 'app',
  // created() {
  //   this.items = this.$store.state.items.slice()
  // },
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {

    create () {
      this.$store.dispatch({
        type: CREATE,
        item: {
          object: 'I am',
          'thats': 'the true'
        }
      })
    },

    // resetFilter () {
    //   this.updateView()
    // },

    // filterUnder5 () {
    //   const filteredItems = this.$store.getters.filterUnder5
    //   const len = this.items.length
    //   this.items.splice(0, len, ...filteredItems)
    // },

    update () {
      this.$store.dispatch({
        type: UPDATE,
        item: {
          _id: 1,
          I: 'am',
          updated: 'now'
        }
      })
    },

    deleteItem(item) {
      this.$store.dispatch({
        type: DELETE,
        item
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.experiment {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}
ul {
  padding: 0;
}
li {
  text-align: center;
  list-style: none;
  box-shadow: inset 0 0 5px 0 rgba(0,0,0,0.6);
  padding: 10px;
  border-radius: 5px;
}
li, button {
  margin: 10px;
}
button {
  border-radius: 5px;
  cursor: pointer;
}
button:not(.delete) {
  background-color: #00f;
  color: #fff;
  font-size: 1.5em;
  height: 50px;
  min-width: 140px;
  border: none;
  outline: none;
}
.delete {
  background-color: red;
  height: 28px;
  color: yellow;
}
</style>
