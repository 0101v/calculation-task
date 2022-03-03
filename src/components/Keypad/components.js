import styled from 'styled-components'


export const KeypadComponent = styled.div`
  
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 90px;
  grid-row-gap: 30px;
  margin: 28px;
  justify-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(5, 70px);
    grid-column-gap: 50px;
  }
`
export const Button = styled.button`
  font-size: 62px;
  height: 90px;
  border: 1px solid #707070;
  border-radius: 16px;
  background: #F2F2F2;
  opacity: 1;
  user-select: none;
  cursor: pointer;
  color: ${({ theme }) => theme.BUTTON_COLOR};
  &:hover {
    background-color: #aaa7a7;
    border: 1px solid #505050;
  }
  @media (max-width: 1100px) {
    font-size: 32px;
    height: 70px;
  }
`