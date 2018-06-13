import { handleActions } from 'redux-actions'
import { TOGGLE_DARK } from '../types'
// import { combineReducers } from 'redux'

export default handleActions({
  [TOGGLE_DARK] (state) {
    return {
      ...state,
      darkMode: !state.darkMode
    }
  }
}, {
  darkMode: false
})
