import React from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'

const Canvas = ({size}) => {
  const lifeMap = []
  console.log('generating canvas')
  for (let y = 0; y < size; y++) {
    lifeMap[y] = []
    for (let x = 0; x < size; x++) {
      lifeMap[y][x] = <Cell key={x} y={y} x={x} />
    }
  }
  return (<table>
    <tbody>
      {lifeMap.map((row, i) => {
        return (<tr key={i}>
          {row.map((cell) => {
            return cell
          })}
        </tr>)
      })}
    </tbody>
  </table>)
}
Canvas.propTypes = {
  size: PropTypes.number.isRequired

}

export default Canvas
