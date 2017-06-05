import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import {
  blueGrey900,
  white
} from 'material-ui/styles/colors'
import sytac from '../assets/logo_light_gray_text.png'

const MainHeader = props => (
  <Row
    style={{
      backgroundColor: blueGrey900,
      height: 110,
      color: white
    }}>
    <Col
      xs={12}
      smOffset={1}
      sm={10}
      mdOffset={2}
      md={8}
      lgOffset={3}
      lg={6}>
      <div style={{
        verticalAlign: 'middle',
        margin: 'auto',
        paddingTop: 17

      }}>
        <img src={sytac} alt="Sytac" height="83" />
      </div>
    </Col>
  </Row>
)

export default MainHeader
