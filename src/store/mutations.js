import itemsService from '../services/items.service'
import { PULL } from './consts'

export default {
    [PULL] () {
        itemsService.pullItems()
    }
}