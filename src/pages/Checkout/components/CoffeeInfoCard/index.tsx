import { RequestCoffee } from '../../../../contexts/requestContext'
import { CoffeeCardOptions, CoffeeInfoCardContainer } from './style'

interface CoffeeInfoCardProps {
  request: RequestCoffee
}

export function CoffeeInfoCard({ request }: CoffeeInfoCardProps) {
  const { coffee, quantity } = request

  const formatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(coffee.price)

  return (
    <CoffeeInfoCardContainer>
      <img src={coffee.imageUrl} alt={coffee.name} />
      <CoffeeCardOptions>{coffee.name}</CoffeeCardOptions>
      <span>{formatedPrice}</span>
    </CoffeeInfoCardContainer>
  )
}
