import React from 'react'
import PropTypes from 'prop-types'
import {
  red500
} from 'material-ui/styles/colors'
import styled from 'styled-components'

const StyledErrorText = styled.span`
bottom: 15px;
font-size: 16px;
line-height: 12px;
color: ${red500};
transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
text-decoration: underline;
`

const ErrorText = props => (
  <StyledErrorText >
    {props.children}
  </StyledErrorText>
)

ErrorText.propTypes = {
  children: PropTypes.string.isRequired
}

export default ErrorText
