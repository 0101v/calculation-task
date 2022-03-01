import React from 'react'
import { useSelector } from 'react-redux'

import { DisplayComponent, Result } from './components'

export default () => {
  const {expression} = useSelector(store => store)
  return (
    <DisplayComponent>
      <Result>{expression}</Result>
    </DisplayComponent>      
  )
}
