import { RequestCoffee, RequestCart } from '../../contexts/requestContext'
import { produce } from 'immer'
import { WritableDraft } from 'immer/dist/internal'
import { ActionTypes } from './action'

interface Action {
  type: string
  payload: RequestCoffee
}

function calcTotalItemPriceByQuantity(draft: WritableDraft<RequestCart>) {
  return draft.requests.reduce((total, coffee) => {
    return (total += coffee.quantity * coffee.coffee.price)
  }, 0)
}

export function cartReducer(state: RequestCart, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const alreadyAddedCoffeIndex = state.requests.findIndex(
        (coffeeReq) => coffeeReq.coffee.id === action.payload.coffee.id,
      )
      return produce(state, (draft) => {
        if (alreadyAddedCoffeIndex > -1) {
          draft.requests[alreadyAddedCoffeIndex].quantity +=
            action.payload.quantity
          draft.total = calcTotalItemPriceByQuantity(draft)
          return
        }

        draft.requests.push(action.payload)
        draft.total = calcTotalItemPriceByQuantity(draft)
      })
    }
    default:
      return state
  }
}
