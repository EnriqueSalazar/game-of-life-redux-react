import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import {
  orange500,
  orange900,
  grey900,
  red500
} from 'material-ui/styles/colors'
import Toggle from 'material-ui/Toggle'
import HeaderTitle from './styled/HeaderTitle'

const toggleStyle = {
  style: {
    textAlign: 'left',
    color: grey900,
    maxWidth: 650
  },
  trackSwitchedStyle: {
    backgroundColor: orange900
  },
  thumbSwitchedStyle: {
    backgroundColor: orange500
  }
}

const termsText =
'Sytac may contact me for business opportunities and promotional information.'

const MainTerms = props => (
  <div>
    <Row
      center="xs"
      style={{
        paddingBottom: 20
      }}>
      <HeaderTitle>
          Terms of Service*
        </HeaderTitle>
    </Row>
    <Row style={(!props.termsOfServiceTrue &&
      props.triedToStart) ? {
        borderColor: red500,
        borderStyle: 'solid',
        borderWidth: '2px'
      } : {}}>
      <Col
        xsOffset={1}
        xs={10}
        sm={12}>
        <center>
          <Toggle
            label={termsText}
            onToggle={props.onTermsToggle}
            labelPosition="right"
            style={toggleStyle.style}
            trackSwitchedStyle={toggleStyle.trackSwitchedStyle}
            thumbSwitchedStyle={toggleStyle.thumbSwitchedStyle} />
        </center>
      </Col>
    </Row>
  </div>
)

MainTerms.propTypes = {
  onTermsToggle: PropTypes.func.isRequired,
  termsOfServiceTrue: PropTypes.bool.isRequired,
  triedToStart: PropTypes.bool.isRequired
}

export default MainTerms
