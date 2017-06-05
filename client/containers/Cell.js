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
    const shouldUpdate = this.props.map.map.length > 0 && this.props.map.map[this.props.y][this.props.x] !== nextProps.map.map[this.props.y][this.props.x]
    if (shouldUpdate) console.log(this.props.y, this.props.x, 'Updating')
    return shouldUpdate
  }

  render () {
    if (this.props.x === 5 && this.props.y === 5) {
      console.log(
      'rendering cell')
    }
    if (this.props.map.map.length === 0) {
      return <td></td>
    }
    const bgColor = this.props.map.map[this.props.y][this.props.x]
    ? '#F44336' : '#E0E0E0'
    // if (this.props.y === 15 && this.props.x === 15) {
    //   bgColor = '#000000'
    // }
    return (<td style={{
      width: 5,
      height: 5,
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
