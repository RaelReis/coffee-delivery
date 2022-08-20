import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { PurchaseContext } from '../../../../contexts/purchaseContext'
import { coffeeList } from '../../../../utils/coffeeList'
import {
  CoffeBuyBox,
  CoffeInfoBox,
  ConfeeCardContainer,
  QuantityNumber,
  TagsWrapper,
} from './style'

interface CoffeeCardProps {
  coffee: typeof coffeeList[number]
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { updateCartFromCoffeeRequest } = useContext(PurchaseContext)

  function imcrementQuantity() {
    quantity >= 1 && setQuantity((prev) => prev + 1)
  }

  function decreaseQuantity() {
    quantity > 1 && setQuantity((prev) => prev - 1)
  }

  function handleAddCoffee() {
    updateCartFromCoffeeRequest({ ...coffee, quantity })
  }

  return (
    <ConfeeCardContainer>
      <img src={coffee.imageUrl} alt={coffee.name} />

      <CoffeInfoBox>
        <TagsWrapper>
          {coffee.tags.map((tag) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
        </TagsWrapper>

        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </CoffeInfoBox>

      <CoffeBuyBox>
        <span>
          R$ <span>9,99</span>
        </span>
        <div>
          <button title="menos" onClick={decreaseQuantity}>
            <Minus size={15} weight="bold" />
          </button>
          <QuantityNumber>{quantity}</QuantityNumber>
          <button title="mais" onClick={imcrementQuantity}>
            <Plus size={15} weight="bold" />
          </button>
        </div>
        <button title="adicionar ao carrinho" onClick={handleAddCoffee}>
          <ShoppingCart size={25} weight="fill" />
        </button>
      </CoffeBuyBox>
    </ConfeeCardContainer>
  )
}
