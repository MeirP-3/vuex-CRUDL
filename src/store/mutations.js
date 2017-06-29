import itemsService from '../services/items.service'
import {
    CREATE,
    UPDATE,
    DELETE
} from './consts'

export default {

    [CREATE] (state, {item}) {
        itemsService.create(item)
    },

    [UPDATE] (state, {item}) {
        itemsService.update(item)
    },

    [DELETE] (state, {item}) {
        itemsService.delete(item)
    }
}