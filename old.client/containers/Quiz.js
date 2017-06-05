import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {graphql, compose} from 'react-apollo'
import {Row, Col} from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton'

import QuizModal from '../components/QuizModal'
import QuizTabs from '../components/QuizTabs'
import QuizBody from '../components/QuizBody'
import Header from '../components/QuizHeader'
import Timer from '../components/Timer'
import * as MainActions from '../actions'
import QUIZ_QUESTIONS_QUERY from '../queries/QuizQuestionsQuery.graphql'
import CREATE_ANSWER_ENTRY_MUTATION from
 '../queries/CreateAnswerEntryMutation.graphql'
import {
  orange300,
  grey700,
  white} from 'material-ui/styles/colors'

class Quiz extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalClosed: false
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.token === 'not_init') {
      console.log('Redirecting...')// eslint-disable-line no-console
      window.location.replace('/')
    } else {
      const {data, quiz, token, subject} = nextProps
      const {quizQuestions} = data
      const {activeQuestion, questions, endQuiz, score} = quiz

      if (quizQuestions &&
        activeQuestion === 'not_init') {
        this.props.actions.initQuestions(quizQuestions)
      }
      if (endQuiz && !score) {
        const answers = questions.map((question) => {
          return {
            question: question.id,
            answer: question.answer ? question.answer : 'NA'
          }
        })
        const answerEntry = {token, subject, answers}
        const startMutation = () => {
          this.props.mutate({
            variables: {answerEntry}
          })
          .then(({data}) => {
            const score = data.createAnswerEntry
            if (score.score !== 666) {
              this.props.actions.setScore(score)
            }
          }).catch((error) => {
            // eslint-disable-next-line no-console
            console.error('there was an error sending the query', error)
            startMutation()
          })
        }
        startMutation()
      }
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    const isStarted = nextProps.quiz.activeQuestion !== 'not_init'
    return isStarted
  }

  onAnswer = (e) => {
    const t = e.target
    this.props.actions.addAnswer(t.textContent)
  }
  onFinish = (e) => {
    this.props.actions.endQuiz()
  }
  handleChange = (value) => {
    this.props.actions.nextQuestion(value)
  };
  goHome = () => {
    window.location.replace('/')
  };
  goScoreboard = () => {
    window.location.replace('/scoreboard')
  };

  RenderQuestion=(props) => {
    const {
      activeQuestion,
      questions,
      score,
      answersReview
    } = this.props.quiz
    const subject = this.props.subject.toLowerCase()
    return (
      <div>
        <QuizTabs
          activeQuestion={activeQuestion}
          questions={questions}
          score={score}
          answersReview={answersReview}
          handleChange={this.handleChange} />
        <Row >
          <Col
            xsOffset={0} xs={12}
            smOffset={0} sm={12}
            mdOffset={1} md={10}
            lgOffset={2} lg={8}>
            {(score === null) && <Timer
              subject={this.props.subject}
              endQuiz={this.props.actions.endQuiz} />}
            <QuizBody
              activeQuestion={activeQuestion}
              questions={questions}
              score={score}
              handleChange={this.handleChange}
              onAnswer={this.onAnswer}
              onFinish={this.onFinish}
              subject={subject} />

            {(score || score === 0) && <Row >
              <Col
                xs={12}>
                <FlatButton
                  backgroundColor={grey700}
                  labelStyle={{color: white}}
                  hoverColor={orange300}
                  label={'Scoreboard'}
                  href='/scoreboard'
                  fullWidth />
              </Col>
            </Row >}
          </Col>
        </Row >
      </div>
    )
  }
  onClose=() => {
    this.setState({modalClosed: true})
  }
  render () {
    const {subject, quiz} = this.props
    const {
      score,
      activeQuestion
    } = quiz

    let showQuestions, showHeader

    if (subject !== 'not_init' &&
      activeQuestion !== 'not_init') {
      showHeader = (<Header
        subject={subject} />)
      showQuestions = <this.RenderQuestion />
    }
    return (<div>
      {showHeader}
      {showQuestions}
      <QuizModal
        score={score}
        modalClosed={this.state.modalClosed}
        onClose={this.onClose}
        goHome={this.goHome}
        goScoreboard={this.goScoreboard} />
    </div>)
  }
}

Quiz.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  quiz: state.quizAnswers,
  token: state.quizEntry.token || 'not_init',
  subject: state.quizEntry.subject || 'not_init'
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

const QuizWithData = compose(
  graphql(QUIZ_QUESTIONS_QUERY, {
    options: ({subject, token}) => ({variables: {subject, token}})
    // options: {pollInterval: 3000}
  }),
  graphql(CREATE_ANSWER_ENTRY_MUTATION)
)(Quiz)

export default connect(mapStateToProps, mapDispatchToProps)(QuizWithData)
