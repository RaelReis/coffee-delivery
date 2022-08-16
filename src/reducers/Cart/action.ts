import { Coffee } from '../../utils/coffeeData'
import { v4 as uuid } from 'uuid'

export const enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function updateCartFromCoffeeRequestAction(
  coffee: Coffee,
  quantity: number,
) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      id: uuid(),
      coffee,
      quantity,
    },
  }
}

export function updateQuantityItemAction(coffee: Coffee, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: {
      coffee,
      quantity,
    },
  }
}

export function removeItemFromCartAction(
  requestId: string,
  coffee: Coffee,
  quantity: number,
) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id: requestId,
      coffee,
      quantity,
    },
  }
}
