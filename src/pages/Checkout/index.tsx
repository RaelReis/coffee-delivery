import { FormProvider, useForm } from 'react-hook-form'
import { CartInfo } from './components/CartInfo'
import { ClientForm } from './components/ClientForm'
import { CheckoutContainer } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  purchaseValidationSchema,
  PurchaseValues,
} from '../../schemas/zod/purchaseValidationSchema'
import { useContext } from 'react'
import { PurchaseContext } from '../../contexts/purchaseContext'
import { useNavigate } from 'react-router-dom'
import { DefaultContainer } from '../../layout/DefaultContainer'

export function Checkout() {
  const checkoutForm = useForm<PurchaseValues>({
    resolver: zodResolver(purchaseValidationSchema),
    defaultValues: {
      bairro: '',
      cidade: '',
      cep: '',
      complemento: '',
      rua: '',
      uf: '',
    },
  })

  const { handleSubmit } = checkoutForm
  const { addClientInfo, clearCart } = useContext(PurchaseContext)
  const navigate = useNavigate()

  function onSubmit(data: PurchaseValues) {
    addClientInfo(data)
    clearCart()
    navigate('/success')
  }

  console.count('render')

  return (
    <DefaultContainer>
      <CheckoutContainer>
        <FormProvider {...checkoutForm}>
          <form action="/" onSubmit={handleSubmit(onSubmit)}>
            <ClientForm />
            <CartInfo />
          </form>
        </FormProvider>
      </CheckoutContainer>
    </DefaultContainer>
  )
}
