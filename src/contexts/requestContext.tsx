import { createContext, ReactNode, useReducer } from 'react'
import { updateCartFromCoffeeRequestAction } from '../reducers/Cart/action'
import { cartReducer } from '../reducers/Cart/reducer'
import { Coffee } from '../utils/coffeeData'

interface RequestProviderProps {
  children: ReactNode
}

export type RequestCoffee = {
  coffee: Coffee
  quantity: number
}

export type RequestCart = {
  cart: RequestCoffee[]
  total: number
}

interface RequestContextProps {
  cart: RequestCart
  updateCartFromCoffeeRequest: (coffeInfo: Coffee, quantity: number) => void
}

export const RequestContext = createContext({} as RequestContextProps)

export function RequestProvider({ children }: RequestProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, { cart: [], total: 0 })

  function updateCartFromCoffeeRequest(coffeInfo: Coffee, quantity: number) {
    dispatch(updateCartFromCoffeeRequestAction(coffeInfo, quantity))
  }

  return (
    <RequestContext.Provider value={{ cart, updateCartFromCoffeeRequest }}>
      {children}
    </RequestContext.Provider>
  )
}
