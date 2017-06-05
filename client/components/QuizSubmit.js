import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import {
   orange300,
   grey700,
     white
   } from 'material-ui/styles/colors'

const QuizSubmit = ({onFinish}) => {
  return (
    <div style={{paddingTop: '20px'}}>
      <FlatButton
        backgroundColor={grey700}
        labelStyle={{color: white,
          whiteSpace: 'pre-line',
          height: 'auto'}}
        label={'Submit'}
        hoverColor={orange300}
        onTouchTap={onFinish}
        fullWidth />
    </div>

  )
}

QuizSubmit.propTypes = {
  onFinish: PropTypes.func.isRequired
}

export default QuizSubmit
