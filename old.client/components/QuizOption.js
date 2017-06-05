import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import {
  grey300,
  orange300,
  white
} from 'material-ui/styles/colors'

const QuizOption = ({isActive, onAnswer, score, text}) => (
  <FlatButton
    backgroundColor={isActive ? orange300 : grey300}
    style={{
      borderColor: white,
      borderStyle: 'solid',
      borderWidth: '1px',
      whiteSpace: 'pre-line',
      height: 'auto',
      textAlign: 'left',
      paddingLeft: '20px',
      paddingRight: '20px'
    }}
    hoverColor={orange300}
    onTouchTap={onAnswer}
    disabled={!!score}
    fullWidth >
    {text}
  </FlatButton>
)

QuizOption.propTypes = {
  score: PropTypes.number,
  isActive: PropTypes.bool.isRequired,
  onAnswer: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default QuizOption
