import { produce } from 'immer'
import { WritableDraft } from 'immer/dist/internal'
import { Coffee } from '../../utils/coffeeList'
import { CartActionTypes } from './action'

export const initialCartState = {
  requests: [] as Coffee[],
  total: 0,
}

export type CartState = typeof initialCartState

type CartAction =
  | {
      type: typeof CartActionTypes.ADD_TO_CART
      payload: {
        coffee: Coffee
      }
    }
  | {
      type: typeof CartActionTypes.REMOVE_FROM_CART
      payload: {
        id: string
      }
    }
  | {
      type: typeof CartActionTypes.UPDATE_QUANTITY
      payload: {
        id: string
        quantity: number
      }
    }
  | {
      type: typeof CartActionTypes.CLEAR_CART
      payload: {}
    }

// Utils functions
function calcTotalPriceByItens(draft: WritableDraft<CartState>) {
  return draft.requests.reduce((total, coffee) => {
    return (total += coffee.quantity * coffee.price)
  }, 0)
}

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      console.log(action.payload)
      const alreadyAddedCoffeIndex = state.requests.findIndex(
        (coffee) => coffee.id === action.payload.coffee.id,
      )
      return produce(state, (draft) => {
        if (alreadyAddedCoffeIndex > -1) {
          draft.requests[alreadyAddedCoffeIndex].quantity +=
            action.payload.coffee.quantity
          draft.total = calcTotalPriceByItens(draft)
          return
        }

        draft.requests.push(action.payload.coffee)
        draft.total = calcTotalPriceByItens(draft)
      })
    }
    case CartActionTypes.UPDATE_QUANTITY: {
      return produce(state, (draft) => {
        const toUpdateItemIndex = draft.requests.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )
        if (toUpdateItemIndex > -1 && action.payload.quantity > 0) {
          draft.requests[toUpdateItemIndex].quantity = action.payload.quantity
          draft.total = calcTotalPriceByItens(draft)
        }
      })
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        draft.requests = draft.requests.filter(
          (request) => request.id !== action.payload.id,
        )
        draft.total = calcTotalPriceByItens(draft)
      })
    }
    case CartActionTypes.CLEAR_CART:
      return initialCartState
    default:
      return state
  }
}
