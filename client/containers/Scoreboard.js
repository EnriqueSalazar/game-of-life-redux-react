import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router'
import {graphql, compose} from 'react-apollo'
import _ from 'lodash'
import Header from '../components/QuizHeader'
import QUIZ_SCOREBOARD_QUERY from '../queries/QuizScoreboardQuery.graphql'
import QUIZ_PARAMS_QUERY from '../queries/QuizParamsQuery.graphql'
import {SCOREBOARD_SECS, VALID_SUBJECTS} from '../config/'
import ScoreTabs from '../components/ScoreTabs'
import ScoreBody from '../components/ScoreBody'
class Scoreboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0,
      board: null,
      SCOREBOARD_SECS,
      VALID_SUBJECTS
    }
  }
  componentDidMount () {
    const {SCOREBOARD_SECS} = this.state
    this.timer = setInterval(this.tick, SCOREBOARD_SECS * 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentWillReceiveProps (nextProps) {
    const {quizScoreboardData, quizParamsData} = nextProps
    let {VALID_SUBJECTS} = this.state
    if (quizParamsData && quizParamsData.quizParams) {
      const {quizParams} = quizParamsData
      const {SCOREBOARD_SECS} = quizParams
      if (SCOREBOARD_SECS && (SCOREBOARD_SECS !== this.state.SCOREBOARD_SECS)) {
        this.setState({SCOREBOARD_SECS})
        clearInterval(this.timer)
        this.timer = setInterval(this.tick, SCOREBOARD_SECS * 1000)
      }
      if (quizParams.VALID_SUBJECTS) {
        VALID_SUBJECTS = quizParams.VALID_SUBJECTS
        this.setState({VALID_SUBJECTS})
      }
    }
    if (quizScoreboardData &&
       quizScoreboardData.quizScoreboard) {
      const {quizScoreboard} = quizScoreboardData
      const board = _.filter(quizScoreboard, (subject) => {
        return _.includes(VALID_SUBJECTS, subject.subject)
      })
      this.setState({board})
    }
  }

  tick=() => {
    const {board} = this.state
    let {slideIndex} = this.state
    if (board) {
      slideIndex = (slideIndex + 1) < board.length
      ? slideIndex + 1
      : 0
      this.setState({slideIndex})
    }
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
  };

  RenderBoard=(props) => {
    const {board, slideIndex} = this.state
    return (<div>
      <Header
        subject='Scoreboard'
        startingNumberOfQuestions={7}
        count={666} />
      <ScoreTabs
        handleChange={this.handleChange}
        board={board}
        slideIndex={slideIndex} />
      <ScoreBody
        handleChange={this.handleChange}
        board={board}
        slideIndex={slideIndex} />
    </div>)
  }

  render () {
    if (this.state.board) {
      return <this.RenderBoard />
    }
    return <br />
  }
}

Scoreboard.propTypes = {
  quizScoreboardData: PropTypes.object.isRequired,
  quizParamsData: PropTypes.object.isRequired
}

export default compose(
  graphql(QUIZ_SCOREBOARD_QUERY, {
    name: 'quizScoreboardData',
    options: {pollInterval: 3000}
  }), graphql(QUIZ_PARAMS_QUERY, {
    name: 'quizParamsData',
    options: {pollInterval: 3000}
  })
)(Scoreboard)
