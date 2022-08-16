import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import {
  RequestCoffee,
  RequestContext,
} from '../../../../contexts/requestContext'
import {
  ButtonsWrapper,
  CoffeeCardOptions,
  CoffeeInfoCardContainer,
  QuantityBox,
  QuantityNumber,
  RemoveButton,
} from './style'

interface CoffeeInfoCardProps {
  request: RequestCoffee
}

export function CoffeeInfoCard({ request }: CoffeeInfoCardProps) {
  const { id, coffee, quantity } = request
  const { updateItemQuantity, removeItemFromCart } = useContext(RequestContext)

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffee.price)

  function incrementQuantity() {
    updateItemQuantity(coffee, quantity + 1)
  }

  function decreasedQuantity() {
    updateItemQuantity(coffee, quantity - 1)
  }

  function removeItem() {
    id && removeItemFromCart(id, coffee, quantity)
  }

  return (
    <CoffeeInfoCardContainer>
      <img src={coffee.imageUrl} alt={coffee.name} />
      <CoffeeCardOptions>
        {coffee.name}
        <ButtonsWrapper>
          <QuantityBox>
            <button onClick={decreasedQuantity}>
              <Minus size={15} weight="bold" />
            </button>
            <QuantityNumber>{quantity}</QuantityNumber>
            <button onClick={incrementQuantity}>
              <Plus size={15} weight="bold" />
            </button>
          </QuantityBox>
          <RemoveButton onClick={removeItem}>
            <Trash size={20} />
            remover
          </RemoveButton>
        </ButtonsWrapper>
      </CoffeeCardOptions>
      <span>{formatedPrice}</span>
    </CoffeeInfoCardContainer>
  )
}
