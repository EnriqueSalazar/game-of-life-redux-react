import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as MainActions from '../actions'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      frecuency: 50,
      count: 0
    }
  }
  componentWillMount=() => {
    this.props.actions.initMap(this.props.size)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.size !== nextProps.size) {
      this.props.actions.initMap(this.props.size)
    }
  }
  // console.log('receiving props')
  componentDidMount () {
    console.log('setting timer')
    this.timer = setInterval(this.tick, this.state.frecuency)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.size !== nextProps.size || nextState.count !== this.state.count
  }

  tick=() => {
    this.setState({count: this.state.count + 1})
    this.props.actions.updateMap()
  }

  render () {
    const {
      frecuency
    } = this.state
    // console.log('Timer rendering...')
    return (
      <div>
        Frecuencia:{frecuency}ms<br />
        Generacion:{this.state.count}
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
