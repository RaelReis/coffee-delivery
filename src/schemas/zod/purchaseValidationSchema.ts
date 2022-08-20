import zod from 'zod'
import axios from 'axios'

// Custom validations
const cepValidation = async (cep: string) => {
  if (cep.length < 9) return false

  const { data } = await axios.get(
    `https://viacep.com.br/ws/${cep.replace('-', '')}/json/`,
  )
  return !data.erro
}

// Schema

export const purchaseValidationSchema = zod.object({
  complemento: zod.string(),
  bairro: zod.string().min(1, 'Digite um bairro válido'),
  cidade: zod.string().min(3, 'Digite uma cidade válida'),
  uf: zod.string().min(2, 'Digite um UF válido').max(2, 'Digite um UF válido'),
  rua: zod.string().min(3, 'Digite uma rua válida'),
  numero: zod
    .number({ invalid_type_error: 'Digite um número válido' })
    .min(1, 'Digite um número válido'),
  metodoPagamento: zod.enum(['credit', 'debt', 'cash'], {
    invalid_type_error: 'Selecione um método de pagamento',
  }),
  cep: zod.string().refine(
    async (cep: string) => {
      return await cepValidation(cep)
    },
    {
      message: 'Digite um CEP válido',
    },
  ),
})

// Type

export type PurchaseValues = zod.infer<typeof purchaseValidationSchema>
