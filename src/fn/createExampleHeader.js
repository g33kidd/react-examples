import React from 'react'
import styled from 'styled-components'
import { Link as L } from 'react-router-dom'

const ExampleHeader = styled.div`
  padding: 20px;
  background: #5e758e;
`
const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #FFF;
`
const Description = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 8px 0;
  font-weight: 400;
  color: #ededed;
`
const Link = styled.a`
  font-size: 14px;
  padding: 10px 0;
  color: #53b2f0;
  transition: color 150ms ease;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`
const RRLink = styled(L)`
  color: #53b2f0;
  text-decoration: none;
`

export default (title, content, link) => {
  return (
    <ExampleHeader>
      <Title><RRLink to="/">Examples</RRLink> / {title}</Title>
      <Description>{content}</Description>
      { link &&
        <Link href={link}>Example Inspired By {link}</Link>
      }
    </ExampleHeader>
  )
}
