import styled from 'styled-components'


export const ControlPanelComponent = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThemeSelect = styled.select`
  cursor: pointer;
  width: 200px;
  height: 35px;
  margin-bottom: 10px;
  border-radius: 2px;
  border: 1px solid #434343;
  font-size: 18px;
`
export const ThemeChange = styled.option`
  cursor: pointer;
`
export const ClearButton = styled.button`
  cursor: pointer;
  width: 200px;
  height: 35px;
  background: #F2F2F2;
  border: 1px solid #434343;
  border-radius: 2px;
  font-size: 18px;
  text-align: left;
`