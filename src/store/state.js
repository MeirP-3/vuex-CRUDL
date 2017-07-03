import itemsService from '../services/items.service'
export default {
    initialState: {
        backgroundColor: '#FFFFFF',
        color: '#000000'
    },
    colors: JSON.parse(localStorage.getItem('colors')) || initialState,
    showModal: false,
    items: itemsService.pullItems()
}