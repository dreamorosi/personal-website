import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  color: #E9C249;
  font-family: 'Catamaran';
  text-align: justify;
  padding: 0 10%;
  @media (min-width: 700px) {
    font-size: .9em;
    padding: 0 25%;
  }
`

const Bio = () => {
  return (
    <Paragraph>25 y/o student and developer with 4+ years of web development & web design freelance experience. Specialised as a Javascript Frontend developer that craft modern web applications with a special attention to UI and UX designs. Currently based in Barcelona, Spain</Paragraph>
  )
}

export default Bio
