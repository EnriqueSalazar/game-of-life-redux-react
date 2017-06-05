import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  grey700
} from 'material-ui/styles/colors'

const StyledHeader = styled.div`
color: ${grey700};
textAlign: center;
fontWeight: bold;
fontSize: 1.5em;
paddingTop: 30px;
`

const HeaderTitle = props => (
  <StyledHeader>
    {props.children}
  </StyledHeader>
)

HeaderTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default HeaderTitle
