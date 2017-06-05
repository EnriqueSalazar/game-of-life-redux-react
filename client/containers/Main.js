import React from 'react'
import Canvas from './Canvas'
import Timer from './Timer'
const size = 10
const Main = props => (
  <div>
    <Timer size={size} />
    <Canvas size={size} />
  </div>
)

export default Main
