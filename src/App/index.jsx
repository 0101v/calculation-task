import React, { lazy, Suspense } from 'react'
import { Switch } from 'react-router-dom'

import Loader from '@/components/Loader'
import { Header } from '@/components/Header'
import WrapperRoute from './wrapperRoute'

export default () => (
  <Suspense fallback={<Loader />}>
    <Header/>
    <Switch>
      <WrapperRoute/>
    </Switch>
  </Suspense>
)
