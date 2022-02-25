import React from 'react'

import { SettingsComponent, Lable } from './components'
import ControlPanel from '@/components/ControlPanel'

export default () => {
  return (
      <SettingsComponent>
        <Lable>Settings</Lable>
        <ControlPanel/>
      </SettingsComponent>      
  )
}
