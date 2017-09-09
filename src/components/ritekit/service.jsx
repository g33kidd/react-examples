import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ConnectionType from 'components/ritekit/ConnectionType'

const Wrapper = styled.div`
  flex: 1;
  margin: 0 10px;
  border: 2px solid #f1f1f1;
  border-radius: 3px;
`
const ServiceName = styled.div`
  font-size: 20px;
  padding: 20px;
  text-align: center;
`

class Service extends Component {
  static propTypes = {
    service: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      service: props.service
    }
  }

  _onAddConnection = (connection) => {
    let service = this.state.service
    service.connections = [...service.connections, connection]
    this.setState({
      service
    })
    // this.setState({
    //   service: {
    //     connections: [...this.state.service.connections, connection]
    //   }
    // })
  }

  render () {
    return (
      <Wrapper>
        <ServiceName>{this.state.service.name}</ServiceName>
        {this.state.service.connectionTypes.map((t,i) => (
          <ConnectionType
            key={i}
            type={t}
            connections={this.state.service.connections.filter(c => c.type === t.slug)}
            onAddConnection={this._onAddConnection}/>
        ))}
      </Wrapper>
    )
  }
}

export default Service
