import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {DURATION_SECS} from '../config/'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

const ScoreRow = ({
subject,
ninja
}) => (
  <TableRow>
    <TableRowColumn>
      {ninja.firstname}
    </TableRowColumn>
    <TableRowColumn>
      {ninja.lastname}
    </TableRowColumn>
    <TableRowColumn>
      <center>{ninja.score}</center>
    </TableRowColumn>
    <TableRowColumn>
      <center>
        {(ninja.elapsed < DURATION_SECS[subject.subject])
                            ? _.round(ninja.elapsed, 2)
                            : DURATION_SECS[subject.subject] }
      </center>
    </TableRowColumn>
  </TableRow>
)

ScoreRow.propTypes = {
  subject: PropTypes.object.isRequired,
  ninja: PropTypes.object.isRequired
}

export default ScoreRow
