import React, { Component } from 'react'
import styled from 'styled-components'
import createServices from 'fn/createServices'
import Service from 'components/ritekit/service'

const ServiceContainer = styled.div`
  display: flex;
`


class Services extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      services: createServices()
    }
  }

  render () {
    let services = this.state.services.map(s => {
      return (
        <Service service={s} key={s.slug} />
      )
    })

    return (
      <ServiceContainer>
        {services}
      </ServiceContainer>
    )
  }
}

export default Services
