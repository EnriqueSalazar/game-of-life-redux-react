import React from 'react'
import PropTypes from 'prop-types'
import {
  grey400,
  grey900,
  orange100
} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'

const flatButtonStyles = {
  inactivelabelStyle: {
    color: grey400,
    minWidth: 150
  },
  activelabelStyle: {
    color: grey900
  },
  activeStyle: {
    width: 150,
    backgroundColor: orange100
  },
  inactiveStyle: {
    width: 150
  }
}

const Interest = props => (
  <FlatButton
    label={props.label}
    labelStyle={props.active
? flatButtonStyles.activelabelStyle
: flatButtonStyles.inactivelabelStyle}
    onTouchTap={props.onTouchTap}
    style={props.active
? flatButtonStyles.activeStyle
: flatButtonStyles.inactiveStyle} />
)

Interest.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onTouchTap: PropTypes.func.isRequired
}

export default Interest
