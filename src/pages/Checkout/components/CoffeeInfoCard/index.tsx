import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { PurchaseContext } from '../../../../contexts/purchaseContext'
import { Coffee } from '../../../../utils/coffeeList'
import {
  ButtonsWrapper,
  CoffeeCardOptions,
  CoffeeInfoCardContainer,
  QuantityBox,
  QuantityNumber,
  RemoveButton,
} from './style'

interface CoffeeInfoCardProps {
  coffee: Coffee
}

export function CoffeeInfoCard({ coffee }: CoffeeInfoCardProps) {
  const { updateItemQuantity, removeItemFromCart } = useContext(PurchaseContext)

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffee.price)

  function incrementQuantity() {
    updateItemQuantity(coffee.id, coffee.quantity + 1)
  }

  function decreasedQuantity() {
    updateItemQuantity(coffee.id, coffee.quantity - 1)
  }

  function removeItem() {
    coffee.id && removeItemFromCart(coffee.id)
  }

  return (
    <CoffeeInfoCardContainer>
      <img src={coffee.imageUrl} alt={coffee.name} />
      <CoffeeCardOptions>
        {coffee.name}
        <ButtonsWrapper>
          <QuantityBox>
            <button title="menos" type="button" onClick={decreasedQuantity}>
              <Minus size={15} weight="bold" />
            </button>
            <QuantityNumber>{coffee.quantity}</QuantityNumber>
            <button title="mais" type="button" onClick={incrementQuantity}>
              <Plus size={15} weight="bold" />
            </button>
          </QuantityBox>
          <RemoveButton title="remover" type="button" onClick={removeItem}>
            <Trash size={20} />
            remover
          </RemoveButton>
        </ButtonsWrapper>
      </CoffeeCardOptions>
      <span>{formatedPrice}</span>
    </CoffeeInfoCardContainer>
  )
}
