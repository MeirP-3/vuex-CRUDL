import itemsService from '../services/items.service'
export default {
    items: itemsService.pullItems(),
}