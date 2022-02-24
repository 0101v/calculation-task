import styled from 'styled-components'


export const KeypadComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-column-gap: 120px;
  grid-row-gap: 30px;
  margin-top: 28px;
  justify-content: center;
`
export const Button = styled.button`
  font-size: 62px;
  height: 100px;
  border: 1px solid #707070;
  border-radius: 16px;
  background: #F2F2F2;
  opacity: 1;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #aaa7a7;
    border: 1px solid #505050;
  }
`