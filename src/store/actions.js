import itemsService from '../services/items.service'
import {
    PULL,
    CREATE,
    UPDATE,
    DELETE
} from './consts'

export default {

    [CREATE]({ commit }, payload) {
        itemsService.create(payload.item)
        .then(() => {
            commit(PULL)
        })
    },

    [UPDATE]({ commit }, payload) {
        itemsService.update(payload.item)
        .then(() => {
            commit(PULL)
        }, (error) => console.log(error))
    },

    [DELETE]({ commit }, payload) {
        itemsService.delete(payload.itemId)
        .then(() => {
            commit(PULL)
        }, (res) => {
            console.log('error: failed to delete', res)
        })
    }
}