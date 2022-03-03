import styled from 'styled-components'


export const HistoryComponent = styled.div`
  width: 250px;
  margin: 20px 15px 0 0;
  border-left: 2px solid #707070;
`
export const Title = styled.h2`
  text-align: center;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.TEXT_COLOR};
  opacity: 1;
  
  font-weight: 400;
`
export const HistoryContainer = styled.div`
  color: ${({ theme }) => theme.BUTTON_COLOR};
  padding: 35px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 600px;
  
  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 8px;
  }
`
export const HistoryItem = styled.div`
  margin-bottom: 25px;
`