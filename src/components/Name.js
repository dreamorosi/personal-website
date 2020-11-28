import React from 'react'
import styled from 'styled-components'

const NameContainer = styled.h1`
  font-family: 'MasterOfBreak';
  color: #fff;
  font-size: 4.5rem;
  text-shadow: 2px 2px 0 rgba(226, 172, 63, 0.4);
  text-decoration: none;
  padding: 0;
  line-height: 5.5rem;
  perspective: 500px;
  transform: rotate3d(0, 0, 0, 0);
  transform-style: preserve-3d;
  &:hover > span:first-child{
    transform: rotateY(15deg) rotateX(-20deg) rotateZ(-15deg);
  }
  &:hover > span:last-child{
    transform: rotateY(-15deg) rotateX(20deg);
  }
  @media (min-width: 700px) {
    font-size: 6rem;
    line-height: 7rem;
  }
`

const NameLine = styled.span`
  display: inline-block;
  position: relative;
  z-index: 2;
  transition: all 0.35s;
  left: 40px;
  &::after{
    content: '';
    display: block;
    background: #E9C249;
    height: 60%;
    position: absolute;
    top: 0;
    left: -60px;
    width: 125%;
    z-index: -1;
    transform: rotate(2deg) skew(-5deg);
  }
  @media (min-width: 700px) {
    top: 50px;
    left: 0;
  }
`

const NameSeparator = styled.br``

const Name = () => {
  return (
    <NameContainer>
      <NameLine>Andrea</NameLine>
      <NameSeparator />
      <NameLine>Amorosi</NameLine>
    </NameContainer>
  )
}

export default Name
