import React from 'react'

import { SettingsComponent, Lable } from './components'
import ControlPanel from '@/components/ControlPanel'
import BasicLayout from '@/layouts'

export default () => {
  return (
    <BasicLayout>
      <SettingsComponent>
        <Lable>Settings</Lable>
        <ControlPanel/>
      </SettingsComponent>      
    </BasicLayout>
  )
}
