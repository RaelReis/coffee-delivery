import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartNumber, CartWrapper, HeaderBox, HeaderContainer } from './style'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { RequestContext } from '../../contexts/requestContext'
import { useContext } from 'react'

export function Header() {
  const { cart } = useContext(RequestContext)

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
            {cart && cart.total > 0 && (
              <CartNumber key={cart.total}>{cart.cart.length}</CartNumber>
            )}
            <ShoppingCart size={25} weight="fill" />
          </NavLink>
        </CartWrapper>
      </HeaderBox>
    </HeaderContainer>
  )
}
