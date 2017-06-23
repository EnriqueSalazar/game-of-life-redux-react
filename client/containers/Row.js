import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cell from './Cell'
import _ from 'lodash'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as MainActions from '../actions'

class Row extends Component {
  shouldComponentUpdate(nextProps) {
    const { y } = this.props
    // console.log('shouldComponentUpdate',!_.isEqual(this.props.map.life[y], nextProps.map.life[y]))
    return !_.isEqual(this.props.map.life[y], nextProps.map.life[y])
  }
  toggleSeed = (y, x) => {
    if (this.props.map.isEditing) {
      this.props.actions.toggleSeed(y, x)
    }
  }
  disableEdit = () => {
    this.props.actions.disableEdit()
  }
  enableEdit = (y, x) => {
    this.props.actions.toggleSeed(y, x)
    this.props.actions.enableEdit()
  }
  render() {
    const { y, size } = this.props
    if (this.props.map.life.length === 0) {
      return <tr />
    }
    const lifeRow = []
    for (let x = 0; x < size; x++) {
      lifeRow[x] = (
        <Cell
          key={x}
          x={x}
          y={y}
          bgColor={this.props.map.life[y][x]}
          toggleSeed={this.toggleSeed}
          disableEdit={this.disableEdit}
          enableEdit={this.enableEdit}
        />
      )
    }
    return (
      <tr>
        {lifeRow}
      </tr>
    )
  }
}
Row.propTypes = {
  size: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}
const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Row)
