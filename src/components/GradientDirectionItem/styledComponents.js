// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 567px) {
    width: 45%;
  }
`
export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 5px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  @media screen and (max-width: 567px) {
    width: 100%;
  }
`
