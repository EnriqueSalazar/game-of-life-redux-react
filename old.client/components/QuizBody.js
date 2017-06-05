import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import RegularText from './styled/RegularText'
import QuizCode from './QuizCode'
import QuizAnswers from './QuizAnswers'
import QuizSubmit from './QuizSubmit'

const QuizBody = ({
  onAnswer,
  onFinish,
  handleChange,
  questions,
  score,
  activeQuestion,
  subject
}) => (
  <SwipeableViews
    index={activeQuestion}
    onChangeIndex={handleChange}>
    {questions.map((question, i) => {
      const showCode = !!question.code
      return (<div key={i}>
        <div style={{
          paddingTop: '20px'
        }}>
          <RegularText >
            {question && question.text}
          </RegularText>
        </div>
        {showCode &&
        <QuizCode
          language={subject}
          code={question.code} />
        }
        <QuizAnswers
          score={score}
          question={question}
          onAnswer={onAnswer} />
        {(activeQuestion + 1 === questions.length &&
            !score &&
            score !== 0 &&
            score !== 666) &&
            <QuizSubmit
              onFinish={onFinish} />
          }
      </div>)
    })
    }
  </SwipeableViews>
  )

QuizBody.propTypes = {
  score: PropTypes.number,
  activeQuestion: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  subject: PropTypes.string.isRequired
}

export default QuizBody
