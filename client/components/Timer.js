import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import LinearProgress from 'material-ui/LinearProgress'
import _ from 'lodash'
import {graphql, compose} from 'react-apollo'

import QUIZ_PARAMS_QUERY from '../queries/QuizParamsQuery.graphql'
import {DURATION_SECS} from '../config/'
import {
  orange500} from 'material-ui/styles/colors'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      elapsed: 0,
      start: _.floor(Date.now() / 1000, 2),
      duration: null,
      remaining: null
    }
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, 100)
  }

  componentWillReceiveProps (nextProps) {
    const {subject, data} = nextProps
    let duration
    if (data && data.quizParams) {
      const quizDuration = _.find(data.quizParams.DURATION_SECS,
        {language: subject})
      duration = quizDuration
        ? quizDuration.time
        : DURATION_SECS[subject]
    } else {
      duration = DURATION_SECS[subject]
    }
    if (this.state.remaining) {
      this.setState({duration})
    } else {
      const remaining = duration
      this.setState({duration, remaining})
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  shouldComponentUpdate (nextProps, nextState) {
    const {remaining} = nextState
    return remaining > 0
  }
  tick=() => {
    const {start, duration} = this.state
    if (duration) {
      const elapsed = _.floor((Date.now() / 1000) - start, 2)
      const remaining = duration - elapsed
      const minutes = Math.floor(remaining / 60)
      const seconds = _.floor(remaining % 60, 2)
      if (start && elapsed >= duration) {
        this.props.endQuiz()
      }
      this.setState({elapsed, remaining, minutes, seconds})
    }
  }

  render () {
    const {start, remaining, duration, minutes, seconds} = this.state
    const value = (remaining / duration) * 100
    return (
      <Row style={{paddingTop: '20px'}}>
        <Col
          xs={10}
          sm={11}>
          <LinearProgress
            color={orange500}
            mode={start ? 'determinate' : 'indeterminate'}
            value={value}
            style={{height: '10px',
              margin: '0 auto',
              varticalAlign: 'middle',
              overflow: 'hidden',
              animation: 'start .3s ease-in'
            }} />
        </Col>
        {start &&
        <Col
          xs={2}
          sm={1}>
          {'  '}{minutes}:{(seconds < 10 && '0')}{seconds}
        </Col>
      }
      </Row >
    )
  }
}

Timer.propTypes = {
  endQuiz: PropTypes.func.isRequired,
  subject: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

const TimerWithQuery = compose(
  graphql(QUIZ_PARAMS_QUERY, {
    options: {pollInterval: 3000}
  })
)(Timer)

export default TimerWithQuery
