import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import {
  blueGrey900,
  grey300
} from 'material-ui/styles/colors'
import sytac from '../assets/sq_logo_light_grey_text_hd.png'

const QuizHeader = ({subject}) => (
  <Row
    style={{
      backgroundColor: blueGrey900,
      height: 110,
      color: grey300
    }}>
    <Col
      xs={12}
      smOffset={0}
      sm={12}
      mdOffset={1}
      md={10}
      lgOffset={2}
      lg={8}>
      <div style={{
        verticalAlign: 'middle',
        margin: 'auto',
        paddingTop: 17
      }}>
        <span style={{
          fontSize: '4em',
          whiteSpace: 'nowrap'

        }}>
          <a href='/'>
            <img
              src={sytac} alt="Sytac" height="83"
              style={{
                verticalAlign: 'middle'
              }} />
          </a>
          {'  ' + subject}
        </span>
      </div>
    </Col>
  </Row>
)

QuizHeader.propTypes = {
  subject: PropTypes.string
}

export default QuizHeader
