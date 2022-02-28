import React from 'react'
import { useDispatch } from 'react-redux'

import { KeypadComponent, Button } from './components'
import { BTN } from '@/constants/btn'
import { addNumber, addOperation } from '@/actions'

export default () => {
  const dispatch = useDispatch()

  const onBtnClick = event => {
    const elemBtn = event.target.innerHTML
    
    if (!Number.isNaN(+elemBtn)) {
      dispatch(addNumber(elemBtn))
      return
    }
    
    switch (elemBtn) {
      case ('-'):
      case ('+'):
      case ('*'):
      case ('\\'):
        
        break
      case ('='):
        
        break
      case ('C'):
        
        break
      case ('CE'):
        
        break
      case ('('):
      case (')'):
        
        break

      case ('.'):
        
        break
      default:
        
        break
    }
  }





  return (
      <KeypadComponent onClick={onBtnClick}>
        {BTN.map((el, ind) => (
          <Button key={ind}>
            {el}
          </Button>
        ))}
      </KeypadComponent>      
  )
}
