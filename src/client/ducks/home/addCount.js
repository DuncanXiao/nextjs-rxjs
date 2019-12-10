import { ofType, ActionsObservable } from 'redux-observable'
import {
  map
} from 'rxjs/operators'

const initState = {
  count: 1
}
const types = {
  ADD: 'home/login/add',
  UPDATECOUNT: 'home/login/updateCount'
}
const action = type => args => ({ type, payload: args })

export const reducer = (state = initState, { payload, type }) => {
  switch (type) {
    case types.UPDATECOUNT:
      console.log(1)
      return ({
        ...state,
        count: payload.count
      })
    default:
      return state
  }
}

export const addCountAction = action(types.ADD)

export const addCountActionEpic = (action$, $state) => action$.pipe(
  ofType(types.ADD),
  map((action) => {
    const count = action.payload.count + 1
    return { type: types.UPDATECOUNT, payload: { count } }
  })
)
