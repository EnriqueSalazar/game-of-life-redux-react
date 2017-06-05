import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as MainActions from '../actions'

class Cell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAlive: false
    }
  }
  componentWillReceiveProps (nextProps) {
  }
  shouldComponentUpdate (nextProps, nextState) {
    // if (this.props.x === 5 && this.props.y === 5) {
    //   console.log(
    //     this.props.y,
    //     this.props.x,
    //     this.props.map.map[this.props.y][this.props.x],
    //     nextProps.map.map[this.props.y][this.props.x],
    //     this.props.map.map[this.props.y][this.props.x] !== nextProps.map.map[this.props.y][this.props.x]
    //   )
    // }
    // return this.props.map.map.length > 0 && this.props.map.map[this.props.y][this.props.x] !== nextProps.map.map[this.props.y][this.props.x]
    return true
  }

  render () {
    if (this.props.x === 5 && this.props.y === 5) {
      console.log(
      'rendering cell')
    }
    if (this.props.map.map.length === 0) {
      return <td></td>
    }
    return (<td style={{
      width: 15,
      height: 15,
      backgroundColor: this.props.map.map[this.props.y][this.props.x]
      ? '#F44336' : '#E0E0E0'
    }}>
      { this.props.map.map[this.props.y][this.props.x]}
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
