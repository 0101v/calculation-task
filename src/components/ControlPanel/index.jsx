import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
import { clearHistory, changeTheme } from '@/actions'
import { ControlPanelComponent, ThemeSelect, ThemeChange, ClearButton } from './components'

export default () => {
  const dispatch = useDispatch()
  const {selectedStyle} = useSelector(store => store)

  const selectTheme = event => {
    dispatch(changeTheme(event.target.value))
  }

  return (
    <ControlPanelComponent>
      <p>Switch Theme</p>
      <ThemeSelect defaultValue={selectedStyle} onChange={selectTheme}>
        <ThemeChange value="dark">
          Dark Theme
        </ThemeChange>
        <ThemeChange value="colored">
          Colored Theme
        </ThemeChange>
        <ThemeChange value="light">
          Ligth Theme
        </ThemeChange>
      </ThemeSelect>
      <ClearButton onClick={() => dispatch(clearHistory())}>
        <p>Clear All History</p>
      </ClearButton>
    </ControlPanelComponent>      
  )
}