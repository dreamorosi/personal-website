import React from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  color: #E9C249;
  font-family: 'Catamaran';
  display: block;
  width: 100%;
  text-align: center;
  @media (min-width: 700px) {
    margin: 0 50px 0 0;
    display: inline-block;
    width: auto;
  }
`

const Title = (props) => {
  return (
    <Text>{props.text}</Text>
  )
}

Title.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default Title
