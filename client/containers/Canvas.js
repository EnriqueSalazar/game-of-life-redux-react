import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as MainActions from '../actions'
import Row from './Row'

class Canvas extends Component {
  render() {
    const { size } = this.props
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
        onMouseLeave={() => this.props.actions.disableEdit()}
      >
        <tbody>
          {lifeMap}
        </tbody>
      </table>
    )
  }
}
Canvas.propTypes = {
  size: PropTypes.number.isRequired
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)
