import { RequestCoffee, RequestCart } from '../../contexts/requestContext'
import { produce } from 'immer'
import { WritableDraft } from 'immer/dist/internal'
import { ActionTypes } from './action'

interface Action {
  type: string
  payload: RequestCoffee
}

function calcTotalPriceByItens(draft: WritableDraft<RequestCart>) {
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
          draft.total = calcTotalPriceByItens(draft)
          return
        }

        draft.requests.push(action.payload)
        draft.total = calcTotalPriceByItens(draft)
      })
    }
    case ActionTypes.UPDATE_QUANTITY: {
      return produce(state, (draft) => {
        const toUpdateItemIndex = draft.requests.findIndex(
          (request) => request.coffee.id === action.payload.coffee.id,
        )
        if (toUpdateItemIndex > -1 && action.payload.quantity > 0) {
          draft.requests[toUpdateItemIndex].quantity = action.payload.quantity
          draft.total = calcTotalPriceByItens(draft)
        }
      })
    }
    case ActionTypes.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        draft.requests = draft.requests.filter(
          (request) => request.id !== action.payload.id,
        )
        draft.total = calcTotalPriceByItens(draft)
      })
    }
    default:
      return state
  }
}
