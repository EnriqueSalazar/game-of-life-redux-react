import React from 'react'
import PropTypes from 'prop-types'
import {
  grey700
} from 'material-ui/styles/colors'
import styled from 'styled-components'

const StyledRegularText = styled.span`
color: ${grey700};
`

const RegularText = props => (
  <StyledRegularText >
    {props.children}
  </StyledRegularText>
)

RegularText.propTypes = {
  children: PropTypes.string.isRequired
}

export default RegularText
