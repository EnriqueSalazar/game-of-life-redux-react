import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as MainActions from '../actions';

class Cell extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   color: 0
  //   // };
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { map: nextMap } = nextProps.map;
  //   const { map } = this.props.map;
  //   const { x, y } = nextProps;
  //   if (map.length > 0) {
  //     const nextValue = nextMap[y][x];
  //     const { color: stateColor } = this.state;
  //     // console.log(map[y][x], nextValue)
  //     if (
  //       (nextValue && nextValue !== map[y][x]) ||
  //       (!nextValue && stateColor > 0)
  //     ) {
  //       // if ((nextMap[y][x] && stateColor < 11) || (!nextMap[y][x] && stateColor > 0)) {
  //       const color = nextValue ? 11 : stateColor - 1;
  //       // console.log(this.props.y, this.props.x, nextValue, this.state.color, color)
  //       color >= 0 && this.setState({ color });
  //     }
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps.y, nextProps.x, nextState.color !== this.state.color, '==>', nextState.color !== this.state.color)
    // return nextState.color !== this.state.color;

    const { y, x } = this.props;
    // console.log(
    //     y,
    //     x,
    //   //   this.props.map.map.length === 0,
    //   //   nextProps.map.map.length === 0,
    //   this.props.map.map[y][x] !== nextProps.map.map[y][x]
    // );

    return this.props.bgColor !== nextProps.bgColor;
    // return (
    //   this.props.map.map.length === 0 ||
    //   nextProps.map.map.length === 0 ||
    //   this.props.map.map[y][x] !== nextProps.map.map[y][x]
    // );
  }

  render() {
    const palette = [
      '#FFFFFF',
      '#FFEBEE',
      '#FFCDD2',
      '#EF9A9A',
      '#E57373',
      '#EF5350',
      '#F44336',
      '#E53935',
      '#D32F2F',
      '#C62828',
      '#B71C1C',
      '#000000'
    ];

    // if (this.props.x === 5 && this.props.y === 5) {
    //   console.log(
    //     'rendering cell')
    // }
    // if (this.props.map.map.length === 0) {
    //   return <td />;
    // }
    // let bgColor;
    // const { color } = this.state;
    // if (color <= 0) {
    //   bgColor = palette[0];
    // } else if (color >= 11) {
    //   bgColor = palette[11];
    // } else {
    //   bgColor = palette[color];
    // }
    // const bgColor = this.props.map.map[this.props.y][this.props.x]
    //   ? '#F44336' : '#E0E0E0'
    // if (this.props.y === 15 && this.props.x === 15) {
    //   bgColor = '#000000'
    // }
    // put width and heigth back to 8
    return (
      <td
        style={{
          padding: 0,
          border: 0,
          width: 8,
          height: 8,
          backgroundColor: palette[this.props.bgColor]
          // palette[this.props.map.map[this.props.y][this.props.x]]
          // backgroundColor: bgColor
        }}
      />
    );
  }
}

Cell.propTypes = {
  actions: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  map: state.map
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
