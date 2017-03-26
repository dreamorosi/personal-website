import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-rendering: optimizeLegibility;
  font-kerning: normal;
  text-size-adjust: 100%;
  @media (min-width: 700px) {
    width: ${props => props.width}%;
  }
`

Col.propTypes = {
  width: React.PropTypes.number.isRequired
}

export default Col
