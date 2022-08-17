import { FormProvider, useForm } from 'react-hook-form'
import { CartInfo } from './components/CartInfo'
import { ClientForm } from './components/ClientForm'
import { CheckoutContainer } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

const purchaseValidationSchema = zod.object({
  bairro: zod.string(),
  cep: zod.string(),
  cidade: zod.string(),
  complemento: zod.string(),
  numero: zod.string().min(5, 'teste').max(10, 'teste'),
  rua: zod.string(),
  uf: zod.string(),
})

type PurchaseData = zod.infer<typeof purchaseValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<PurchaseData>({
    resolver: zodResolver(purchaseValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
    },
  })

  const { handleSubmit } = checkoutForm

  function onSubmit(data: PurchaseData) {
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
