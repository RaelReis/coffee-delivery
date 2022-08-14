import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RequestProvider } from './contexts/requestContext'

import { Router } from './Router'
import { GlobalStyle } from './styles/globalStyle'
import { defaultTheme } from './styles/theme/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RequestProvider>
          <Router />
        </RequestProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
