import React from 'react'

import { SettingsComponent, Lable } from './components'
import ControlPanel from '@/components/ControlPanel'
import BasicLayout from '@/layouts'
import ErrorBoundary from '@/ErrorBoundary'

export default () => {
  return (
    <BasicLayout>
      <ErrorBoundary>
        <SettingsComponent>
          <Lable>Settings</Lable>
          <ControlPanel/>
        </SettingsComponent>      
      </ErrorBoundary>
    </BasicLayout>
  )
}
