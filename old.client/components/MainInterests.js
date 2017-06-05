import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import Interest from './Interest'
import HeaderTitle from './styled/HeaderTitle'
import RegularText from './styled/RegularText'
// to do receive array and iterate to create all the Interests

const MainInterests = props => (
  <div>
    <Row center="xs">
      <Col xs={12}>
        <HeaderTitle>
              Interests
            </HeaderTitle>
        <br />
        <RegularText>
              Please select your interests:
            </RegularText>
      </Col>
    </Row>
    <Row center="xs">
      {Object.entries(props.interests).map((subject) =>
        <Interest
          key={subject[0]}
          label={subject[0]}
          active={subject[1]}
          onTouchTap={props.onInterestToggle} />
            )}
    </Row>
  </div>
)

MainInterests.propTypes = {
  interests: PropTypes.object.isRequired,
  onInterestToggle: PropTypes.func.isRequired
}

export default MainInterests
