import React, { Component } from 'react'
import styled from 'styled-components'
import Accounts from 'components/ritekit/accounts'
import createExampleHeader from 'fn/createExampleHeader'

const Container = styled.div`
  padding: 20px;
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
    let example = createExampleHeader(
      'RiteKit | Account Manager',
      `RiteKit lets you connect multiple social media accounts.
      This component replicates that functionality.`,
      'https://ritekit.com/accounts/'
    )

    return (
      <div>
        {example}
        <Container>
          <Accounts />
        </Container>
      </div>
    )
  }
}

export default RiteIndex
