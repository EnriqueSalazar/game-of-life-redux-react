import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router'
import {graphql, compose} from 'react-apollo'
import JSONEditor from 'react-json'
import FlatButton from 'material-ui/FlatButton'
import {Row, Col} from 'react-flexbox-grid'
import {
   orange300,
   grey700,
     white
   } from 'material-ui/styles/colors'
import Header from '../components/QuizHeader'
import QUIZ_PARAMS_QUERY from '../queries/QuizParamsQuery.graphql'
import UPDATE_PARAMS_MUTATION from '../queries/UpdateParamsMutation.graphql'
import _ from 'lodash'
// import 'react-json/react-json-block.css'
import '../components/react-json.css'

class Params extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jsonParams: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    if (_.isEmpty(this.state.jsonParams)) {
      const {quizParams} = nextProps.quizParamsData
      const jsonParams = quizParams
      this.setState({jsonParams})
    }
  }

  onChange=(jsonParams) => {
    this.setState({jsonParams})
  }

  updateParams=(newParams) => {
    this.props.mutate({
      variables: {newParams}
    })
    .then(({data}) => {
      this.setState({jsonParams: data.updateParams})
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('there was an error sending the params', error)
    })
  }

  onSubmit=() => {
    this.updateParams(this.state.jsonParams)
  }

  onReset=() => {
    this.updateParams({})
  }

  render () {
    return (<div>
      <Header
        subject='Params'
        startingNumberOfQuestions={7}
        count={666} />
      <Row>
        <Col
          xsOffset={0}
          xs={12} smOffset={1} sm={10}
          mdOffset={2} md={8}
          lgOffset={3} lg={6}>
          <div
            style={{fontSize: '20px'}}>
            <JSONEditor
              value={this.state.jsonParams}
              onChange={this.onChange} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xsOffset={0} xs={11}
          smOffset={1} sm={9}
          mdOffset={2} md={7}
          lgOffset={3} lg={5}>
          <FlatButton
            backgroundColor={grey700}
            labelStyle={{color: white,
              whiteSpace: 'pre-line',
              height: 'auto'}}
            label={'Submit'}
            hoverColor={orange300}
            onTouchTap={this.onSubmit}
            fullWidth />
        </Col>
        <Col
          xs={1}
          sm={1}
          md={1}
          lg={1} >
          <FlatButton
            backgroundColor={grey700}
            labelStyle={{color: white,
              whiteSpace: 'pre-line',
              height: 'auto'}}
            label={'Defaults'}
            hoverColor={orange300}
            onTouchTap={this.onReset}
            fullWidth />
        </Col>
      </Row>
    </div>)
  }
}

Params.propTypes = {
  quizParamsData: PropTypes.object.isRequired
}

export default compose(
  graphql(QUIZ_PARAMS_QUERY, {
    name: 'quizParamsData'
  }),
  graphql(UPDATE_PARAMS_MUTATION)
)(Params)
