import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const Canvas = ({ size }) => {
  const lifeMap = []
  console.log('generating canvas')
  for (let y = 0; y < size; y++) {
    lifeMap[y] = <Row size={size} key={y} y={y} />
  }
  return (
    <table
      style={{
        borderCollapse: 'collapse'
      }}
    >
      <tbody>
        {lifeMap}
      </tbody>
    </table>
  )
}
Canvas.propTypes = {
  size: PropTypes.number.isRequired
}

export default Canvas
