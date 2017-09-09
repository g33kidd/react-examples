import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  padding: 5px 10px;
`
const Avatar = styled.img`
  flex: 0 0 32px;
  height: 32px;
  border-radius: 3px;
`
const Username = styled.div`
  flex: 1;
  line-height: 1;
  padding: 8px 8px;
`
const Actions = styled.div`

`

class Connection extends Component {
  render () {
    return (
      <Wrapper>
        <Avatar src="https://unsplash.it/200" alt="avatar" />
        <Username>{this.props.connection.username}</Username>
      </Wrapper>
    )
  }
}

export default Connection
