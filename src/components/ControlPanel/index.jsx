import React from 'react'

import { ControlPanelComponent, ThemeSelect, ThemeChange, ClearButton } from './components'

export default () => {
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
      <ClearButton>
        Clear All History
      </ClearButton>
    </ControlPanelComponent>      
  )
}
