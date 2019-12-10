import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import homeEpic, { addCount } from './home'

export const epics = combineEpics(
  homeEpic
)

export const reducer = combineReducers({
  addCount
})
