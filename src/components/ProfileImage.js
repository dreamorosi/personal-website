import React from 'react'
import styled from 'styled-components'

const Pic = styled.img`
  width: 50%;
  border-radius: 50%;
  border: 3px solid #E9C249;
  @media (min-width: 700px) {
    width: 30%;
  }
`

const ProfileImage = (props) => {
  return (
    <Pic src={props.src} alt='Andrea Amorosi' />
  )
}

ProfileImage.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default ProfileImage
