import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as MainActions from '../actions'

class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 0
    }
  }

  componentWillReceiveProps (nextProps) {
    const {map: nextMap} = nextProps.map
    const {map} = this.props.map
    if (map.length > 0) {
      const nextValue = nextMap[this.props.y][this.props.x]
      // if (map[this.props.y][this.props.x] !== nextValue) {
      const color = nextValue ? 11 : this.state.color - 1
      // if (this.props.y === 20 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 21 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 22 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 23 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 24 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 25 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 26 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 27 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // if (this.props.y === 28 && this.props.x === 20) console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      // console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
      this.setState({color})
      // }
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    //   // const shouldUpdate = this.props.map.map.length > 0 &&
    //   //   this.props.map.map[this.props.y][this.props.x] !== nextProps.map.map[this.props.y][this.props.x]
    //   return shouldUpdate
    return this.state.color > 0
  }

  render () {
    const palette = ['#FFFFFF', '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#000000']

    // if (this.props.x === 5 && this.props.y === 5) {
    //   console.log(
    //     'rendering cell')
    // }
    if (this.props.map.map.length === 0) {
      return <td />
    }
    let bgColor
    const {color} = this.state
    if (color <= 0) {
      bgColor = palette[0]
    } else if (color >= 11) {
      bgColor = palette[11]
    } else {
      bgColor = palette[color]
    }
    // const bgColor = this.props.map.map[this.props.y][this.props.x]
    //   ? '#F44336' : '#E0E0E0'
    // if (this.props.y === 15 && this.props.x === 15) {
    //   bgColor = '#000000'
    // }
    return (<td style={{
      padding: 0,
      border: 0,
      width: 8,
      height: 8,
      backgroundColor: bgColor
    }}>
    </td>)
  }
}

Cell.propTypes = {
  actions: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
