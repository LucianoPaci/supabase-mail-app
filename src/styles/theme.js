import { createTheme, responsiveFontSizes } from '@mui/material'

export const getAppTheme = () => {
  let theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  theme = responsiveFontSizes(theme)
  return theme
}
