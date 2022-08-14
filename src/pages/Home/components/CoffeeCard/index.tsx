import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { RequestContext } from '../../../../contexts/requestContext'
import { Coffee } from '../../../../utils/coffeeData'
import {
  CoffeBuyBox,
  CoffeInfoBox,
  ConfeeCardContainer,
  QuantityNumber,
  TagsWrapper,
} from './style'

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { updateCartFromCoffeeRequest } = useContext(RequestContext)

  function imcrementQuantity() {
    quantity >= 1 && setQuantity((prev) => prev + 1)
  }

  function decreaseQuantity() {
    quantity > 1 && setQuantity((prev) => prev - 1)
  }

  function handleAddCoffee() {
    updateCartFromCoffeeRequest(data, quantity)
  }

  return (
    <ConfeeCardContainer>
      <img src={data.imageUrl} alt={data.name} />

      <CoffeInfoBox>
        <TagsWrapper>
          {data.tags.map((tag) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
        </TagsWrapper>

        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </CoffeInfoBox>

      <CoffeBuyBox>
        <span>
          R$ <span>9,99</span>
        </span>
        <div>
          <button onClick={decreaseQuantity}>
            <Minus size={15} weight="bold" />
          </button>
          <QuantityNumber>{quantity}</QuantityNumber>
          <button onClick={imcrementQuantity}>
            <Plus size={15} weight="bold" />
          </button>
        </div>
        <button onClick={handleAddCoffee}>
          <ShoppingCart size={25} weight="fill" />
        </button>
      </CoffeBuyBox>
    </ConfeeCardContainer>
  )
}
