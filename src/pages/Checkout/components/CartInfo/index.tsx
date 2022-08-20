import { useContext } from 'react'
import { PurchaseContext } from '../../../../contexts/purchaseContext'
import { CoffeeInfoCard } from '../CoffeeInfoCard'
import {
  CardInfoContainer,
  CartInfoBox,
  CartList,
  EmptyCart,
  PriceInfo,
  PriceInfoBox,
  TotalInfo,
} from './style'

const DELIVERY_PRICE = Math.random() * 10

export function CartInfo() {
  const { cart } = useContext(PurchaseContext)

  const formatedCartTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cart.total)

  const formatedDeliveryPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(DELIVERY_PRICE)

  const formatedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cart.total + DELIVERY_PRICE)

  return (
    <CardInfoContainer>
      <h2>Cafés selecionados</h2>

      <CartInfoBox>
        {cart.requests.length > 0 ? (
          <>
            <CartList>
              {cart.requests.map((coffee) => (
                <CoffeeInfoCard key={coffee.id} coffee={coffee} />
              ))}
            </CartList>
            <PriceInfoBox>
              <PriceInfo>
                <span>Total de itens</span>
                <span>{formatedCartTotalPrice}</span>
              </PriceInfo>
              <PriceInfo>
                <span>Entrega</span>
                <span>{formatedDeliveryPrice}</span>
              </PriceInfo>
              <TotalInfo>
                <span>Total</span>
                <span>{formatedTotalPrice}</span>
              </TotalInfo>
            </PriceInfoBox>
            <button>Confiarmar pedido</button>
          </>
        ) : (
          <EmptyCart>
            <span>Opa!</span>
            <span>Você não tem nenhum item no carrinho.</span>
          </EmptyCart>
        )}
      </CartInfoBox>
    </CardInfoContainer>
  )
}
