import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import _ from 'lodash'

import {Row, Col} from 'react-flexbox-grid'
import ScoreTable from './ScoreTable'
const ScoreBody = ({
handleChange,
board,
slideIndex
}) => (
  <Row>
    <Col
      xsOffset={0}
      xs={12}
      smOffset={1}
      sm={10}
      mdOffset={2}
      md={8}
      lgOffset={3}
      lg={6}>
      <SwipeableViews
        index={slideIndex}
        onChangeIndex={handleChange}>
        {board && board.map((subject, i) => {
          const validSubject = ['Java', 'JavaScript', 'Scala']
          if (_.includes(validSubject, subject.subject)) {
            return (<ScoreTable subject={subject} key={i} />)
          }
        })
         }
      </SwipeableViews>
    </Col>
  </Row>
)

ScoreBody.propTypes = {
  handleChange: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired,
  slideIndex: PropTypes.number.isRequired
}

export default ScoreBody
