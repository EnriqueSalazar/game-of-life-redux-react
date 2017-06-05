import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql, compose} from 'react-apollo'
import {Row, Col} from 'react-flexbox-grid'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import QUIZ_SUBJECT_QUERY from '../queries/QuizSubjectQuery.graphql'
import CREATE_ANSWER_ENTRY_MUTATION from
 '../queries/CreateAnswerEntryMutation.graphql'
import {
  orange300,
  grey700,
  white} from 'material-ui/styles/colors'
import _ from 'lodash'

class Subject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quizSubject: []
    }
  }
  componentWillReceiveProps (nextProps) {
    const {data} = nextProps
    if (_.isEmpty(this.state.VALID_SUBJECTS && data)) {
      const {quizSubject} = data
      this.setState({quizSubject})
    }
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //
  // }

  render () {
    const {quizSubject} = this.state
    return (<div>
      {quizSubject.map((q, i) => (
        <div key={i}>{q.id} {q.subject} {q.text} {q.code}</div>))}
    </div>)
  }
}

Subject.propTypes = {
  data: PropTypes.object.isRequired,
  subject: PropTypes.string.isRequired
}

export default compose(
  graphql(QUIZ_SUBJECT_QUERY, {
    options: ({subject}) => ({variables: {subject}})
    // options: {pollInterval: 3000}
  }),
  graphql(CREATE_ANSWER_ENTRY_MUTATION)
)(Subject)
