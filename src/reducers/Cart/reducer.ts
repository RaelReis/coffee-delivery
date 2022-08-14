import { RequestCoffe } from '../../contexts/requestContext'
import { produce } from 'immer'
import { ActionTypes } from './action'

interface Action {
  type: string
  payload: RequestCoffe
}

export function cartReducer(state: RequestCoffe[], action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      console.log(state)
      const alreadyAddedCoffe = state.findIndex(
        (coffeeReq) => coffeeReq.coffee.id === action.payload.coffee.id,
      )

      return produce(state, (draft) => {
        if (alreadyAddedCoffe > -1) {
          draft.map((coffeeReq) => {
            if (coffeeReq.coffee.id === action.payload.coffee.id) {
              return (coffeeReq.quantity += action.payload.quantity)
            }
            return coffeeReq
          })
        } else {
          draft.push(action.payload)
        }
      })
    }
    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item.coffee.id !== action.payload.coffee.id)
    default:
      return state
  }
}
