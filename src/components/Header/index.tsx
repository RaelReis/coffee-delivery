import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartNumber, CartWrapper, HeaderBox, HeaderContainer } from './style'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBox>
        <img src={logo} alt="" />
        <CartWrapper>
          <span>
            <MapPin size={25} weight="fill" />
            Porto Alegre, RS
          </span>
          <NavLink to="checkout">
            <CartNumber>3</CartNumber>
            <ShoppingCart size={25} weight="fill" />
          </NavLink>
        </CartWrapper>
      </HeaderBox>
    </HeaderContainer>
  )
}
