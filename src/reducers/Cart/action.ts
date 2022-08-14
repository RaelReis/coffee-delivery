import { Coffee } from '../../utils/coffeeData'

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
      coffee,
      quantity,
    },
  }
}
