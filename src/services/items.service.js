const items = []
let nextId = JSON.parse(localStorage.getItem('nextId')) || 1

export default {

    setId(item) {
        item._id = nextId
        nextId++
        localStorage.setItem('nextId', nextId)
        return item
    },

    pullItems() {
        const allItems = JSON.parse(localStorage.getItem('items')) || []
        items.splice(0, items.length, ...allItems)
        return items
    },

    create(item) {
        items.push(item)
        localStorage.setItem('items', JSON.stringify(items))
    },

    update(updatedItem) {
        if (items.length) {
            const idx = items.findIndex((item) => item._id === updatedItem._id)
            items.splice(idx, 1, updatedItem)
            localStorage.setItem('items', JSON.stringify(items))
        }
    },

    delete(item) {
        let atLeast2 = items.length > 1
        items.splice(items.indexOf(item), 1)
        if(atLeast2) localStorage.setItem('items', JSON.stringify(items))
        else localStorage.setItem('items', '')
    }
}