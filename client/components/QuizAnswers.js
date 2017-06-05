import React from 'react'
import PropTypes from 'prop-types'
import QuizOption from './QuizOption'
import RegularText from './styled/RegularText'

const QuizAnswers = ({onAnswer, question, score}) => (
  <div style={{
    paddingBottom: '20px'
  }}>
    <RegularText >
Choose one option:
    </RegularText>
    <div style={{
      paddingTop: '20px'
    }}>
      {(question &&
          question !== 'not_init') &&
          question.answers.map((answer, i) => {
            const isActive = question.answer === answer.text
            return (
              <QuizOption
                key={i}
                score={score}
                onAnswer={onAnswer}
                isActive={isActive}
                text={answer.text} />
            )
          })}
    </div>
  </div>
)

QuizAnswers.propTypes = {
  score: PropTypes.number,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
}

export default QuizAnswers
