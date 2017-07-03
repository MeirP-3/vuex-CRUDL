import axios from 'axios-es6'

const url = 'http://localhost:2999/'

const items = []

export default {
    
    // pushItems(items) {
    //     const pm = axios.put('/', items)
    //     return pm
    // },

    // setId(item) {
    //     const pm = new Promise((resolve, reject) => {
    //         item._id = nextId
    //         nextId++
    //         localStorage.setItem('nextId', nextId)
    //         resolve()
    //     })
    //     return pm
    // },

    create(item) {
        const pm = axios.post(url, item)
        return pm
    },

    pullItems() {
        axios.get(url)
        .then(res => items.splice(0, items.length, ...res.data))
        return items
    },

    update(updatedItem) {
        const updateUrl = url + updatedItem._id
        const pm = axios.put(updateUrl, updatedItem)
        return pm
    },

    delete(itemId) {
        const deleteUrl = url + itemId
        const pm = axios.delete(deleteUrl)
        return pm
    }
}