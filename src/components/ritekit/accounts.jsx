import React, { Component } from 'react'
import styled from 'styled-components'
import createServices from 'fn/createServices'
import Account from 'components/ritekit/account'

const ServiceContainer = styled.div`
  display: flex;
`


class Accounts extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      services: createServices()
    }
  }

  render () {

    let services = this.state.services.map(s => {
      return (
        <Account service={s} key={s.slug} />
      )
    })

    return (
      <ServiceContainer>
        {services}
      </ServiceContainer>
    )

    // return (
    //   <AccountContain>
    //     <Account>
    //       <Service>Twitter</Service>
    //       <Section>
    //         <Header>
    //           <Name>Profiles</Name>
    //           <Icon className="fa fa-plus" />
    //         </Header>
    //
    //         <Connections>
    //           <Connection>
    //             <Avatar src="https://unsplash.it/32" />
    //             <ConnectionName>@g33kidd</ConnectionName>
    //             <Actions>
    //               <Icon className="fa fa-trash" />
    //             </Actions>
    //           </Connection>
    //         </Connections>
    //       </Section>
    //     </Account>
    //   </AccountContain>
    // )
  }
}

export default Accounts
