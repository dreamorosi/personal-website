import React, { Component } from 'react'

import Name from './components/Name'
import ProfileImage from './components/ProfileImage'
import Me from './images/me.jpg'
import Wrapper from './components/Wrapper'
import Col from './components/Col'
import Bio from './components/Bio'
import Icon from './components/Icon'
import Title from './components/Title'

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <Col width={50}>
          <Name />
        </Col>
        <Col width={50}>
          <ProfileImage src={Me} />
          <Bio />
        </Col>
        <Col width={50}>
          <Title text='Find Me on' />
          <Icon type='GitHub' />
          <Icon type='Twitter' />
          <Icon type='CodePen' />
          <Icon type='Instagram' />
          <Icon type='LinkedIn' />
        </Col>
        <Col width={50}>
          <Title text='Download my Resume' />
          <Icon type='Resume' />
        </Col>
      </Wrapper>
    )
  }
}

export default Home
