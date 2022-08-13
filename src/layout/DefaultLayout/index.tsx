import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { DefaultLayoutCountainer } from './style'

export function DefaultLayout() {
  return (
    <DefaultLayoutCountainer>
      <Header />
      <Outlet />
    </DefaultLayoutCountainer>
  )
}
