import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartNumber, CartWrapper, HeaderBox, HeaderContainer } from './style'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { RequestContext } from '../../contexts/requestContext'
import { useContext } from 'react'

export function Header() {
  const { cart } = useContext(RequestContext)

  const cartTotalItems = cart.requests.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  )

  return (
    <HeaderContainer>
      <HeaderBox>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <CartWrapper>
          <span>
            <MapPin size={25} weight="fill" />
            Porto Alegre, RS
          </span>
          <NavLink to="checkout">
            {cartTotalItems > 0 && (
              <CartNumber key={cartTotalItems}>{cartTotalItems}</CartNumber>
            )}
            <ShoppingCart size={25} weight="fill" />
          </NavLink>
        </CartWrapper>
      </HeaderBox>
    </HeaderContainer>
  )
}
