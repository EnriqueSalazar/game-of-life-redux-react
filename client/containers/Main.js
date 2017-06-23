import React, { Component } from 'react'
import Canvas from './Canvas'
import Timer from './Timer'
const size = 100
const frecuency = 17

class Main extends Component {
  render() {
    return (
      <div>
        <Timer size={size} frecuency={frecuency} />
        <Canvas size={size} />
      </div>
    )
  }
}

export default Main
