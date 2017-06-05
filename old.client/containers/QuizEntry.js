import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql, compose} from 'react-apollo'
import {Row, Col} from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'
import validator from 'email-validator'
import {grey200} from 'material-ui/styles/colors'
import CREATE_QUIZ_ENTRY_MUTATION from
  '../queries/CreateQuizEntryMutation.graphql'
import QUIZ_PARAMS_QUERY from '../queries/QuizParamsQuery.graphql'

import MainHeader from '../components/MainHeader'
import MainDetails from '../components/MainDetails'
import MainInterests from '../components/MainInterests'
import MainTerms from '../components/MainTerms'
import MainStart from '../components/MainStart'
import MainModal from '../components/MainModal'
import RegularText from '../components/styled/RegularText'
import OrangeLink from '../components/styled/OrangeLink'

class QuizEntry extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSubject: null,
      shouldStart: false,
      triedToStart: false,
      enableStart: false,
      reCaptchaLoaded: false,
      check: {
        firstnameNotEmpty: false,
        lastnameNotEmpty: false,
        emailNotEmpty: false,
        emailCorrect: false,
        termsOfServiceTrue: false
      },
      DURATION_SECS: null
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.quizEntry.token) {
      this.props.router.push('/quiz')
    }
    const nextDetails = nextProps.quizEntry.data.details
    const check = {}
    check.firstnameNotEmpty = !this.isEmpty(nextDetails.firstname)
    check.lastnameNotEmpty = !this.isEmpty(nextDetails.lastname)
    check.emailNotEmpty = !this.isEmpty(nextDetails.email)
    check.emailCorrect = validator.validate(nextDetails.email)
    check.termsOfServiceTrue = nextProps.quizEntry.data.termsOfService
    const shouldStart = this.shouldStart(check)
    this.setState({
      check,
      shouldStart
    })
    const {data} = nextProps
    if (data && data.quizParams) {
      const {DURATION_SECS} = data.quizParams
      this.setState({DURATION_SECS})
    }
  }

  shouldStart=(check) => {
    return (check.firstnameNotEmpty &&
    check.lastnameNotEmpty &&
    check.emailCorrect &&
    check.termsOfServiceTrue)
  }

  isEmpty = (str) =>
  (!str || str.length === 0)

  onTermsToggle = () => {
    this.props.actions.toggleTerm()
  }

  onInterestToggle=(e) => {
    const subject = e.target.textContent
    this.props.actions.toggleInterest(subject)
  }

  onDetailChange=(e) => {
    const field = e.target.id
    const value = e.target.value
    this.props.actions.updateDetails(field, value)
  }

  onSubmit = (e) => {
    if (this.state.shouldStart) {
      const target = e.target
      const selectedSubject = target.id
      this.setState({
        selectedSubject
      })
    } else {
      this.setState({triedToStart: true})
    }
  }
  onClose=() => {
    this.setState({
      enableStart: false,
      selectedSubject: null
    })
  }
  quizStart = () => {
    const {shouldStart, selectedSubject, reCaptchaLoaded} = this.state
    if (!!selectedSubject && shouldStart && reCaptchaLoaded) {
      const quizEntry = this.props.quizEntry.data
      quizEntry.subject = selectedSubject
      quizEntry.reCaptchaResponse = this.props.quizEntry.reCaptchaResponse
      this.props.mutate({
        variables: {quizEntry}
      })
      .then(({data}) => {
        const {token} = data.createQuizEntry
        if (token && selectedSubject) {
          this.props.actions.setToken(token, selectedSubject)
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('there was an error sending the query', error)
        this.quizStart()
      })
    }
  }
  onLoadCallback = () => {
    this.setState({reCaptchaLoaded: true})
  }

  verifyCallback = (response) => {
    this.props.actions.setResponse(response)
  }
  render () {
    const {
      check,
      triedToStart,
      selectedSubject,
      reCaptchaLoaded,
      DURATION_SECS
    } = this.state
    const {
      data,
      reCaptchaResponse
    } = this.props.quizEntry

    return (
      <div>
        <MainHeader />
        <Row style={{
          paddingBottom: 20
        }}>
          <Col
            xs={12}
            smOffset={1}
            sm={10}
            mdOffset={2}
            md={8}
            lgOffset={3}
            lg={6}>
            <MainDetails
              onDetailChange={this.onDetailChange}
              check={check}
              triedToStart={triedToStart} />
            <MainInterests
              onInterestToggle={this.onInterestToggle}
              interests={data.interests} />
            <Divider />
            <MainTerms
              onTermsToggle={this.onTermsToggle}
              termsOfServiceTrue={
                    check.termsOfServiceTrue
              }
              triedToStart={triedToStart} />
          </Col>
        </Row>
        <Row style={{
          backgroundColor: grey200
        }}>
          <Col xs={12}>
            <MainStart onSubmit={this.onSubmit} />
            <center>
              <RegularText >
                {'You can also take a look at the '}
              </RegularText>
              <OrangeLink href='/scoreboard'>
                scoreboard
              </OrangeLink>
            </center>
            <br />
          </Col>
        </Row>
        <MainModal
          selectedSubject={selectedSubject}
          onClose={this.onClose}
          quizStart={this.quizStart}
          verifyCallback={this.verifyCallback}
          onLoadCallback={this.onLoadCallback}
          DURATION_SECS={DURATION_SECS}
          enableStart={
            !!reCaptchaLoaded &&
            !!reCaptchaResponse
          } />
      </div>
    )
  }
}

QuizEntry.propTypes = {
  actions: PropTypes.object.isRequired,
  quizEntry: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

const QuizEntryWithMutation = compose(
  graphql(CREATE_QUIZ_ENTRY_MUTATION),
  graphql(QUIZ_PARAMS_QUERY, {
    options: {pollInterval: 3000}
  })
)(QuizEntry)

export default QuizEntryWithMutation
