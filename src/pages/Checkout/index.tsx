import { FormProvider, useForm } from 'react-hook-form'
import { CartInfo } from './components/CartInfo'
import { ClientForm } from './components/ClientForm'
import { CheckoutContainer } from './style'
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'

const purchaseValidationSchema = zod.object({
  bairro: zod
    .string()
    .min(1, 'Digite um bairro válido')
    .max(100, 'Bairro muito longo'),
  cep: zod
    .string()
    .min(9, 'Digite um CEP válido')
    .max(9, 'Digite um CEP válido'),
  cidade: zod.string().min(1, 'Digite uma cidade válida'),
  complemento: zod.string(),
  numero: zod
    .number({ invalid_type_error: 'Digite um número válido' })
    .min(1, 'Digite um número válido'),
  rua: zod.string().min(1, 'Digite uma rua válida'),
  uf: zod.string().min(1, 'Digite um UF válido'),
  paymentMethod: zod.enum(['credit', 'debt', 'cash'], {
    invalid_type_error: 'Selecione um método de pagamento',
  }),
})

export type PurchaseData = zod.infer<typeof purchaseValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<PurchaseData>({
    resolver: zodResolver(purchaseValidationSchema),
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      rua: '',
      uf: '',
    },
  })

  const { handleSubmit, formState } = checkoutForm

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
