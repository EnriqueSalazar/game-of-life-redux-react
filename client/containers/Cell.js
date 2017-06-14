import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.bgColor !== nextProps.bgColor;
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

    return (
      <td
        style={{
          padding: 0,
          border: 0,
          width: 8,
          height: 8,
          backgroundColor: palette[this.props.bgColor]
        }}
      />
    );
  }
}

Cell.propTypes = {
  bgColor: PropTypes.number.isRequired
};

export default Cell;
