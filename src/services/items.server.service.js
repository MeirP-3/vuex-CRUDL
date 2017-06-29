import axios from 'axios-es6'

const url = 'localhost:3003/data'

const items = []

let nextId = ('nextId') || 1

export default {

    pushItems(items) {
        const pm = axios.post('/items', items)
        return pm
    },

    setId(item) {
        const pm = new Promise((resolve, reject) => {
            item._id = nextId
            nextId++
            localStorage.setItem('nextId', nextId)
            resolve()
        })
        return pm
    },

    create(item) {
        const pm = new Promise(resolve => {
            const allItems = this.pullItems()
            allItems.push(item)
            this.pushItems(allItems)
            resolve()
        })
        return pm
    },

    pullItems() {
        const allItems = JSON.parse(localStorage.getItem('items')) || []
        items.splice(0, items.length, ...allItems)
        return items
    },

    update(updatedItem) {
        const pm = new Promise((resolve, reject) => {
            if (items.length) {
                const idx = items.findIndex((item) => item._id === updatedItem._id)
                if (idx > -1) {
                    const allItems = this.pullItems()
                    allItems.splice(idx, 1, updatedItem)
                    this.pushItems(allItems)
                    resolve()
                }
            }
            reject('Error: item with id ' + updatedItem._id + ' was not found')
        })
        return pm
    },

    delete(item) {
        const pm = new Promise((resolve, reject) => {

            let atLeast2 = items.length > 1
            const allItems = this.pullItems()
            allItems.splice(items.indexOf(item), 1)

            if (atLeast2) this.pushItems(allItems)
            else localStorage.removeItem('items', '')

            resolve()
        })
        return pm
    }
}