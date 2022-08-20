import { SuccessContainer } from './style'
import successImg from '../../assets/success_img.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { PurchaseContext } from '../../contexts/purchaseContext'
import { useContext } from 'react'
import { DefaultContainer } from '../../layout/DefaultContainer'

const metodoPagamentoMap = {
  credit: 'Cartão de Crédito',
  debt: 'Cartão de Débito',
  cash: 'Dinheiro',
} as const

export function Success() {
  const { clientInfo } = useContext(PurchaseContext)

  return (
    <DefaultContainer>
      <SuccessContainer>
        <header>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </header>
        <div className="success-banner">
          <div className="order-info">
            <div className="order-item local">
              <div className="icon-wrapper">
                <MapPin size={20} weight="fill" />
              </div>
              <div className="text-wrapper">
                <span>
                  Entrega em{' '}
                  <span className="bold-text">{`${clientInfo.rua}, ${clientInfo.numero}`}</span>
                </span>
                <span>{`${clientInfo.bairro} - ${clientInfo.cidade}, ${clientInfo.uf}`}</span>
              </div>
            </div>
            <div className="order-item time">
              <div className="icon-wrapper">
                <Timer size={20} weight="fill" />
              </div>
              <div className="text-wrapper">
                <span>Previsão de entrega</span>
                <span className="bold-text">20 min - 30 min</span>
              </div>
            </div>
            <div className="order-item payment">
              <div className="icon-wrapper">
                <CurrencyDollar size={20} />
              </div>
              <div className="text-wrapper">
                <span>Pagamento na entrega</span>
                <span className="bold-text">
                  {metodoPagamentoMap[clientInfo.metodoPagamento]}
                </span>
              </div>
            </div>
          </div>
          <img src={successImg} alt="Um homem em cima de uma motocicleta" />
        </div>
      </SuccessContainer>
    </DefaultContainer>
  )
}
