import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  orange300,
  grey300,
  white
} from 'material-ui/styles/colors'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Recaptcha from 'react-recaptcha'
import {
  DURATION_SECS
} from '../config/'

const MainModal = (props) => {
  const {
    selectedSubject,
    onClose,
    quizStart,
    verifyCallback,
    onLoadCallback,
    enableStart
  } = props
  const quizDuration = _.find(props.DURATION_SECS, {language: selectedSubject})
  const quizDurationSecs = quizDuration
    ? quizDuration.time
    : DURATION_SECS[selectedSubject]
  /* eslint-disable max-len */
  const modalBody = (<div > { 'Compete in the Sytac DevQuiz by answering as many questions correctly within ' +
      quizDurationSecs + ' seconds.' } <br />
    <br /> { 'Every participant will get a FREE sticker sheet! The participant with the most correct answers and fastest time can collect her or his prize at the Sytac booth at the end of the conference on Wednesday 17:00.' }
    <br />
    <br />
    { 'You can navigate back to previous questions during the DevQuiz using the top bar, and review your answers before submitting. Finish using the Submit button in the last question.' }
    <br />
    <br />
    <center >
      <Recaptcha
        sitekey="6Lf2vCIUAAAAADrcLZBx2PKwSt6xxviaKvjj4Txd"
        render="explicit"
        verifyCallback={verifyCallback} onloadCallback={onLoadCallback} />
    </center>
  </div>
  )
  /* eslint-enable max-len */
  const modalActions = [
    <FlatButton
      key={1}
      backgroundColor={grey300}
      style={{
        borderColor: white,
        borderStyle: 'solid',
        borderWidth: '1px'
      }}
      hoverColor={orange300}
      label="Cancel"
      onTouchTap={onClose} />,
    <FlatButton
      key={2}
      backgroundColor={grey300}
      style={{
        borderColor: white,
        borderStyle: 'solid',
        borderWidth: '1px'
      }}
      hoverColor={orange300}
      label="Start"
      disabled={!enableStart}
      onTouchTap={quizStart} />
  ]

  return (
    <Dialog
      title={selectedSubject + ' Sytac DevQuiz'}
      actions={modalActions} modal={false}
      open={!!selectedSubject} contentStyle={{
        width: '100%',
        maxWidth: '640px'
      }}
      autoScrollBodyContent
      onRequestClose={onClose} >
      {modalBody}
    </Dialog>
  )
}

MainModal.propTypes = {
  quizStart: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  verifyCallback: PropTypes.func.isRequired,
  onLoadCallback: PropTypes.func.isRequired,
  selectedSubject: PropTypes.string,
  enableStart: PropTypes.bool.isRequired,
  DURATION_SECS: PropTypes.array
}

export default MainModal
