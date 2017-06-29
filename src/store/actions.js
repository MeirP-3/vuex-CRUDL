import itemsService from '../services/items.service'
import {
    CREATE,
    UPDATE,
    DELETE
} from './consts'

export default {

    [CREATE] ({commit}, {item}) {
        item = itemsService.setId(item)
        commit ({
            type: CREATE, 
            item
        })
    },

    [UPDATE] ({commit}, {item}) {
        commit ({
            type: UPDATE,
            item
        })
    },

    [DELETE] ({commit}, {item}) {
        commit ({
            type: DELETE,
            item
        })
    }
}