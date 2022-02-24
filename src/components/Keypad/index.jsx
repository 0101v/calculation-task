import React from 'react'

import { KeypadComponent, Button } from './components'
import { BTN } from '@/constants/btn'

export default () => {
  return (
      <KeypadComponent>
        {BTN.map((el, ind) => (
          <Button key={ind}>
            {el}
          </Button>
        ))}
      </KeypadComponent>      
  )
}
