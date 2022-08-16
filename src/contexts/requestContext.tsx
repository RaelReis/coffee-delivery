import { createContext, ReactNode, useReducer } from 'react'
import {
  updateCartFromCoffeeRequestAction,
  updateQuantityItemAction,
  removeItemFromCartAction,
} from '../reducers/Cart/action'
import { cartReducer } from '../reducers/Cart/reducer'
import { Coffee } from '../utils/coffeeData'

interface RequestProviderProps {
  children: ReactNode
}

export type RequestCoffee = {
  id?: string
  coffee: Coffee
  quantity: number
}

export type RequestCart = {
  requests: RequestCoffee[]
  total: number
}

interface RequestContextProps {
  cart: RequestCart
  updateCartFromCoffeeRequest: (coffeInfo: Coffee, quantity: number) => void
  updateItemQuantity: (coffeInfo: Coffee, quantity: number) => void
  removeItemFromCart: (
    requestId: string,
    coffeeId: Coffee,
    quantity: number,
  ) => void
}

export const RequestContext = createContext({} as RequestContextProps)

export function RequestProvider({ children }: RequestProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, { requests: [], total: 0 })

  function updateCartFromCoffeeRequest(coffeInfo: Coffee, quantity: number) {
    dispatch(updateCartFromCoffeeRequestAction(coffeInfo, quantity))
  }

  function updateItemQuantity(coffeInfo: Coffee, newQuantity: number) {
    dispatch(updateQuantityItemAction(coffeInfo, newQuantity))
  }

  function removeItemFromCart(
    requestId: string,
    coffeInfo: Coffee,
    newQuantity: number,
  ) {
    dispatch(removeItemFromCartAction(requestId, coffeInfo, newQuantity))
  }

  return (
    <RequestContext.Provider
      value={{
        cart,
        updateCartFromCoffeeRequest,
        updateItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}
