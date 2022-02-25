import React from 'react'

import { HistoryComponent, Title, HistoryContainer, HistoryItem } from './components'

export default () => {
  const arr = [...'12345673454534567658']

  return (
    <HistoryComponent>
      <Title>History</Title>
      <HistoryContainer>
        {arr.map((el, ind) => (
          <HistoryItem key={ind}>{el}</HistoryItem>
        ))}
      </HistoryContainer>
    </HistoryComponent>      
  )
}
