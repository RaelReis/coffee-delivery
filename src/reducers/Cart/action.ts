import { Coffee } from '../../utils/coffeeData'
import { v4 as uuid } from 'uuid'

export const enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
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
