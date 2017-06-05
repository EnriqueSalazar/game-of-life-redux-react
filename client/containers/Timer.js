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
      frecuency: 250
    }
  }
  componentWillMount=() => {
    this.props.actions.initMap(this.props.size)
  }
  componentWillReceiveProps (nextProps) {
    console.log('receiving props')
    if (this.props.size !== nextProps.size) {
      this.props.actions.initMap(this.props.size)
    }
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, this.state.frecuency)
  }
  shouldComponentUpdate (nextProps) {
    return this.props.size !== nextProps.size
  }

  tick=() => {
    this.props.actions.updateMap()
  }

  render () {
    const {
      frecuency
    } = this.state
    console.log('Timer rendering...')
    return (
      <div>
        {frecuency}
        <button onClick={this.tick} >{'>>>'}</button>
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
