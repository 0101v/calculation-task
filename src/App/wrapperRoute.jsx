import React, { lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

 const WrapperRoute = () => (
  <React.Fragment>
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
    <Redirect to={HOME_PAGE_ROUTE} />


    </Switch>
  </React.Fragment>
)
export default WrapperRoute