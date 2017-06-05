import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router'
import {Tabs, Tab} from 'material-ui/Tabs'
import _ from 'lodash'
import {
  orange500,
orange300} from 'material-ui/styles/colors'
import {Row, Col} from 'react-flexbox-grid'

const ScoreTabs = ({
handleChange,
board,
slideIndex
}) => (

  <Row style={{backgroundColor: orange300}}>
    <Col
      xsOffset={0}
      xs={12}
      smOffset={0}
      sm={12}
      mdOffset={1}
      md={10}
      lgOffset={2}
      lg={8}>
      <Tabs
        onChange={handleChange}
        value={slideIndex}>
        {board && board.map((subject, i) => {
          const validSubject = ['Java', 'JavaScript', 'Scala']
          if (_.includes(validSubject, subject.subject)) {
            return (
              <Tab
                key={i}
                label={subject.subject}
                value={i}
                buttonStyle={{backgroundColor: orange500}} />
            )
          }
        })
        }
      </Tabs>
    </Col>
  </Row>
)

ScoreTabs.propTypes = {
  handleChange: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
  slideIndex: PropTypes.number.isRequired
}

export default ScoreTabs
