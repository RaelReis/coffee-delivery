import { FormEvent } from 'react'
import { CartInfo } from './components/CartInfo'
import { ClientForm } from './components/ClientForm'
import { CheckoutContainer } from './style'

export function Checkout() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <CheckoutContainer>
      <form action="/" onSubmit={handleSubmit}>
        <ClientForm />
        <CartInfo />
      </form>
    </CheckoutContainer>
  )
}
