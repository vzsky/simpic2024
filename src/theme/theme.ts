import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import colors from './colors'
import styles from './styles'
import Button from './components/Button'
import localFont from 'next/font/local'

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

 
// const pixelBoy = localFont({
  // src: './pixelboy.woff2',
  // display: 'swap',
// })

const fonts = {
  heading: `'Silkscreen', sans-serif`, 
  body: `'Chakra Petch', sans-serif`
}

// const fonts = {
//   heading: pixelBoy.style.fontFamily, 
//   body: `'Chakra Petch', sans-serif`
// }

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ breakpoints, colors, config, styles, components, fonts })
export default theme
