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

export function ClientForm() {
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
          <input id="cep" type="text" placeholder="CEP" />
          <input id="rua" type="text" placeholder="Rua" />
          <input id="numero" type="text" placeholder="Número" />
          <input id="complemento" type="text" placeholder="Complemento" />
          <input id="bairro" type="text" placeholder="Bairro" />
          <input id="cidade" type="text" placeholder="Cidade" />
          <input id="uf" type="text" placeholder="UF" />
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
