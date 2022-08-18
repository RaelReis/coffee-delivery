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
  InputWrapper,
  PaymentBox,
  PaymentContent,
  PaymentHeader,
} from './style'

import InputMask from 'react-input-mask'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import axios from 'axios'
import { PurchaseData } from '../..'

export function ClientForm() {
  const { register, watch, setValue, formState, clearErrors, setError } =
    useFormContext<PurchaseData>()

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
        clearErrors(['rua', 'bairro', 'cidade', 'uf'])
      }
    })()
  }, [cep, setValue, setError, clearErrors])

  const isCepValid = cep.length === 9

  const {
    bairro: bairroError,
    cep: cepError,
    cidade: cidadeError,
    numero: numeroError,
    rua: ruaError,
    uf: ufError,
    paymentMethod: paymentError,
  } = formState.errors

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
          <InputWrapper id="cep">
            <InputMask
              mask="99999-999"
              type="text"
              placeholder="CEP"
              maskChar={null}
              {...register('cep')}
            />
            {cepError && (
              <span className="error-message">{cepError.message}</span>
            )}
          </InputWrapper>
          <InputWrapper id="rua">
            <input
              type="text"
              placeholder="Rua"
              disabled={isCepValid}
              {...register('rua')}
            />
            {ruaError && (
              <span className="error-message">{ruaError.message}</span>
            )}
          </InputWrapper>
          <InputWrapper id="numero">
            <input
              type="text"
              placeholder="Número"
              {...register('numero', {
                valueAsNumber: true,
              })}
            />
            {numeroError && (
              <span className="error-message">{numeroError.message}</span>
            )}
          </InputWrapper>
          <InputWrapper id="complemento">
            <input
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
          </InputWrapper>
          <InputWrapper id="bairro">
            <input
              type="text"
              placeholder="Bairro"
              disabled={isCepValid}
              {...register('bairro')}
            />
            {bairroError && (
              <span className="error-message">{bairroError.message}</span>
            )}
          </InputWrapper>
          <InputWrapper id="cidade">
            <input
              type="text"
              placeholder="Cidade"
              disabled={isCepValid}
              {...register('cidade')}
            />
            {cidadeError && (
              <span className="error-message">{cidadeError.message}</span>
            )}
          </InputWrapper>
          <InputWrapper id="uf">
            <input
              type="text"
              placeholder="UF"
              disabled={isCepValid}
              {...register('uf')}
            />
            {ufError && (
              <span className="error-message">{ufError.message}</span>
            )}
          </InputWrapper>
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
          <input
            type="radio"
            id="credit"
            value="credit"
            {...register('paymentMethod')}
          />
          <label htmlFor="credit">
            <CreditCard size={25} />
            Cartão de crédito
          </label>
          <input
            type="radio"
            id="debt"
            value="debt"
            {...register('paymentMethod')}
          />
          <label htmlFor="debt">
            <Bank size={25} />
            cartão de débito
          </label>
          <input
            type="radio"
            id="cash"
            value="cash"
            {...register('paymentMethod')}
          />
          <label htmlFor="cash">
            <Money size={25} />
            dinheiro
          </label>
        </PaymentContent>
        {paymentError && (
          <span className="error-message">{paymentError.message}</span>
        )}
      </PaymentBox>
    </ClientInfoContainer>
  )
}
