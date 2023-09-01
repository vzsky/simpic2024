import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import colors from './colors'
import styles from './styles'
import Button from './components/Button'

const components = {
  Button
}

const breakpoints = {
  sm: 450, 
  md: 640, 
  lg: 960, 
  xl: 1200, 
  '2xl': 1500,
}

// const fonts = {
//   heading: `'Chakra Petch', sans-serif`, 
//   body: `'Kodchasan', sans-serif`
// }

const fonts = {
  heading: `'Silkscreen', sans-serif`, 
  body: `'Chakra Petch', sans-serif`
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ breakpoints, colors, config, styles, components, fonts })
export default theme
