import { css } from 'styled-components'

const font = 'sans-serif'

// Color palette
const black = '#000000'
const gray = '#434343'
const white = '#ffffff'
const error = '#c86464'
const primary = '#c06c84'
const secondary = '#6c5b7b'
const secondaryLight = '#6a6b7b'

// Change theme
const dark = {
  BACKGROUND_COLOR: '#434343',
  TEXT_COLOR: '#ffffff',
  BUTTON_COLOR: '#000000',
}
const colored = {
  BACKGROUND_COLOR: '#800080',
  TEXT_COLOR: '#008080',
  BUTTON_COLOR: '#008080',
}
const light = {
  BACKGROUND_COLOR: '#FFFAFA',
  TEXT_COLOR: '#808080',
  BUTTON_COLOR: '#808080',
}

const boxShadows = [
  'box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
}

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  dark,
  colored,
  light,
  boxShadows,
  font,
  spaces: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
  colors: {
    primary,
    secondary,
    secondaryLight,
    black,
    gray,
    white,
    error,
  },
}
