// Write your code here
import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {items, isActive, activeNewTab} = props
  const {value, displayText} = items

  const changeDirection = () => {
    activeNewTab(value)
  }

  return (
    <ListItem>
      <Button type="button" isActive={isActive} onClick={changeDirection}>
        {displayText}
      </Button>
    </ListItem>
  )
}
export default GradientDirectionItem
