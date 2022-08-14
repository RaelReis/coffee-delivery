import { CartInfo } from './components/CartInfo'
import { ClientForm } from './components/ClientForm'
import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="/">
        <ClientForm />
        <CartInfo />
      </form>
    </CheckoutContainer>
  )
}
