import React from 'react'
import PropTypes from 'prop-types'
import {
  orange200, orange300, orange500,
  orange700, grey700, green500,
  green300, green200, red200,
  red300, red500} from 'material-ui/styles/colors'
import {Tabs, Tab} from 'material-ui/Tabs'
import {Row, Col} from 'react-flexbox-grid'
import _ from 'lodash'

const QuizTabs = (props) => {
  const {
answersReview,
handleChange,
questions,
score,
activeQuestion
  } = props

  let style
  if (answersReview !== null) {
    let countNA = 0
    let countTrue = 0
    let countFalse = 0
    answersReview.map((response) => {
      if (response.answer === 'NA') {
        countNA++
      } else if (response.answeredCorrectly) {
        countTrue++
      } else {
        countFalse++
      }
    })
    const reviewStyle = []
    reviewStyle[0] = {
      counter: countNA,
      backgroundColor: orange300,
      borderColor: orange200
    }
    reviewStyle[1] = {
      counter: countTrue,
      backgroundColor: green300,
      borderColor: green200
    }
    reviewStyle[2] = {
      counter: countFalse,
      backgroundColor: red300,
      borderColor: red200
    }
    style = _.orderBy(reviewStyle, 'counter', 'desc')[0]
  } else {
    style = {
      backgroundColor: orange300,
      borderColor: orange200
    }
  }
  return (
    <Row style={{backgroundColor: style.backgroundColor}}>
      <Col
        xsOffset={0} xs={12}
        smOffset={0} sm={12}
        mdOffset={1} md={10}
        lgOffset={2} lg={8}>
        <Tabs
          inkBarStyle={{backgroundColor: style.backgroundColor}}
          onChange={handleChange}
          value={activeQuestion}>
          {questions.map((question, i) => {
            let backgroundColor
            switch (question.difficulty) {
              case 2:
                backgroundColor = orange500
                break
              case 3:
                backgroundColor = orange700
                break
              default:
                backgroundColor = orange300
            }
            if (score && answersReview) {
              if (answersReview[i].answer !== 'NA') {
                backgroundColor =
                   answersReview[i].answeredCorrectly
                   ? green500
                   : red500
              }
            }
            const borderColor = activeQuestion === i
               ? grey700
               : style.borderColor
            const borderStyle = activeQuestion === i
               ? 'hidden hidden solid hidden'
               : 'hidden solid hidden solid'
            const borderWidth = activeQuestion === i
               ? '3px'
               : '1px'
            return (
              <Tab
                key={i}
                label={i + 1}
                value={i}
                buttonStyle={{
                  backgroundColor,
                  borderStyle,
                  borderWidth,
                  borderColor
                }}
                style={{backgroundColor: style.backgroundColor}} />
            )
          })
         }
        </Tabs>
      </Col>
    </Row >
  )
}

QuizTabs.propTypes = {
  score: PropTypes.number,
  activeQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  answersReview: PropTypes.array,
  handleChange: PropTypes.func.isRequired
}

export default QuizTabs
