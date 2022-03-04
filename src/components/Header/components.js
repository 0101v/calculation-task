import styled from 'styled-components'

export const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.BACKGROUND_COLOR};
  color: ${({ theme }) => theme.TEXT_COLOR};
  
  height: 80px;
  padding: 32px;
  font-size: 32px;
`
export const Links = styled.div`
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.TEXT_COLOR};
    margin-left: 32px;
    
  }

  & .active {
    cursor: pointer;
    text-decoration: underline;
  }
  
`