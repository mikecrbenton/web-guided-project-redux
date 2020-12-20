import {combineReducers} from 'redux'
// INDIVIDUAL REDUCERS
import {titleReducer} from './titleReducer'
import {dragonListReducer} from './dragonlistReducer'

export const rootReducer = combineReducers({
      dragonList: dragonListReducer,
      title: titleReducer
})