import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MainActions from '../actions'
import _ from 'lodash'
class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      size: 0,
      frecuency: 5000
    }
  }
  componentWillMount=() => {
    this.props.actions.updateMap(this.initialMap(this.props.size))
  }
  componentWillReceiveProps (nextProps) {
    if (this.state.size !== nextProps.size) {
      this.setState({size: nextProps.size})
    }
    // this.timer = setInterval(this.tick, frecuency)
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, 500)
  }
  shouldComponentUpdate (nextProps) {
    if (this.props.map.map.length > 0 && nextProps.map.map.length > 0) {
      const mapChanged = (!_.isEqual(nextProps.map.map, this.props.map.map))
      console.log('mapChanged', nextProps.map.map[3].toString(), this.props.map.map[3].toString(), mapChanged)
    }
    return true
  }
  tick=() => {
    console.log('tick...')
    const {map} = this.props.map
    const newLifeMap = [...map]
    for (let y = 1; y < this.state.size - 1; y++) {
      for (let x = 1; x < this.state.size - 1; x++) {
        const count =
        map[y - 1][x - 1] +
        map[y - 1][x] +
        map[y - 1][x + 1] +
        map[y][x - 1] +
        map[y][x + 1] +
        map[y + 1][x - 1] +
        map[y + 1][x] +
        map[y + 1][x + 1]
        if (count < 2) {
          newLifeMap[y][x] = 0
        } else if (count === 3) {
          newLifeMap[y][x] = 1
        } else if (count > 3) {
          newLifeMap[y][x] = 0
        // } else if (count < 4 && map[y][x] === 1) {
        //   newLifeMap[y][x] = 1
        }
        if (count === 2) {
          console.log(count, map[y][x], newLifeMap[y][x])
        }
      }
    }
    this.props.actions.updateMap(newLifeMap)
  }
  //
  // shouldComponentUpdate () {
  //   return this.props.map.map.length === 0
  // }
  initialMap=(size) => {
    const initialLifeMap = []
    for (let y = 0; y < size; y++) {
      initialLifeMap[y] = []
      for (let x = 0; x < size; x++) {
        let isAlive
        if (y === 1 && x === 2) {
          isAlive = 1
        } else if (y === 2 && x === 1) {
          isAlive = 1
        } else if (y === 2 && x === 2) {
          isAlive = 1
        } else if (y === 2 && x === 3) {
          isAlive = 1
        } else {
          isAlive = 0
        }
        initialLifeMap[y][x] = isAlive
      }
    }
    return initialLifeMap
  }

  render () {
    const {
      frecuency
    } = this.state
    console.log('Timer rendering...')
    return (
      <div>
        {frecuency}
        <table>
          <tbody>
            {this.props.map.map && this.props.map.map.map((row, i) => {
              return (<tr key={i}>
                {row.map((cell, j) => {
                  return (<td key={j}>{cell}</td>)
                })}
              </tr>)
            })}
          </tbody>
        </table>
      </div>

    )
  }
}

Timer.propTypes = {
  actions: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired

}

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
