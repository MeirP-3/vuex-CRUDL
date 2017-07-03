import itemsService from '../services/items.service'
import { PULL } from './consts'

export default {
    changeBackgroundColor(state, color) {
      state.colors.backgroundColor = color
      localStorage.setItem('colors', JSON.stringify(state.colors))
    },
    changeColor(state, color) {
      state.colors.color = color
      localStorage.setItem('colors', JSON.stringify(state.colors))
    },
    resetColors(state) {
      state.colors = state.initialState
      localStorage.setItem('colors', JSON.stringify(state.initialState))
    },
    [PULL] () {
        itemsService.pullItems()
    }
}