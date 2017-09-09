import React, { Component } from 'react'
import styled from 'styled-components'
import Accounts from 'components/ritekit/accounts'

const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`

const Header = styled.h1`
  font-size: 30px;
  line-height: 1;
`

const SubHeader = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
`

class RiteIndex extends Component {
  render () {
    return (
      <Container>
        <Header>RiteKit | Account Manager</Header>
        <SubHeader>Example of restyled and rewritten components in React.</SubHeader>
        <SubHeader>This example takes from the <a href="https://ritekit.com/accounts/" _target="blank">RiteKit accounts page</a>.</SubHeader>
        <Accounts />
      </Container>
    )
  }
}

export default RiteIndex
