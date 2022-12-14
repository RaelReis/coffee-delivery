import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartNumber, CartWrapper, HeaderBox, HeaderContainer } from './style'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { PurchaseContext } from '../../contexts/purchaseContext'
import { useContext } from 'react'

export function Header() {
  const { cart } = useContext(PurchaseContext)

  const cartTotalItems = cart.requests.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  )

  return (
    <HeaderContainer>
      <HeaderBox>
        <NavLink title="home" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <CartWrapper>
          <span>
            <MapPin size={25} weight="fill" />
            São Paulo, SP
          </span>
          <NavLink title="checkout" to="checkout">
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
