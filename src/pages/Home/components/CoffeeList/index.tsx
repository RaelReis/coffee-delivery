import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, List } from './style'
import { coffeeList } from '../../../../utils/coffeeList'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </List>
    </CoffeeListContainer>
  )
}
