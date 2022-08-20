import { createContext, ReactNode, useReducer } from 'react'
import {
  updateCartFromCoffeeRequestAction,
  updateQuantityItemAction,
  removeItemFromCartAction,
  clearCartAction,
} from '../reducers/Cart/action'
import { addClientInfoAction } from '../reducers/ClientInfo/action'
import {
  cartReducer,
  initialCartState,
  CartState,
} from '../reducers/Cart/reducer'
import {
  ClientState,
  clientInfoReducer,
  initialClientState,
} from '../reducers/ClientInfo/reducer'
import { Coffee } from '../utils/coffeeList'

interface PurchaseContextProps {
  cart: CartState
  clientInfo: ClientState
  updateCartFromCoffeeRequest: (coffeInfo: Coffee) => void
  updateItemQuantity: (id: string, quantity: number) => void
  removeItemFromCart: (id: string) => void
  clearCart: () => void
  addClientInfo: (clientInfo: ClientState) => void
}

interface PurchaseProviderProps {
  children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextProps)

export function PruchaseProvider({ children }: PurchaseProviderProps) {
  const [cart, cartDispatch] = useReducer(cartReducer, initialCartState)
  const [clientInfo, clientInfoDispatch] = useReducer(
    clientInfoReducer,
    initialClientState,
  )

  function updateCartFromCoffeeRequest(coffee: Coffee) {
    cartDispatch(updateCartFromCoffeeRequestAction(coffee))
  }

  function updateItemQuantity(id: string, newQuantity: number) {
    cartDispatch(updateQuantityItemAction(id, newQuantity))
  }

  function removeItemFromCart(id: string) {
    cartDispatch(removeItemFromCartAction(id))
  }

  function clearCart() {
    cartDispatch(clearCartAction())
  }

  function addClientInfo(clientInfo: ClientState) {
    clientInfoDispatch(addClientInfoAction(clientInfo))
  }

  return (
    <PurchaseContext.Provider
      value={{
        cart,
        clientInfo,
        updateCartFromCoffeeRequest,
        updateItemQuantity,
        removeItemFromCart,
        clearCart,
        addClientInfo,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}
