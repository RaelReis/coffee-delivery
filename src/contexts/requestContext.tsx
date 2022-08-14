import { createContext, ReactNode, useReducer } from 'react'
import { updateCartFromCoffeeRequestAction } from '../reducers/Cart/action'
import { cartReducer } from '../reducers/Cart/reducer'
import { Coffee } from '../utils/coffeeData'

interface RequestProviderProps {
  children: ReactNode
}

export type RequestCoffe = {
  coffee: Coffee
  quantity: number
}

interface RequestContextProps {
  cart: RequestCoffe[]
  updateCartFromCoffeeRequest: (coffeInfo: Coffee, quantity: number) => void
}

export const RequestContext = createContext({} as RequestContextProps)

export function RequestProvider({ children }: RequestProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [])

  function updateCartFromCoffeeRequest(coffeInfo: Coffee, quantity: number) {
    dispatch(updateCartFromCoffeeRequestAction(coffeInfo, quantity))
  }

  return (
    <RequestContext.Provider value={{ cart, updateCartFromCoffeeRequest }}>
      {children}
    </RequestContext.Provider>
  )
}
