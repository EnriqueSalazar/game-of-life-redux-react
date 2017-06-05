import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router'
import {graphql, compose} from 'react-apollo'
import {Row, Col} from 'react-flexbox-grid'
import _ from 'lodash'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import {
   orange300,
   grey700,
     white
   } from 'material-ui/styles/colors'
import Header from '../components/QuizHeader'
import Subject from './Subject'
import QUIZ_PARAMS_QUERY from '../queries/QuizParamsQuery.graphql'

class Questions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      VALID_SUBJECTS: [],
      selectedSubject: null
    }
  }

  componentWillReceiveProps (nextProps) {
    const {quizParamsData} = nextProps
    if (_.isEmpty(this.state.VALID_SUBJECTS) && quizParamsData) {
      const {quizParams} = quizParamsData
      const {VALID_SUBJECTS} = quizParams
      this.setState({VALID_SUBJECTS})
    }
  }

  onChange=(e, selectedSubject) => {
    this.setState({selectedSubject})
  }

  render () {
    const {VALID_SUBJECTS, selectedSubject} = this.state
    const styles = {
      block: {
        maxWidth: 250
      },
      radioButton: {
        marginBottom: 16
      }
    }
    return (<div>
      <Header
        subject='Questions'
        startingNumberOfQuestions={7}
        count={666} />
      <Row>
        <Col
          xsOffset={0} xs={12}
          smOffset={1} sm={10}
          mdOffset={2} md={8}
          lgOffset={3} lg={5}>
          <RadioButtonGroup name="subject" onChange={this.onChange}>

            {VALID_SUBJECTS.map((subject) => {
              return (<RadioButton
                key={subject}
                value={subject}
                label={subject}
                style={styles.radioButton} />)
            })}
          </RadioButtonGroup>

        </Col>
      </Row>
      {selectedSubject && <Subject subject={selectedSubject} />}
    </div>)
  }
}

Questions.propTypes = {
  quizParamsData: PropTypes.object.isRequired
}

export default compose(
  graphql(QUIZ_PARAMS_QUERY, {
    name: 'quizParamsData'
  })
)(Questions)
