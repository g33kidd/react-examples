import React, { Component } from 'react'
import styled from 'styled-components'
import Connection from 'components/ritekit/connection'
import faker from 'faker'
// import NewConnection from 'components/ritekit/newConnection'

const Wrapper = styled.div``
const Connections = styled.div`
  padding: 5px 0;
`
const Header = styled.div`
  display: flex;
  background: #f1f1f1;
  padding: 15px 10px;
`
const Name = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`
const BetaTag = styled.span`
  font-size: 16px;
  color: #e260dc;
  padding: 0 5px;
  font-weight: 600;
  text-transform: uppercase;
`

const NewConnection = styled.div`
  display: flex;
  padding: 5px 10px;
  cursor: pointer;
`
const Icon = styled.i`
  flex: 0 0 32px;
  height: 32px;
  background: #333;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  line-height: 2 !important;
  transition: all 150ms ease;

  ${NewConnection}:hover & {
    background: #c12f93;
  }
`
const Text = styled.div`
  flex: 1;
  line-height: 1;
  padding: 8px 8px;
  font-weight: 600;
`

class ConnectionType extends Component {
  _addConnection = () => {
    this.props.onAddConnection({
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      type: this.props.type.slug
    })
  }

  render () {
    return (
      <Wrapper>
        <Header>
          <Name>
            {this.props.type.name}
            {this.props.type.beta && <BetaTag>beta</BetaTag>}
            {this.props.type.comingSoon && <BetaTag>Coming Soon</BetaTag>}
          </Name>
        </Header>
        <Connections>
          {this.props.connections.map((c, i) => (
            <Connection connection={c} key={i} />
          ))}
          {!this.props.type.comingSoon &&
            <NewConnection onClick={this._addConnection}>
              <Icon className="fa fa-plus" />
              <Text>Add Account</Text>
            </NewConnection>}
        </Connections>
      </Wrapper>
    )
  }
}

export default ConnectionType
