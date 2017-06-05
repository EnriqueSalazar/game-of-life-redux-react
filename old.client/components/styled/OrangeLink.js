import React from 'react'
import PropTypes from 'prop-types'
import {
  orange900
} from 'material-ui/styles/colors'

import styled from 'styled-components'

const StyledOrangeLink = styled.a`
&{
  color: ${orange900};
  cursor: pointer;
}
&:link {
  color: ${orange900};
  text-decoration: none;
}
&:hover {
  color: ${orange900};
  text-decoration: underlined;
}
`

const OrangeLink = props => (
  <StyledOrangeLink href={props.href}>
    {props.children}
  </StyledOrangeLink>

)

OrangeLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default OrangeLink
