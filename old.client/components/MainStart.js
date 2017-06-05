import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-flexbox-grid'
import 'tachyons'

import HeaderTitle from './styled/HeaderTitle'
import StartButton from './styled/StartButton'

import java from '../assets/java.png'
import javascript from '../assets/js.png'
import scala from '../assets/scala.png'

const MainStart = props => (<div>
  <Row>
    <Col xs={12}>
      <HeaderTitle>
      Choose your quiz
    </HeaderTitle>
    </Col>
  </Row>
  <Row center="xs">
    <Col xs={12}>
      <br />
      <div className='flex flex-wrap justify-center'>
        <StartButton
          onClick={props.onSubmit}
          onSubmit={props.onSubmit}
          subject='Java'>
          {java}
        </StartButton>
        <StartButton
          onClick={props.onSubmit}
          onSubmit={props.onSubmit}
          subject='JavaScript'>
          {javascript}
        </StartButton>
        <StartButton
          onClick={props.onSubmit}
          onSubmit={props.onSubmit} subject='Scala'>
          {scala}
        </StartButton>
      </div>
      <br />
    </Col>
  </Row>
</div>)

MainStart.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default MainStart

/*        <startButton subject='Scala' img={scala} />
<startButton subject='JavaScript' img={javascript} />
<startButton subject='Java' img={java} />
<startButton subject='Clojure' img={clojure} />    */
