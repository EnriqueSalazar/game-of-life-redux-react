import React from 'react'
import PropTypes from 'prop-types'
import {
  orange300,
  grey300,
  white} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

const QuizModal = (props) => {
  const {
    score,
    modalClosed,
    onClose,
    goHome,
    goScoreboard
  } = props
  const modalActions = [
    <FlatButton
      key={1}
      backgroundColor={grey300} style={{
        borderColor: white,
        borderStyle: 'solid',
        borderWidth: '1px'
      }}
      hoverColor={orange300}
      label="Retry"
      onTouchTap={goHome} />,
    <FlatButton
      key={2}
      backgroundColor={grey300} style={{
        borderColor: white,
        borderStyle: 'solid',
        borderWidth: '1px'
      }}
      hoverColor={orange300}
      label="Scoreboard"
      onTouchTap={goScoreboard} />,
    <FlatButton
      key={3}
      backgroundColor={grey300} style={{
        borderColor: white,
        borderStyle: 'solid',
        borderWidth: '1px'
      }}
      hoverColor={orange300}
      label="Review"
      onTouchTap={onClose} />
  ]
  return (
    <Dialog
      title={'Your score:'}
      actions={modalActions}
      modal={false}
      open={(score !== null) && !modalClosed}
      contentStyle={{
        width: '100%',
        maxWidth: '640px'
      }}
      onRequestClose={onClose}>
      <center style={{fontSize: '60px'}}>
        {(score === 666) ? 0 : score}
      </center>
    </Dialog>
  )
}

QuizModal.propTypes = {
  score: PropTypes.number,
  modalClosed: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  goScoreboard: PropTypes.func.isRequired,
  goHome: PropTypes.func.isRequired
}

export default QuizModal
