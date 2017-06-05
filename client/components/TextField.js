import React from 'react'
import PropTypes from 'prop-types'
import MTextField from 'material-ui/TextField'
import {orange500} from 'material-ui/styles/colors'

const inputStyles = {
  hintStyle: {
    color: orange500
  },
  underlineStyle: {
    borderColor: orange500
  },
  underlineFocusStyle: {
    borderColor: orange500
  },
  floatingLabelStyle: {
    color: orange500
  },
  floatingLabelFocusStyle: {
    color: orange500
  }
}
const TextField = props => (
  <MTextField
    id={props.id}
    hintText={props.hintText}
    floatingLabelText={props.floatingLabelText}
    floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
    underlineFocusStyle={inputStyles.underlineFocusStyle}
    errorText={props.errorText}
    onChange={props.onDetailChange}
    autoComplete={'off'}
    multiLine={!!props.multiLine}
    fullWidth />
)

TextField.propTypes = {
  hintText: PropTypes.string.isRequired,
  floatingLabelText: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  onDetailChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  multiLine: PropTypes.bool
}

export default TextField
