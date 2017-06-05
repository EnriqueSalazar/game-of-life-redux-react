import React from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'
import ScoreRow from './ScoreRow'

const ScoreHeader = (
  <TableHeader
    displaySelectAll={false}
    adjustForCheckbox={false}>
    <TableRow>
      <TableHeaderColumn>
        <center>Firstname</center>
      </TableHeaderColumn>
      <TableHeaderColumn>
        <center>Lastname</center>
      </TableHeaderColumn>
      <TableHeaderColumn>
        <center>Score</center>
      </TableHeaderColumn>
      <TableHeaderColumn>
        <center>Time</center>
      </TableHeaderColumn>
    </TableRow>
  </TableHeader>)

const ScoreTable = ({
subject
}) => (
  <Table selectable={false}>
    {ScoreHeader}
    <TableBody displayRowCheckbox={false}>
      {subject.ninjas && subject.ninjas.map((ninja, k) => {
        const {elapsed, score} = ninja
        const isScore = (score > 0 || score === 0)
        const isElapsed = (elapsed > 0 || elapsed === 0)
        if (isScore && isElapsed) {
          return (
            <ScoreRow key={k} ninja={ninja} subject={subject} />
          )
        }
      })}
    </TableBody>
  </Table>
)

ScoreTable.propTypes = {
  subject: PropTypes.object.isRequired
}

export default ScoreTable
