import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React, { useMemo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { AuthProvider } from './contexts/Auth'
import { getAppTheme } from './styles/theme'
function App() {
  const theme = useMemo(() => getAppTheme(), [])
  const renderedRoutes = useRoutes(routes)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>{renderedRoutes}</AuthProvider>
    </ThemeProvider>
  )
}

export default App
