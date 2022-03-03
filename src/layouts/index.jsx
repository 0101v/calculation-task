import React from "react"
import { Header } from "@/components/Header"

import { BasicLayoutComponent } from './components'

const BasicLayout = ({ children }) => {
  return (
    <BasicLayoutComponent>
      <Header/>
      {children}
    </BasicLayoutComponent>
  )
}

export default BasicLayout