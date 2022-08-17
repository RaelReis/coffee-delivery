import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressHeader,
  AdressBox,
  ClientInfoContainer,
  InputsWrapper,
  PaymentBox,
  PaymentContent,
  PaymentHeader,
} from './style'

import InputMask from 'react-input-mask'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import axios from 'axios'

export function ClientForm() {
  const { register, watch, setValue, formState } = useFormContext()

  const cep = watch('cep', '')

  useEffect(() => {
    ;(async function () {
      if (cep.length === 9) {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`,
        )
        if (data.erro) return
        setValue('rua', data.logradouro)
        setValue('bairro', data.bairro)
        setValue('cidade', data.localidade)
        setValue('uf', data.uf)
      }
    })()
  }, [cep, setValue])

  return (
    <ClientInfoContainer>
      <h2>Complete seu pedido</h2>
      {/* Address Box */}
      <AdressBox>
        <AddressHeader>
          <MapPinLine size={25} />
          <div>
            <h3>Endereço de Entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AddressHeader>
        <InputsWrapper>
          <InputMask
            mask="99999-999"
            id="cep"
            type="text"
            placeholder="CEP"
            maskChar={null}
            {...register('cep')}
          />
          <input
            id="rua"
            type="text"
            placeholder="Rua"
            disabled
            {...register('rua')}
          />
          <input
            id="numero"
            type="text"
            placeholder="Número"
            {...register('numero')}
          />
          <input
            id="complemento"
            type="text"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <input
            id="bairro"
            type="text"
            placeholder="Bairro"
            disabled
            {...register('bairro')}
          />
          <input
            id="cidade"
            type="text"
            placeholder="Cidade"
            disabled
            {...register('cidade')}
          />
          <input id="uf" type="text" placeholder="UF" {...register('uf')} />
        </InputsWrapper>
      </AdressBox>
      {/* Payment box */}
      <PaymentBox>
        <PaymentHeader>
          <CurrencyDollar size={25} />
          <div>
            <h3>Pagamento</h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </PaymentHeader>
        <PaymentContent>
          <button>
            <CreditCard size={25} />
            Cartão de crédito
          </button>
          <button>
            <Bank size={25} />
            cartão de débito
          </button>
          <button>
            <Money size={25} />
            dinheiro
          </button>
        </PaymentContent>
      </PaymentBox>
    </ClientInfoContainer>
  )
}
