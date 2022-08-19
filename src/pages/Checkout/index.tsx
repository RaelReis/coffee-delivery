import zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { CartInfo } from './components/CartInfo'
import { ClientForm } from './components/ClientForm'
import { CheckoutContainer } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import { purchaseValidationSchema } from '../../schemas/zod/purchaseValidationSchema'

export type PurchaseValues = zod.infer<typeof purchaseValidationSchema>

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

  function onSubmit(data: PurchaseValues) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <form action="/" onSubmit={handleSubmit(onSubmit)}>
          <ClientForm />
          <CartInfo />
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}
