export default {
    filterUnder5(state) {
        return state.items.filter((item)=>item._id >= 5)
    },
    allItems(state) {
        return state.items
    }
}