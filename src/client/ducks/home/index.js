import { combineEpics } from 'redux-observable'
import { addCountActionEpic, reducer as addCount } from './addCount'

export default combineEpics(
  addCountActionEpic
)

export {
  addCount
}
