import styled from 'styled-components'


export const DisplayComponent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 120px;
  margin-left: 32px;
  margin-right: 23px;
  color: ${({ theme }) => theme.BUTTON_COLOR};
  border-bottom: 2px solid #707070;
`
export const Result = styled.div`
  font-size: 32px;
  padding-right: 95px;
  margin-bottom: 30px;
`