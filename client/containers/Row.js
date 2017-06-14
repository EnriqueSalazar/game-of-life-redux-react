import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MainActions from '../actions';

class Row extends Component {
  shouldComponentUpdate(nextProps) {
    const { y } = this.props;
    // console.log(
    //   'row shouldComponentUpdate',
    //   !_.isEqual(this.props.map.map[y], nextProps.map.map[y])
    // );
    return !_.isEqual(this.props.map.map[y], nextProps.map.map[y]);
  }
  render() {
    const { y, size } = this.props;
    // console.log('rendering', y);
    if (this.props.map.map.length === 0) {
      return <td />;
    }
    const lifeRow = [];
    // console.log('generating row', y);
    for (let x = 0; x < size; x++) {
      lifeRow[x] = <Cell key={x} y={y} bgColor={this.props.map.map[y][x]} />;
      // lifeRow[x] = <Cell key={x} y={y} x={x} />;
    }
    return (
      <tr>
        {lifeRow}
      </tr>
    );
  }
}
Row.propTypes = {
  size: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};
const mapStateToProps = state => ({
  map: state.map
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Row);
