import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  GenerateContainer,
  GenerateHeading,
  GenerateSub,
  GradientDirectionsContainer,
  PickColors,
  ColorContainer,
  ColorBox,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].value,
    primaryColor: '#8ae323',
    secondaryColor: '#014f7b',
    backgroundColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {activeTab, primaryColor, secondaryColor} = this.state
    this.setState({
      backgroundColor: `to ${activeTab}, ${primaryColor}, ${secondaryColor}`,
    })
  }

  onChangePrimary = event => {
    this.setState({primaryColor: event.target.value})
  }

  onChangeSecondary = event => {
    this.setState({secondaryColor: event.target.value})
  }

  activeNewTab = direction => {
    this.setState({activeTab: direction})
    // console.log(direction)
  }

  render() {
    const {
      activeTab,
      primaryColor,
      secondaryColor,
      backgroundColor,
    } = this.state
    console.log(activeTab)
    return (
      <AppContainer
        directionType={backgroundColor}
        data-testid="gradientGenerator"
      >
        <GenerateContainer>
          <GenerateHeading>Generate a CSS Color Gradient</GenerateHeading>
          <GenerateSub>Choose Direction</GenerateSub>
          <GradientDirectionsContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                items={eachItem}
                activeNewTab={this.activeNewTab}
                isActive={activeTab === eachItem.value}
              />
            ))}
          </GradientDirectionsContainer>
          <PickColors>Pick the colors</PickColors>
          <ColorContainer>
            <ColorBox>
              <Label>{primaryColor}</Label>
              <Input
                type="color"
                value={primaryColor}
                onChange={this.onChangePrimary}
              />
            </ColorBox>
            <ColorBox>
              <Label>{secondaryColor}</Label>
              <Input
                type="color"
                value={secondaryColor}
                onChange={this.onChangeSecondary}
              />
            </ColorBox>
          </ColorContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </GenerateContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
