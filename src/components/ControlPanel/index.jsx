import React from 'react'
import { useDispatch } from 'react-redux'
 
import { clearHistory } from '@/actions'
import { ControlPanelComponent, ThemeSelect, ThemeChange, ClearButton } from './components'

export default () => {
  const dispatch = useDispatch()
  return (
    <ControlPanelComponent>
      Switch Theme
      <ThemeSelect>
        <ThemeChange value="light">
          Ligth Theme
        </ThemeChange>
        <ThemeChange value="colored">
          Colored Theme
        </ThemeChange>
        <ThemeChange value="light">
          Dark Theme
        </ThemeChange>
      </ThemeSelect>
      <ClearButton onClick={() => dispatch(clearHistory())}>
        Clear All History
      </ClearButton>
    </ControlPanelComponent>      
  )
}