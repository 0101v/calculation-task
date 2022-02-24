import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import { Header } from '@/components/Header'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Header/>
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route 
        path={SETTINGS_PAGE_ROUTE}
        component={SettingsPage}
      />
    </Switch>
  </Suspense>
)