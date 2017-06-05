import React from 'react'
import PropTypes from 'prop-types'
import 'tachyons'

const StartButton = props => (
  <div
    onClick={props.onSubmit}
    id={props.subject}
    style={{
      minWidth: 200
    }}
    className='link tc dim grow mw4 bg-white ma2 pa3 shadow-1'>
    <img
      onClick={props.onSubmit}
      id={props.subject}
      src={props.children}
      alt={props.subject}
      style={{
        maxHeight: 100
      }} />
    <div
      onClick={props.onSubmit}
      id={props.subject}
      className='gray tc'>
      {props.subject}
    </div>
  </div>
)

StartButton.propTypes = {
  subject: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default StartButton
