// Style your elements here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.directionType});
`
export const GenerateContainer = styled.div`
  flex-grow: 1;
  width: 90%;
  max-width: 1140px;
  margin: auto;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`
export const GenerateHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #ffffff;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 567px) {
    font-size: 25px;
    text-align: center;
  }
`

export const GenerateSub = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
`
export const GradientDirectionsContainer = styled.ul`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 500px;
  justify-content: center;
`
export const PickColors = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`
export const ColorContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 400px;
  justify-content: space-between;
`
export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  @media screen and (max-width: 567px) {
    font-size: 17px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  height: 40px;
  width: 120px;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;

  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 30px;
`
