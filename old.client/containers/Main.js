import React from 'react'
import PropTypes from 'prop-types'
import QuizEntry from './QuizEntry'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MaintActions from '../actions'

const Main = ({quizEntry, actions, router}) => (
  <div className="App">
    <QuizEntry
      actions={actions}
      quizEntry={quizEntry}
      router={router} />
  </div>
)

Main.propTypes = {
  quizEntry: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  quizEntry: state.quizEntry
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MaintActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
