import React, { Component } from 'react'
import Canvas from './Canvas'
import Timer from './Timer'
const size = 50
const frecuency = 100

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
