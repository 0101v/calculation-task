import React, { Suspense } from 'react'

import Loader from '@/components/Loader'
import { Header } from '@/components/Header'
import WrapperRoute from './wrapperRoute'

export default () => (
  <Suspense fallback={<Loader />}>
    
    <WrapperRoute/>
  </Suspense>
)