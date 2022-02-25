import React from 'react'
import { NavLink } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { HeaderComponent, Links } from './components'




export const Header = () => {
  return (
    <HeaderComponent>
      Calculator App
      <Links>
        <NavLink to={HOME_PAGE_ROUTE}>Home</NavLink>
        <NavLink to={SETTINGS_PAGE_ROUTE}>Settings</NavLink>  
      </Links>
    </HeaderComponent>
  )
}