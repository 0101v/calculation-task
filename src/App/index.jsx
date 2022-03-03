import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '@/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import { useSelector } from 'react-redux'

import Loader from '@/components/Loader'
import WrapperRoute from './wrapperRoute'


export default () => {
  const {selectedStyle} = useSelector(store => store)

  return (
    <ThemeProvider theme={theme[selectedStyle]} >
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <WrapperRoute/>
        </Suspense>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}