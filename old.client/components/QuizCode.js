import React from 'react'
import PropTypes from 'prop-types'
import
SyntaxHighlighter,
{registerLanguage} from 'react-syntax-highlighter/dist/light'
import {darcula} from 'react-syntax-highlighter/dist/styles'
import javascript from 'highlight.js/lib/languages/javascript'
import java from 'highlight.js/lib/languages/java'
// import clojure from 'highlight.js/lib/languages/clojure'
import scala from 'highlight.js/lib/languages/scala'

registerLanguage('javascript', javascript)
registerLanguage('java', java)
// registerLanguage('clojure', clojure)
registerLanguage('scala', scala)

const QuizCode = ({language, code}) => (
  <SyntaxHighlighter
    language={language}
    showLineNumbers
    style={darcula}>
    {code}
  </SyntaxHighlighter>
  )

QuizCode.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}

export default QuizCode
