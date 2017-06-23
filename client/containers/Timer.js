import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MainActions from '../actions'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isRunning: false
    }
  }
  componentWillMount = () => {
    this.props.actions.initMap(this.props.size)
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.size !== nextProps.size) {
      this.props.actions.initMap(this.props.size)
    }
  }
  // console.log('receiving props')
  componentDidMount() {
    console.log('setting timer')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     this.props.size !== nextProps.size || nextState.count !== this.state.count
  //   )
  // }
  toggleRunning = () => {
    const { isRunning } = this.state
    if (isRunning) {
      clearInterval(this.timer)
    } else {
      // this.initMap(this.props.size)
      this.timer = setInterval(this.tick, this.props.frecuency)
    }
    this.setState({isRunning:!isRunning})
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 })
    this.props.actions.updateMap()
  }

  initMap = () => {
    this.props.actions.initMap(this.props.size)
  }
  randomMap = () => {
    this.props.actions.randomMap(this.props.size)
  }
  render() {
    const { frecuency } = this.props
    const { isRunning } = this.state
    // console.log('Timer rendering...')
    return (
      <div>
        Frecuencia:{frecuency}ms|
        Generacion:{this.state.count}|
        <a onClick={this.toggleRunning} href="#">{isRunning ? 'Stop' : 'Start'}</a>|
        <a onClick={this.initMap} href="#">Reset</a>|
        <a onClick={this.randomMap} href="#">Random</a>
      </div>
    )
  }
}

Timer.propTypes = {
  actions: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  frecuency: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  map: state.map
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
