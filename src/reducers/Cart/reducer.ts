import { RequestCoffee, RequestCart } from '../../contexts/requestContext'
import { produce } from 'immer'
import { ActionTypes } from './action'

interface Action {
  type: string
  payload: RequestCoffee
}

export function cartReducer(state: RequestCart, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const alreadyAddedCoffe = state.cart.findIndex(
        (coffeeReq) => coffeeReq.coffee.id === action.payload.coffee.id,
      )

      return produce(state, (draft) => {
        if (alreadyAddedCoffe > -1) {
          draft.cart.map((coffeeReq) => {
            if (coffeeReq.coffee.id === action.payload.coffee.id) {
              return (coffeeReq.quantity += action.payload.quantity)
            }
            return coffeeReq
          })
          draft.total += action.payload.coffee.price * action.payload.quantity
        } else {
          draft.cart.push(action.payload)
          draft.total += action.payload.coffee.price * action.payload.quantity
        }
      })
    }
    default:
      return state
  }
}
