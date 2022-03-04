import React from 'react'

import { CalculatorComponent, Content } from './components'
import Display from '@/components/Display'
import Keypad from '@/components/Keypad'
import History from '@/components/History'
import ErrorBoundary from '@/ErrorBoundary'

export const Calculator = () => {
  return (
    <CalculatorComponent>
      <Content>
        <Display />
        <Keypad />        
      </Content>
      <ErrorBoundary>
        <History />
      </ErrorBoundary>
    </CalculatorComponent>
  )
}