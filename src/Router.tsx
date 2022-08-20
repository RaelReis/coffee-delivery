import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PurchaseContext } from './contexts/purchaseContext'
import { DefaultLayout } from './layout/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  const { clientInfo } = useContext(PurchaseContext)

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/success"
          element={!clientInfo.cep ? <Navigate to="/home" /> : <Success />}
        />
      </Route>
    </Routes>
  )
}
