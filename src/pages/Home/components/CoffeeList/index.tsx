import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, List } from './style'
import americanCoffe from '../../../../assets/american_coffee.png'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
        <CoffeeCard
          imgUrl={americanCoffe}
          name="Café americano"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9}
          tag="especial"
        />
      </List>
    </CoffeeListContainer>
  )
}
