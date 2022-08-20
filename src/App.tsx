import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PruchaseProvider } from './contexts/purchaseContext'

import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyle'
import { defaultTheme } from './styles/theme/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PruchaseProvider>
          <Router />
        </PruchaseProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
