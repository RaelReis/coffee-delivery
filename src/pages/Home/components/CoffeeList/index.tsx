import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, List } from './style'
import { coffeeData } from '../../../../utils/coffeeData'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {coffeeData.map((coffee) => (
          <CoffeeCard key={coffee.id} data={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
