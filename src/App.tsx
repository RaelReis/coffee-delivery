import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyle'
import { defaultTheme } from './styles/theme/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
