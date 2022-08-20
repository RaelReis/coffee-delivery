import { Coffee } from '../../utils/coffeeList'

export const CartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
} as const

export function updateCartFromCoffeeRequestAction(coffee: Coffee) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function updateQuantityItemAction(id: string, quantity: number) {
  return {
    type: CartActionTypes.UPDATE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  }
}

export function removeItemFromCartAction(id: string) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function clearCartAction() {
  return {
    type: CartActionTypes.CLEAR_CART,
    payload: {},
  }
}
