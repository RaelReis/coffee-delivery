import { Route, Routes, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
