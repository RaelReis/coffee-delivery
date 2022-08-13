import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  CoffeBuyBox,
  CoffeInfoBox,
  ConfeeCardContainer,
  QuantityNumber,
} from './style'

type Tag = 'tradicional' | 'gelado' | 'com-leite' | 'especial' | 'alcoólico'

interface CoffeeCardProps {
  name: string
  description: string
  price: number
  tag: Tag
  imgUrl: string
}

const tagTypes = {
  tradicional: 'Tradicional',
  gelado: 'Gelado',
  'com-leite': 'Com Leite',
  especial: 'ESpecial',
  alcoólico: 'alcoólico',
} as const

export function CoffeeCard({
  name,
  description,
  price,
  tag,
  imgUrl,
}: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function imcrementQuantity() {
    quantity >= 1 && setQuantity((prev) => prev + 1)
  }

  function decreaseQuantity() {
    quantity > 1 && setQuantity((prev) => prev - 1)
  }

  return (
    <ConfeeCardContainer>
      <img src={imgUrl} alt={name} />
      <CoffeInfoBox>
        <span>{tagTypes[tag]}</span>
        <h3>{name}</h3>
        <p>{description}</p>
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
        <button>
          <ShoppingCart size={25} weight="fill" />
        </button>
      </CoffeBuyBox>
    </ConfeeCardContainer>
  )
}
