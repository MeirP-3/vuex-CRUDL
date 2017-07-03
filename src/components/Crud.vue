<template>
<transition name="slide-right">
  <div>
    <div class="experiment">
        <button v-if="show" @click="create">
          create item
        </button>

    <!--<button @click="filterUnder5">filter under 5</button>
    <button @click="resetFilter">reset filter</button>-->
    </div>
    <hr>
    <ul>
        <li v-for="item in items" :key="item._id">
          {{item}}
        <button class="delete" @click="deleteItem(item._id)">delete</button>
        <button class="update" @click="updateItem(item._id)">update</button>
      </li>
    </ul>
  </div>
  </transition>
</template>

<script>
import {
  CREATE,
  UPDATE,
  DELETE
} from '../store/consts'

export default {
  name: 'app',
  mounted() {
    this.show = true
  },
  data() {
    return {
      show: false
    }
  },
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

    updateItem (itemId) {
      this.$store.dispatch({
        type: UPDATE,
        item: {
          _id: itemId,
          I: 'am',
          updated: 'now'
        }
      })
    },

    deleteItem(itemId) {
      this.$store.dispatch({
        type: DELETE,
        itemId
      })
    }
  }
}
</script>

<style scoped>
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
.delete {
  background-color: red;
}
.update {
  background: green;
}
.delete, .update {
  color: yellow;
  height: 28px;
}
.slide-right-enter-active {
  transition: all 1s ease;
}
.slide-right-enter {
  transform: translate(-100vw);
  opacity: 0.2;
}
</style>
