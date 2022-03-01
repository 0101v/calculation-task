import React from 'react'
import { useSelector } from 'react-redux'

import { HistoryComponent, Title, HistoryContainer, HistoryItem } from './components'

export default () => {
  const {history} = useSelector(store => store)

  return (
    <HistoryComponent>
      <Title>History</Title>
      <HistoryContainer>
        {history.map((el, ind) => (
          <HistoryItem key={ind}>{el}</HistoryItem>
        ))}
      </HistoryContainer>
    </HistoryComponent>      
  )
}
