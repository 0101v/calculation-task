import React from 'react'

import BasicLayout from '@/layouts'
import { Calculator } from '@/containers/Calculator'
import ErrorBoundary from '@/ErrorBoundary'

export default () => {
  return (
    <BasicLayout>
      <ErrorBoundary>
        <Calculator/>      
      </ErrorBoundary>
    </BasicLayout>
  )
}